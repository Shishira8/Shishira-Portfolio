
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'https://esm.sh/three@0.173.0/examples/jsm/controls/OrbitControls';

export const DataVisualizer: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const width = containerRef.current.clientWidth;
    const height = containerRef.current.clientHeight;
    const isMobile = width < 768;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, width / height, 1, 1000);
    camera.position.set(5, 6, 30);

    const renderer = new THREE.WebGLRenderer({ 
      antialias: false, 
      alpha: true,
      powerPreference: "high-performance",
      precision: isMobile ? "mediump" : "highp" // Use lower precision on mobile for speed
    });
    
    renderer.setSize(width, height);
    // Strict pixel ratio cap for performance
    renderer.setPixelRatio(isMobile ? 1 : Math.min(window.devicePixelRatio, 1.5));
    containerRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enablePan = false;
    controls.enableZoom = false; 
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.4;

    const gu = { time: { value: 0 } };

    // PERFORMANCE SCALING: Drastically reduce counts for mobile
    const CORE_COUNT = isMobile ? 4000 : 10000;
    const DISK_COUNT = isMobile ? 8000 : 25000;
    const TOTAL_COUNT = CORE_COUNT + DISK_COUNT;

    const positions = new Float32Array(TOTAL_COUNT * 3);
    const sizes = new Float32Array(TOTAL_COUNT);
    const shifts = new Float32Array(TOTAL_COUNT * 4);

    let idx = 0;
    let sIdx = 0;
    let shIdx = 0;

    const fillData = (x: number, y: number, z: number) => {
      positions[idx++] = x;
      positions[idx++] = y;
      positions[idx++] = z;
      sizes[sIdx++] = Math.random() * 1.5 + 0.5;
      shifts[shIdx++] = Math.random() * Math.PI;
      shifts[shIdx++] = Math.random() * Math.PI * 2;
      shifts[shIdx++] = (Math.random() * 0.9 + 0.1) * Math.PI * 0.1;
      shifts[shIdx++] = Math.random() * 0.9 + 0.1;
    };

    // Core stars
    for (let i = 0; i < CORE_COUNT; i++) {
      const v = new THREE.Vector3().randomDirection().multiplyScalar(Math.random() * 0.5 + 8.5);
      fillData(v.x, v.y, v.z);
    }

    // Disk stars
    for (let i = 0; i < DISK_COUNT; i++) {
      const r = 8, R = 40;
      const rand = Math.pow(Math.random(), 1.5);
      const radius = Math.sqrt(R * R * rand + (1 - rand) * r * r);
      const angle = Math.random() * 2 * Math.PI;
      const x = radius * Math.cos(angle);
      const z = radius * Math.sin(angle);
      const y = (Math.random() - 0.5) * 3;
      fillData(x, y, z);
    }

    const g = new THREE.BufferGeometry();
    g.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    g.setAttribute("sizes", new THREE.BufferAttribute(sizes, 1));
    g.setAttribute("shift", new THREE.BufferAttribute(shifts, 4));

    const m = new THREE.PointsMaterial({
      size: isMobile ? 0.2 : 0.16, // Larger points on mobile to fill space with fewer particles
      transparent: true,
      depthTest: false,
      blending: THREE.AdditiveBlending,
      opacity: isMobile ? 0.6 : 0.85 // Lower opacity on mobile to reduce "glow" compute cost
    });

    m.onBeforeCompile = (shader) => {
      shader.uniforms.time = gu.time;
      shader.vertexShader = `
        uniform float time;
        attribute float sizes;
        attribute vec4 shift;
        varying vec3 vColor;
        ${shader.vertexShader}
      `.replace(
        `gl_PointSize = size;`,
        `gl_PointSize = size * sizes;`
      ).replace(
        `#include <color_vertex>`,
        `#include <color_vertex>
          float d = length(abs(position) / vec3(40.0, 10.0, 40.0));
          d = clamp(d, 0.0, 1.0);
          vColor = mix(vec3(251.0, 191.0, 36.0), vec3(139.0, 92.0, 246.0), d) / 255.0;
        `
      ).replace(
        `#include <begin_vertex>`,
        `#include <begin_vertex>
          float t = time;
          float moveT = mod(shift.x + shift.z * t, 6.28318530718);
          float moveS = mod(shift.y + shift.z * t, 6.28318530718);
          transformed += vec3(cos(moveS) * sin(moveT), cos(moveT), sin(moveS) * sin(moveT)) * shift.w;
        `
      );
      
      shader.fragmentShader = `
        varying vec3 vColor;
        ${shader.fragmentShader}
      `.replace(
        /void\s*main\s*\(\s*\)\s*\{/g,
        `void main() {
          float d = length(gl_PointCoord.xy - 0.5);
        `
      ).replace(
        `vec4 diffuseColor = vec4( diffuse, opacity );`,
        `vec4 diffuseColor = vec4( vColor, smoothstep(0.5, 0.1, d) );`
      );
    };

    const p = new THREE.Points(g, m);
    p.rotation.order = "ZYX";
    p.rotation.z = 0.2;
    scene.add(p);

    const clock = new THREE.Clock();
    let frameId: number;

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      controls.update();
      const t = clock.getElapsedTime() * 0.4;
      gu.time.value = t * Math.PI;
      p.rotation.y = t * 0.04;
      renderer.render(scene, camera);
    };

    const handleResize = () => {
      if (!containerRef.current) return;
      const w = containerRef.current.clientWidth;
      const h = containerRef.current.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };

    window.addEventListener('resize', handleResize);
    animate();
    
    // Signal readiness to fade in
    setIsReady(true);

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(frameId);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
      m.dispose();
      g.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className={`absolute inset-0 w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-1000 ${isReady ? 'opacity-100' : 'opacity-0'}`}
      aria-hidden="true"
    />
  );
};
