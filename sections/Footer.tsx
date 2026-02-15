
import React from 'react';

export const Footer: React.FC = () => {
  return (
    <footer className="py-20 border-t border-zinc-900 bg-zinc-950">
      <div className="max-w-4xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          <div>
            <h3 className="text-lg font-bold mb-2">Engineering with grit.</h3>
            <p className="text-zinc-500 text-sm max-w-xs">
              Shishira Shashidhar | Data Engineer specializing in Snowflake, T-SQL, and production-grade ETL systems.
            </p>
          </div>
          
          <div className="flex flex-col gap-3">
            <span className="text-xs font-bold text-zinc-600 uppercase tracking-widest">Connect</span>
            <div className="flex gap-6 items-center">
              <a href="mailto:shishirashashidhar@gmail.com" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">Email</a>
              <a href="https://github.com/Shishira8" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">GitHub</a>
              <a href="https://linkedin.com/in/shishira-shashidhar-b634311b1/" className="text-sm text-zinc-400 hover:text-zinc-100 transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-900 flex justify-between items-center text-[10px] text-zinc-600 font-bold uppercase tracking-widest mono">
          <span>&copy; {new Date().getFullYear()} / SHISHIRA SHASHIDHAR</span>
          <span>DATA ENGINEERING • CLOUD INFRA</span>
        </div>
      </div>
    </footer>
  );
};
