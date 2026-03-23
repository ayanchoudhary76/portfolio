import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiAward } from 'react-icons/fi';
import training from '../assets/training.png';

const Training = () => {
  return (
    <section id="training" className="py-24 relative z-10 border-t border-slate-200 dark:border-slate-800/50">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Industrial <span className="text-gradient">Training</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Practical experiences and prototyping
          </p>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-8 md:p-12 relative overflow-hidden group"
        >
          {/* Decorative background circle */}
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-primary/10 rounded-full blur-3xl group-hover:bg-primary/20 transition-colors duration-500"></div>

          <div className="flex flex-col md:flex-row items-center gap-12 relative z-10">
            {/* Details */}
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 text-primary-dark dark:text-primary-light text-3xl mb-2">
                <FiAward />
              </div>
              <div>
                <h3 className="text-3xl font-bold font-display text-slate-800 dark:text-white mb-2">
                  Think Design Prototype
                </h3>
                <h4 className="text-xl text-primary font-medium">Lovely Professional University (LPU)</h4>
                <p className="text-slate-500 font-medium mt-1">Jun 2025 – Jul 2025</p>
              </div>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-lg">
                Participated in an intensive industrial training program focused on real-world design prototyping, combining technical skills with practical problem-solving methodologies to create viable software solutions.
              </p>
              
              <div className="pt-4">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 dark:border-slate-600 text-white hover:bg-slate-800 font-medium transition-colors"
                >
                  <FiExternalLink /> View Certificate
                </a>
              </div>
            </div>

            {/* Certificate Image Placeholder */}
            <div className="w-full md:w-5/12 aspect-[4/3] rounded-2xl overflow-hidden glass border border-white/20 dark:border-slate-700/50 shadow-xl group-hover:-translate-y-2 transition-transform duration-500 relative">
              <div className="absolute inset-0 flex items-center justify-center bg-slate-100 dark:bg-slate-800">
                <span className="text-slate-400 font-display font-medium">Certificate Image</span>
              </div>
              <img 
                src={training} 
                alt="Training Certificate" 
                className="w-full h-full object-cover opacity-70 group-hover:opacity-100 transition-opacity duration-300 relative z-10 MixBlendMode"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Training;
