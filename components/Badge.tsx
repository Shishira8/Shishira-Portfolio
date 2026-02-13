
import React from 'react';

export const Badge: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <span className="inline-block px-2 py-1 text-xs font-medium border border-zinc-700 bg-zinc-900 text-zinc-300 rounded hover:border-zinc-500 transition-colors duration-200">
    {children}
  </span>
);

export const TechChip: React.FC<{ label: string }> = ({ label }) => (
  <span className="mono text-[11px] md:text-xs text-zinc-400 border border-zinc-800 px-3 py-1 rounded-full bg-zinc-900/50 flex items-center gap-2">
    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/60" />
    {label}
  </span>
);
