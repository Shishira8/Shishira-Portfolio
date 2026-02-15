
import React from 'react';
import { Section } from '../components/Section';
import { ARTICLES } from '../constants';
import { motion } from 'framer-motion';

export const Writing: React.FC = () => {
  return (
    <Section title="Technical Insights & Strategy" id="writing">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {ARTICLES.map((article, idx) => (
          <motion.a 
            key={idx} 
            href={article.link}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group relative flex flex-col p-8 border border-zinc-900 rounded-xl bg-zinc-900/10 hover:border-emerald-500/30 transition-all duration-500 overflow-hidden"
          >
            {/* Background Glow Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-bold mb-4 mono">{article.date}</span>
            <h3 className="text-zinc-100 font-semibold mb-4 group-hover:text-emerald-400 transition-colors leading-tight">
                {article.title}
            </h3>
            <p className="text-xs text-zinc-500 leading-relaxed mb-8">
              {article.description}
            </p>
            
            <div className="mt-auto flex items-center gap-2 text-[10px] text-zinc-500 font-bold uppercase tracking-widest group-hover:text-zinc-200 transition-colors">
                Read Publication
                <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
            </div>
          </motion.a>
        ))}
      </div>
    </Section>
  );
};
