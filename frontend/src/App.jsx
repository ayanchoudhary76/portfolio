import React, { useState, useEffect } from 'react';
import CursorTrail from './components/CursorTrail';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Training from './components/Training';
import Certificates from './components/Certificates';
import Achievements from './components/Achievements';
import Education from './components/Education';
import DownloadCV from './components/DownloadCV';
import Contact from './components/Contact';

// Helper to manage cookies
const setCookie = (name, value, days) => {
  const date = new Date();
  date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
  document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
};

const getCookie = (name) => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
};

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    // Load theme from cookie, default to true (dark mode)
    const savedTheme = getCookie('theme');
    if (savedTheme === 'light') return false;
    return true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      setCookie('theme', 'dark', 365);
    } else {
      document.documentElement.classList.remove('dark');
      setCookie('theme', 'light', 365);
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
        {/* Upgraded Premium Floating Navbar */}
        <div className="fixed top-6 left-0 w-full z-50 flex justify-center px-4">
          <nav className="w-full max-w-5xl rounded-full glass px-8 py-4 flex justify-between items-center transition-all border border-white/20 dark:border-slate-700 shadow-2xl backdrop-blur-xl bg-white/40 dark:bg-slate-900/40 hover:bg-white/60 dark:hover:bg-slate-900/60 duration-300">
            <a href="#hero" className="text-3xl font-bold font-display text-gradient cursor-pointer drop-shadow-sm hover:scale-105 transition-transform">
              Ayan.
            </a>
            
            <div className="flex items-center gap-8">
              <div className="hidden md:flex gap-8 font-semibold text-slate-700 dark:text-slate-300">
                <a href="#skills" className="hover:text-primary dark:hover:text-primary-light transition-colors relative group">
                  Skills
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#projects" className="hover:text-primary dark:hover:text-primary-light transition-colors relative group">
                  Projects
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#training" className="hover:text-primary dark:hover:text-primary-light transition-colors relative group">
                  Experience
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
                <a href="#contact" className="hover:text-primary dark:hover:text-primary-light transition-colors relative group">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                </a>
              </div>
              
              <button 
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 w-12 h-12 flex items-center justify-center rounded-full glass glass-hover cursor-pointer border border-transparent shadow-inner"
                aria-label="Toggle Theme"
              >
                <span className="text-xl drop-shadow-md">{darkMode ? '☀️' : '🌙'}</span>
              </button>
            </div>
          </nav>
        </div>

        {/* Portfolio Sections Rendered As Requested, with increased gap spacing */}
        <main className="flex flex-col w-full overflow-hidden pt-12 md:pt-24 gap-12 md:gap-24">
          <Hero />
          <Skills />
          <Projects />
          <Training />
          <Certificates />
          <Achievements />
          <Education />
          <DownloadCV />
          <Contact />
        </main>
        
        {/* Footer */}
        <footer className="w-full py-10 text-center text-slate-500 font-medium border-t border-slate-200 dark:border-slate-800/50 mt-12 bg-lightBg/50 dark:bg-darkBg/50 backdrop-blur-md z-10">
          <p className="mb-2">© {new Date().getFullYear()} Ayan Choudhary.</p>
          <p className="text-sm">Built with MERN Stack • Premium UI/UX</p>
        </footer>
      </div>
    </div>
  );
}

export default App;
