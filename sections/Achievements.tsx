
import React from 'react';
import { Section } from '../components/Section';
import { ACHIEVEMENTS } from '../constants';

export const Achievements: React.FC = () => {
  return (
    <Section title="Honors & Recognition" id="achievements">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ACHIEVEMENTS.map((item, idx) => (
          <div 
            key={idx} 
            className="p-6 rounded-lg border border-zinc-900 bg-zinc-900/10 hover:border-zinc-800 transition-all duration-300"
          >
            <div className="text-emerald-500 text-[10px] font-bold uppercase tracking-widest mb-2 mono">
              {item.highlight}
            </div>
            <h3 className="text-zinc-100 font-bold mb-2 leading-tight">
              {item.title}
            </h3>
            <p className="text-zinc-500 text-xs font-medium mb-3">{item.org}</p>
            <p className="text-zinc-400 text-xs leading-relaxed">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </Section>
  );
};
