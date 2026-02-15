
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [showResume, setShowResume] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScrollState = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScrollState);
    return () => window.removeEventListener('scroll', handleScrollState);
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    
    if (id === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      window.history.pushState(null, '', '/');
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Height of fixed navbar
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      
      window.history.pushState(null, '', `#${id}`);
    }
  };

  const navLinks = [
    { label: 'Expertise', id: 'capabilities' },
    { label: 'Achievements', id: 'achievements' },
    { label: 'DE Product', id: 'case-study' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Insights', id: 'writing' },
  ];

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-950/90 backdrop-blur-md border-b border-zinc-900 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          <div className="font-bold tracking-tight text-sm uppercase mono">
            <a href="#hero" onClick={(e) => handleScroll(e, 'hero')} className="hover:opacity-80 transition-opacity">
              Shishira<span className="text-zinc-500">.Dev</span>
            </a>
          </div>
          
          <div className="hidden lg:flex gap-6 text-[10px] font-bold uppercase tracking-widest text-zinc-500 items-center">
            {navLinks.map((link) => (
              <a 
                key={link.id} 
                href={`#${link.id}`} 
                onClick={(e) => handleScroll(e, link.id)} 
                className="hover:text-zinc-100 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <button 
              onClick={() => setShowResume(true)}
              className="ml-4 bg-zinc-100 text-zinc-950 px-4 py-1.5 rounded text-[10px] font-bold hover:bg-white transition-colors"
            >
              Resume
            </button>
          </div>

          {/* Mobile: show visible nav buttons (no toggle) */}
          <div className="flex lg:hidden gap-3 items-center flex-wrap">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleScroll(e, link.id)}
                className="text-[10px] font-bold uppercase tracking-widest text-zinc-500 hover:text-zinc-100 px-2 py-1"
              >
                {link.label}
              </a>
            ))}
            <button
              onClick={() => setShowResume(true)}
              className="bg-zinc-100 text-zinc-950 px-3 py-1 rounded text-[10px] font-bold"
            >
              Resume
            </button>
          </div>
        </div>
        
      </nav>

      {/* Resume Modal */}
      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-zinc-950/90 backdrop-blur-sm"
          >
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              className="relative w-full max-w-4xl h-[85vh] bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden shadow-2xl flex flex-col"
            >
              <div className="p-4 border-b border-zinc-800 flex justify-between items-center bg-zinc-900">
                <h3 className="font-bold text-sm uppercase tracking-widest text-zinc-100">Shishira_Shashidhar_Resume.pdf</h3>
                <button 
                  onClick={() => setShowResume(false)}
                  className="text-zinc-400 hover:text-white p-2"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M15 5L5 15M5 5l10 10" />
                  </svg>
                </button>
              </div>
              <div className="flex-grow bg-white overflow-auto p-4 md:p-12">
                <div className="max-w-2xl mx-auto text-zinc-900 font-serif">
                  <header className="text-center mb-8">
                    <h1 className="text-2xl font-bold uppercase mb-1">Shishira Shashidhar</h1>
                    <p className="text-sm">shishirashashidhar@gmail.com | 562-615-1150</p>
                    <div className="flex justify-center gap-4 mt-2 text-xs text-zinc-500 font-sans">
                      <a href="https://linkedin.com/in/shishira-shashidhar-b634311b1/" className="hover:underline">LinkedIn</a>
                      <a href="https://github.com/Shishira8" className="hover:underline">GitHub</a>
                    </div>
                  </header>
                  
                  <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-zinc-300 mb-2 uppercase text-zinc-700 font-sans">Professional Summary</h2>
                    <p className="text-xs leading-relaxed">
                      Database Engineer at the City of Long Beach (Airport), architecting high-throughput data platforms and centralized analytics warehouses.
                    </p>
                  </section>

                  <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-zinc-300 mb-2 uppercase text-zinc-700 font-sans">Education</h2>
                    <div className="flex justify-between font-bold text-sm">
                      <span>MS in Information Systems, CSU Long Beach</span>
                      <span>2024 – 2026</span>
                    </div>
                    <div className="flex justify-between font-bold text-sm mt-2">
                      <span>BS in Computer Science, Dayananda Sagar University</span>
                      <span>2019 – 2023</span>
                    </div>
                  </section>

                  <section className="mb-6">
                    <h2 className="text-lg font-bold border-b border-zinc-300 mb-2 uppercase text-zinc-700 font-sans">Experience</h2>
                    <div className="mb-4">
                      <div className="flex justify-between font-bold text-sm">
                        <span>Database Engineer, City of Long Beach (Airport)</span>
                        <span>Sept 2025 – Present</span>
                      </div>
                      <ul className="list-disc pl-5 text-xs mt-1 space-y-1">
                        <li>Architected centralized Snowflake warehouse for 5M+ records using T-SQL.</li>
                        <li>Developed ETL pipelines via Azure Data Factory reducing manual reporting by 70%.</li>
                        <li>Built Power BI dashboards achieving $50,000 in annual cost savings.</li>
                      </ul>
                    </div>
                    <div className="mb-4">
                      <div className="flex justify-between font-bold text-sm">
                        <span>Database Engineer, Helton Law Group</span>
                        <span>May 2025 – Aug 2025</span>
                      </div>
                      <ul className="list-disc pl-5 text-xs mt-1 space-y-1">
                        <li>Identified $1.2M in potential risk exposure via clinical business rule automation.</li>
                        <li>Built automated ETL pipelines ensuring consistency of clinical datasets.</li>
                      </ul>
                    </div>
                  </section>
                  
                  <div className="text-center text-zinc-400 italic text-[10px] mt-12 font-sans">
                    Note: This is a web-optimized preview. Download the full version below.
                  </div>
                </div>
              </div>
              <div className="p-4 border-t border-zinc-800 bg-zinc-900 flex justify-end">
                <a 
                  href="mailto:shishirashashidhar@gmail.com?subject=Resume Request"
                  className="text-xs font-bold text-amber-400 hover:text-amber-300 flex items-center gap-2"
                >
                  Download Full PDF <span className="text-lg">↓</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
