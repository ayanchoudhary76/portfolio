import React, { useState, useEffect } from 'react';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import DownloadCV from './components/DownloadCV';
import Contact from './components/Contact';

function App() {
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="relative w-full min-h-screen font-sans selection:bg-primary/30 scroll-smooth">
      <CursorTrail />
      
      {/* Background Animated Elements */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/10 md:bg-purple-600/20 mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob"></div>
        <div className="absolute top-[20%] right-[-10%] w-[35%] h-[35%] rounded-full bg-blue-600/10 md:bg-blue-600/20 mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[50%] h-[50%] rounded-full bg-cyan-600/10 md:bg-cyan-600/20 mix-blend-multiply dark:mix-blend-screen filter blur-[100px] animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content Z-index over background */}
      <div className="relative z-10 flex flex-col">
        {/* Navigation Navbar */}
        <nav className="fixed w-full z-50 glass px-6 py-4 flex justify-between items-center transition-all border-b border-white/10 shadow-sm backdrop-blur-md">
          <a href="#hero" className="text-2xl font-bold font-display text-gradient cursor-pointer">
            Ayan.
          </a>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 font-medium text-slate-600 dark:text-slate-300">
              <a href="#skills" className="hover:text-primary transition-colors">Skills</a>
              <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
              <a href="#training" className="hover:text-primary transition-colors">Experience</a>
              <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
            </div>
            
            <button 
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 w-10 h-10 flex items-center justify-center rounded-full glass glass-hover cursor-pointer"
              aria-label="Toggle Theme"
            >
              <span className="text-lg">{darkMode ? '☀️' : '🌙'}</span>
            </button>
          </div>
        </nav>

        {/* Portfolio Sections Rendered As Requested */}
        <main className="flex flex-col w-full overflow-hidden">
          <Hero />
          <Skills />
          <Projects />
          <Training />
          <Certificates />
          <Achievements />
          <DownloadCV />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="w-full py-8 text-center text-slate-500 font-medium border-t border-slate-200 dark:border-slate-800/50 mt-12 bg-lightBg/50 dark:bg-darkBg/50 backdrop-blur-md z-10">
          <p>© {new Date().getFullYear()} Ayan Choudhary. Built with MERN Stack.</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
