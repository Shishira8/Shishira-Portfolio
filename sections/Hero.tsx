
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '../components/Button';
import { TechChip } from '../components/Badge';
import { TECH_STACK } from '../constants';
import { DataVisualizer } from '../components/DataVisualizer';
import { Highlight } from '../components/Highlight';

export const Hero: React.FC = () => {
  // Fix: Explicitly type the event to match the Button component's expected signature
  const handleCtaClick = (e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>) => {
    e.preventDefault();
    const element = document.getElementById('case-study');
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden bg-zinc-950">
      {/* Background Animation Layer - Fitted to the Right */}
      <div className="absolute top-0 right-0 h-full w-full md:w-[55%] lg:w-[50%] z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-zinc-950/10 to-zinc-950 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-transparent to-zinc-950 z-10 pointer-events-none" />
        <DataVisualizer />
      </div>

      {/* Content Layer - Positioned to the Left on Desktop */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 w-full pt-24 pb-12">
        <div className="flex flex-col md:flex-row items-center md:justify-start">
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full md:w-3/5 lg:w-1/2 md:pr-12"
          >
            <div className="flex items-center gap-2 mb-6">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
                <span className="text-zinc-400 text-sm font-medium mono">Hiring for AI & Data Infrastructure</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-4 leading-tight text-white">
              Shishira <br /> Shashidhar
            </h1>
            
            <h2 className="text-2xl md:text-3xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-violet-400 mb-8 tracking-tight">
              Data Infrastructure & Systems Engineer
            </h2>
            
            <div className="space-y-6 mb-12">
              <p className="text-xl text-zinc-100 max-w-2xl font-medium leading-tight">
                Recognized by <Highlight>NASA Apps</Highlight> and the <Highlight>Taco Bell Foundation</Highlight> for technical excellence.
              </p>
              
              <p className="text-zinc-400 text-base md:text-lg max-w-xl leading-relaxed">
                Architecting high-throughput data platforms. Currently engineering a centralized analytics warehouse for the <Highlight className="text-zinc-100">City of Long Beach (LGB Airport)</Highlight>.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 mb-12">
              <Button onClick={handleCtaClick} href="#case-study" className="bg-amber-400 hover:bg-amber-300 text-zinc-950 border-none px-8 font-bold">View DE Product</Button>
              <Button variant="secondary" href="mailto:shishirashashidhar@gmail.com">Get in Touch</Button>
              <div className="flex gap-2">
                <Button variant="ghost" href="https://github.com/Shishira8" className="px-3 hover:text-amber-400">GitHub</Button>
                <Button variant="ghost" href="https://www.linkedin.com/in/shishira-shashidhar-b634311b1/" className="px-3 hover:text-violet-400">LinkedIn</Button>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pt-8 border-t border-zinc-800/50">
              <span className="w-full text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-4 block">Core Stack Components</span>
              <div className="flex flex-wrap gap-2">
                {TECH_STACK.slice(0, 7).map(tech => (
                  <TechChip key={tech} label={tech} />
                ))}
                <span className="text-zinc-600 text-xs self-center ml-2 mono italic">...and more</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
