
import React from 'react';
import { Section } from '../components/Section';
import { EXPERIENCE } from '../constants';

export const Experience: React.FC = () => {
  return (
    <Section title="Professional Experience" id="experience">
      <div className="space-y-12">
        {EXPERIENCE.map((item, idx) => (
          <div key={idx} className="relative pl-8 border-l border-zinc-800">
            <div className="absolute w-2.5 h-2.5 bg-zinc-700 rounded-full -left-[5.5px] top-1.5" />
            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-4">
              <h3 className="text-lg font-bold text-zinc-100">{item.role}</h3>
              <span className="text-zinc-500 text-xs font-medium mono uppercase tracking-wider">{item.period}</span>
            </div>
            <p className="text-zinc-400 font-medium mb-4 text-sm">{item.company}</p>
            <ul className="space-y-3">
              {item.bullets.map((bullet, bIdx) => (
                <li key={bIdx} className="text-zinc-500 text-sm leading-relaxed flex gap-3">
                  <span className="text-zinc-700 font-bold">•</span>
                  <span>{bullet}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};
