
import React from 'react';

export const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-900">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="font-bold tracking-tight text-sm uppercase mono">
          Shishira<span className="text-zinc-500">.Dev</span>
        </div>
        <div className="flex gap-6 text-[11px] font-bold uppercase tracking-widest text-zinc-500">
          <a href="#achievements" className="hover:text-zinc-100 transition-colors">Achievements</a>
          <a href="#case-study" className="hover:text-zinc-100 transition-colors">Engineering</a>
          <a href="#experience" className="hover:text-zinc-100 transition-colors">Experience</a>
          <a href="#writing" className="hover:text-zinc-100 transition-colors">Insights</a>
        </div>
      </div>
    </nav>
  );
};
