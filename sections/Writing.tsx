
import React from 'react';
import { Section } from '../components/Section';
import { ARTICLES } from '../constants';

export const Writing: React.FC = () => {
  return (
    <Section title="Technical Writing" id="writing">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((article, idx) => (
          <a 
            key={idx} 
            href={article.link}
            className="group flex flex-col p-6 border border-zinc-900 rounded bg-zinc-900/10 hover:border-zinc-700 transition-all duration-300"
          >
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-3">{article.date}</span>
            <h3 className="text-zinc-200 font-semibold mb-3 group-hover:text-white transition-colors">
                {article.title}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed">
              {article.description}
            </p>
            <span className="mt-auto pt-6 text-[10px] text-zinc-500 font-bold uppercase tracking-widest group-hover:text-zinc-300 transition-colors">
                Read Article →
            </span>
          </a>
        ))}
      </div>
    </Section>
  );
};
