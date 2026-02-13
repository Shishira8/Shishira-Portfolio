
import React from 'react';
import { Section } from '../components/Section';
import { CAPABILITIES } from '../constants';

export const WhatIBuild: React.FC = () => {
  return (
    <Section title="What I Build" id="capabilities">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {CAPABILITIES.map((cap, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-lg border border-zinc-900 bg-zinc-900/20 hover:border-zinc-800 transition-colors duration-300 group"
          >
            <h3 className="text-zinc-100 font-semibold mb-3 flex items-center gap-2">
              <span className="text-zinc-500 mono text-xs">0{idx + 1}</span>
              {cap.title}
            </h3>
            <p className="text-zinc-400 text-sm leading-relaxed group-hover:text-zinc-300 transition-colors duration-300">
              {cap.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
