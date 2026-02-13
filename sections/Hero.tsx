
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { TechChip } from '../components/Badge';
import { TECH_STACK } from '../constants';

export const Hero: React.FC = () => {
  return (
    <div className="pt-32 pb-20 max-w-4xl mx-auto px-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-2 mb-6">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
            </span>
            <span className="text-zinc-400 text-sm font-medium mono">Available for Data Infrastructure & Backend Roles</span>
        </div>
        
        <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-4 leading-none">
          Shishira Shashidhar
        </h1>
        
        <h2 className="text-2xl md:text-3xl font-semibold text-zinc-500 mb-8 tracking-tight">
          Data Infrastructure & Systems Engineer
        </h2>
        
        <div className="space-y-6 mb-12">
          <p className="text-xl md:text-2xl text-zinc-100 max-w-2xl font-medium leading-tight">
            Recognized by <span className="text-emerald-400">NASA</span> and the <span className="text-emerald-400">Taco Bell Foundation</span> for technical proficiency.
          </p>
          
          <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
            I architect high-throughput data platforms and mission-critical backend systems. Currently engineering a centralized analytics warehouse for the <span className="text-zinc-200">City of Long Beach</span>.
          </p>
        </div>

        <div className="flex flex-wrap gap-4 mb-16">
          <Button href="#case-study">Engineering Deep Dive: JobPulse</Button>
          <Button variant="secondary" href="mailto:shishirashashidhar@gmail.com">Contact Me</Button>
          <div className="flex gap-2">
            <Button variant="ghost" href="https://github.com" className="px-3">GitHub</Button>
            <Button variant="ghost" href="https://www.linkedin.com/in/shishira-shashidhar-b634311b1/" className="px-3">LinkedIn</Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 pt-8 border-t border-zinc-900">
          <span className="w-full text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-4 block">Core Technology Stack</span>
          {TECH_STACK.map(tech => (
            <TechChip key={tech} label={tech} />
          ))}
        </div>
      </motion.div>
    </div>
  );
};
