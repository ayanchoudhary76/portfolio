import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { FiArrowRight, FiMail } from 'react-icons/fi';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="container mx-auto px-8 max-w-7xl w-full flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
        
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 space-y-6"
        >
          <div className="inline-block px-4 py-2 rounded-full glass border border-primary/30 text-primary-light font-medium text-sm mb-4">
            Welcome to my portfolio
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-display leading-tight">
            Hi, I'm <span className="text-gradient">Ayan Choudhary</span>
          </h1>
          
          <div className="text-2xl md:text-3xl font-medium text-slate-600 dark:text-slate-300 h-16">
            <TypeAnimation
              sequence={[
                'Full Stack Developer',
                2000,
                'MERN Stack Enthusiast',
                2000,
                'Problem Solver',
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="font-display font-semibold"
            />
          </div>

          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-lg leading-relaxed">
            Passionate about solving real-world problems with code. I build exceptional and accessible digital experiences.
          </p>

          <div className="flex flex-wrap gap-4 pt-6">
            <a href="#projects" className="px-8 py-4 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-all shadow-lg shadow-primary/30 flex items-center gap-2 group hover:scale-105">
              View Projects 
              <FiArrowRight className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#contact" className="px-8 py-4 rounded-xl glass glass-hover font-semibold transition-all flex items-center gap-2 group">
              Contact Me
              <FiMail className="group-hover:rotate-12 transition-transform" />
            </a>
          </div>
        </motion.div>

        {/* Profile Image / Abstract Shape */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="flex-1 flex justify-center md:justify-end relative"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-96">
            {/* Glowing backdrop circle */}
            <div className="absolute inset-0 bg-gradient-to-tr from-primary to-purple-600 rounded-full blur-2xl opacity-40 animate-pulse"></div>
            
            {/* Image Container */}
            <div className="relative glass border border-white/20 w-full h-full rounded-full overflow-hidden flex items-center justify-center p-2 group">
              <div className="w-full h-full rounded-full bg-slate-200 dark:bg-slate-800 flex items-center justify-center overflow-hidden relative">
                <span className="text-slate-400 font-display font-medium text-xl z-10 group-hover:opacity-0 transition-opacity">Profile Image</span>
                {/* Replace src below with actual image later */}
                <img src="https://via.placeholder.com/400?text=Profile+Image" alt="Ayan Choudhary" className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-500 MixBlendMode" />
              </div>
            </div>
            
            {/* Floating decorator 1 */}
            <motion.div 
              animate={{ y: [0, -20, 0] }} 
              transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
              className="absolute -top-6 -left-6 glass p-4 rounded-2xl border border-white/10 shadow-xl"
            >
              <span className="text-2xl">💻</span>
            </motion.div>

            {/* Floating decorator 2 */}
            <motion.div 
              animate={{ y: [0, 20, 0] }} 
              transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
              className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl border border-white/10 shadow-xl"
            >
              <span className="text-2xl">🚀</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
