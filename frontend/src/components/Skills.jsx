import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SiJavascript, SiPython, SiCplusplus, SiReact, SiTailwindcss, SiRedux, SiNodedotjs, SiExpress, SiMongodb, SiPostman, SiJsonwebtokens, SiGit, SiPhp } from 'react-icons/si';
import { FaJava, FaDatabase, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { TbApi } from 'react-icons/tb';

const skillCategories = [
  'All', 'Languages', 'Frontend', 'Backend', 'Database', 'Tools', 'Soft Skills'
];

const skillsData = [
  { name: 'JavaScript', category: 'Languages', icon: SiJavascript, color: 'text-yellow-400' },
  { name: 'PHP', category: 'Languages', icon: SiPhp, color: 'text-indigo-400' },
  { name: 'Java', category: 'Languages', icon: FaJava, color: 'text-orange-500' },
  { name: 'C++', category: 'Languages', icon: SiCplusplus, color: 'text-blue-600' },
  { name: 'Python', category: 'Languages', icon: SiPython, color: 'text-blue-500' },
  
  { name: 'React.js', category: 'Frontend', icon: SiReact, color: 'text-cyan-400', isMern: true },
  { name: 'Tailwind CSS', category: 'Frontend', icon: SiTailwindcss, color: 'text-cyan-500' },
  { name: 'Redux Toolkit', category: 'Frontend', icon: SiRedux, color: 'text-purple-500' },
  
  { name: 'Node.js', category: 'Backend', icon: SiNodedotjs, color: 'text-green-500', isMern: true },
  { name: 'Express.js', category: 'Backend', icon: SiExpress, color: 'text-gray-400', isMern: true },
  { name: 'PHP', category: 'Backend', icon: SiPhp, color: 'text-indigo-400' },
  
  { name: 'MongoDB', category: 'Database', icon: SiMongodb, color: 'text-green-500', isMern: true },
  { name: 'SQL', category: 'Database', icon: FaDatabase, color: 'text-blue-400' },
  
  { name: 'Git', category: 'Tools', icon: SiGit, color: 'text-orange-500' },
  { name: 'Postman', category: 'Tools', icon: SiPostman, color: 'text-orange-400' },
  { name: 'WebSocket', category: 'Tools', icon: TbApi, color: 'text-blue-300' },
  { name: 'JWT', category: 'Tools', icon: SiJsonwebtokens, color: 'text-pink-500' },
  { name: 'REST APIs', category: 'Tools', icon: TbApi, color: 'text-green-400' },
  
  { name: 'Problem Solving', category: 'Soft Skills', icon: null, color: 'text-purple-400' },
  { name: 'Time Management', category: 'Soft Skills', icon: null, color: 'text-blue-400' },
  { name: 'Adaptability', category: 'Soft Skills', icon: null, color: 'text-teal-400' },
  { name: 'Team Work', category: 'Soft Skills', icon: null, color: 'text-pink-400' },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState('All');

  const filteredSkills = activeTab === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="text-center mb-16 px-4 m-4">
        <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
          My <span className="text-gradient">Skills</span>
        </h2>
        <p className="text-slate-600 dark:text-slate-400 text-lg">
          Technologies & tools I work with
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {skillCategories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === category 
                ? 'bg-primary text-white shadow-lg shadow-primary/40 scale-105' 
                : 'glass text-slate-600 dark:text-slate-300 hover:bg-white/50 dark:hover:bg-slate-800/50 hover:scale-105'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Skills Grid */}
      <motion.div 
        layout
        className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto"
      >
        <AnimatePresence>
          {filteredSkills.map((skill, index) => {
            const Icon = skill.icon;
            const isMern = skill.isMern;
            
            return (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3 }}
                key={`${skill.name}-${skill.category}`}
                className={`glass p-6 rounded-2xl flex flex-col items-center justify-center gap-4 group cursor-pointer transition-all duration-500
                  ${isMern ? 'border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(59,130,246,0.6)]' : 'hover:scale-105 hover:bg-white/80 dark:hover:bg-slate-800/80'}
                `}
              >
                <div className={`text-4xl transition-transform duration-500 group-hover:scale-125 group-hover:rotate-6 ${skill.color} ${isMern ? 'drop-shadow-[0_0_10px_currentColor]' : ''}`}>
                  {Icon ? <Icon /> : <span className="font-bold font-display text-2xl px-2">{skill.name.charAt(0)}</span>}
                </div>
                <h3 className={`font-semibold text-center ${isMern ? 'text-primary dark:text-primary-light' : 'text-slate-700 dark:text-slate-200'}`}>
                  {skill.name}
                </h3>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};

export default Skills;
