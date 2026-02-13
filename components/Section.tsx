
import React from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
  title?: string;
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export const Section: React.FC<SectionProps> = ({ title, children, id, className = "" }) => {
  return (
    <motion.section 
      id={id}
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`py-16 md:py-24 border-t border-zinc-800/50 ${className}`}
    >
      <div className="max-w-4xl mx-auto px-6">
        {title && (
          <h2 className="text-zinc-400 text-sm font-semibold uppercase tracking-widest mb-12 flex items-center gap-4">
            {title}
            <div className="h-px bg-zinc-800 flex-grow" />
          </h2>
        )}
        {children}
      </div>
    </motion.section>
  );
};
