import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemStats } from './components/ProblemStats';
import { SolutionSpecs } from './components/SolutionSpecs';
import { LiveDemo } from './components/LiveDemo';
import { Ecosystem } from './components/Ecosystem';
import { Footer } from './components/Footer';
import { AppSection } from './types';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AppSection>(AppSection.HOME);

  const handleNavigation = (section: AppSection) => {
    setActiveSection(section);
    const element = document.getElementById(section.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else if (section === AppSection.HOME) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-white font-sans text-slate-900">
      <Navbar activeSection={activeSection} onNavigate={handleNavigation} />
      
      <div id="home">
        <Hero onCtaClick={() => handleNavigation(AppSection.DEMO)} />
      </div>
      
      <div id="problem">
        <ProblemStats />
      </div>
      
      <div id="solution">
        <SolutionSpecs />
      </div>
      
      <div id="demo">
        <LiveDemo />
      </div>
      
      <div id="ecosystem">
        <Ecosystem />
      </div>
      
      <div id="contact">
        <Footer />
      </div>
    </div>
  );
};

export default App;