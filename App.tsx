
import React from 'react';
import { Hero } from './sections/Hero';
import { WhatIBuild } from './sections/WhatIBuild';
import { JobPulseCaseStudy } from './sections/JobPulseCaseStudy';
import { AdditionalProjects } from './sections/AdditionalProjects';
import { Experience } from './sections/Experience';
import { Achievements } from './sections/Achievements';
import { Writing } from './sections/Writing';
import { Footer } from './sections/Footer';
import { Navbar } from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-zinc-950 text-zinc-100 selection:bg-zinc-100 selection:text-zinc-950 overflow-x-hidden">
      {/* UI layer */}
      <Navbar />
      
      {/* Content layer */}
      <main className="relative z-10">
        <Hero />
        <WhatIBuild />
        <Achievements />
        <JobPulseCaseStudy />
        <AdditionalProjects />
        <Experience />
        <Writing />
      </main>
      
      <Footer />
    </div>
  );
};

export default App;
