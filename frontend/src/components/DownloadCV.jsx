import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload } from 'react-icons/fi';
import cv from '../assets/AyanChoudhary.pdf';

const DownloadCV = () => {
  return (
    <section id="download-cv" className="py-12 relative z-10">
      <div className="container mx-auto px-4 max-w-4xl">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-primary to-purple-600 rounded-3xl p-1 md:p-2 shadow-2xl relative overflow-hidden group"
        >
          {/* Animated inner background */}
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 animate-pulse mix-blend-overlay pointer-events-none"></div>
          
          <div className="glass !bg-white/10 dark:!bg-slate-900/60 !backdrop-blur-3xl rounded-[1.5rem] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 h-full relative z-10 border-none">
            
            <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-white mb-4">
                Ready to work together?
              </h2>
              <p className="text-white/80 text-lg max-w-lg">
                Download my resume to get a detailed overview of my skills, experience, and academic background.
              </p>
            </div>

            <motion.a 
              href={cv} 
              target="_blank"
              download="AyanChoudhary.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-5 rounded-2xl bg-white text-primary font-bold font-display text-lg flex items-center gap-3 shadow-2xl hover:shadow-white/20 transition-all flex-shrink-0"
            >
              <FiDownload className="text-2xl animate-bounce" />
              Download CV
            </motion.a>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DownloadCV;
