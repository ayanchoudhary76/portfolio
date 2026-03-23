import React from 'react';
import { motion } from 'framer-motion';
import { SiLeetcode, SiHackerrank } from 'react-icons/si';

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Coding <span className="text-gradient">Profiles</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Competitive programming and problem solving
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* LeetCode Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="glass rounded-3xl p-8 border hover:border-yellow-500/50 transition-colors duration-300 relative overflow-hidden group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-yellow-500/10 text-yellow-500 flex items-center justify-center text-4xl">
                <SiLeetcode />
              </div>
              <div>
                <h3 className="text-3xl font-bold font-display text-slate-800 dark:text-white">LeetCode</h3>
                <a href="https://leetcode.com/u/ayanchoudhary76/" target="_blank" rel="noopener noreferrer" className="text-yellow-600 dark:text-yellow-400 font-medium cursor-pointer hover:underline block mt-1">@ayanchoudhary76</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold font-display text-slate-800 dark:text-white mb-1">288*</p>
                <p className="text-sm font-medium text-slate-500 whitespace-nowrap">Problems Solved</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold font-display text-slate-800 dark:text-white mb-1">100 Days '24</p>
                <p className="text-sm font-medium text-slate-500">Badge / Rating</p>
              </div>
            </div>
          </motion.div>

          {/* HackerRank Profile */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass rounded-3xl p-8 border hover:border-green-500/50 transition-colors duration-300 relative overflow-hidden group"
          >
            <div className="absolute -inset-2 bg-gradient-to-r from-green-500/20 to-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <div className="flex items-center gap-6 mb-8 relative z-10">
              <div className="w-16 h-16 rounded-2xl bg-green-500/10 text-green-500 flex items-center justify-center text-4xl">
                <SiHackerrank />
              </div>
              <div>
                <h3 className="text-3xl font-bold font-display text-slate-800 dark:text-white">HackerRank</h3>
                <a href="https://www.hackerrank.com/profile/ayanchoudhary76" target="_blank" rel="noopener noreferrer" className="text-green-600 dark:text-green-400 font-medium cursor-pointer hover:underline block mt-1">@ayanchoudhary76</a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 relative z-10">
              <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold font-display text-slate-800 dark:text-white mb-1">5 ★</p>
                <p className="text-sm font-medium text-slate-500 whitespace-nowrap">C++</p>
              </div>
              <div className="bg-white/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl p-6 text-center">
                <p className="text-4xl font-bold font-display text-slate-800 dark:text-white mb-1">973*</p>
                <p className="text-sm font-medium text-slate-500">Points</p>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
};

export default Achievements;
