import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiX, FiChevronRight, FiChevronLeft } from 'react-icons/fi';

const projectsData = [
  {
    id: 1,
    title: 'Book Exchange Platform',
    timeline: 'Jun 2025 – Aug 2025',
    description: 'A full-stack book exchange platform that enables users to list, discover, and exchange books with others through a structured and efficient workflow.',
    features: [
      'User authentication and secure session handling',
      'Book listing and browsing system',
      'Peer-to-peer exchange workflow',
      'Optimized relational database (10+ tables, 20+ queries)',
      'Role-based access control'
    ],
    tech: ['PHP', 'Tailwind CSS', 'MySQL'],
    image: 'https://via.placeholder.com/600x400/1d4ed8/ffffff?text=Book+Marketplace',
    github: '#',
    demo: '#'
  },
  {
    id: 2,
    title: 'GoTogether',
    timeline: 'Add placeholder timeline',
    description: 'A ride-sharing and travel companion web application designed to reduce travel costs and enhance user experience by connecting people traveling on similar routes.',
    features: [
      'Create and join rides between locations',
      'Cost-sharing mechanism for travelers',
      'Travel companion matching system',
      'Real-time ride availability and updates',
      'Secure authentication and user profiles',
      'REST API-based backend architecture'
    ],
    tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js'],
    image: 'https://via.placeholder.com/600x400/9333ea/ffffff?text=GoTogether',
    github: '#',
    demo: '#'
  },
  {
    id: 3,
    title: 'Energy Efficient OS Scheduling',
    timeline: 'Dec 2024 – Jan 2025',
    description: 'A simulation-based project implementing a Preemptive Shortest Job First (SJF) scheduling algorithm optimized for energy-aware CPU task execution.',
    features: [
      'Preemptive SJF scheduling logic',
      'Calculation of CT, TAT, WT metrics',
      'Energy consumption simulation',
      'Gantt chart visualization',
      'Structured logging for performance analysis'
    ],
    tech: ['C++'],
    image: 'https://via.placeholder.com/600x400/0ea5e9/ffffff?text=CPU+Scheduling',
    github: '#',
    demo: '#'
  },
  {
    id: 4,
    title: 'Hotel Booking Chatbot',
    timeline: 'Sep 2024 – Nov 2024',
    description: 'A conversational AI-based chatbot that assists users in finding hotels using real-time data such as pricing, amenities, and location-based recommendations.',
    features: [
      'Intent-based query processing',
      'Integration with Booking.com RapidAPI',
      'Dynamic filtering (budget, city, preferences)',
      'Location-based hotel recommendations',
      'Backend built with Flask'
    ],
    tech: ['Python', 'Flask', 'RapidAPI'],
    image: 'https://via.placeholder.com/600x400/10b981/ffffff?text=Hotel+Chatbot',
    github: '#',
    demo: '#'
  }
];

const Projects = () => {
  const scrollRef = useRef(null);
  const [selectedProject, setSelectedProject] = useState(null);

  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4 mb-12 flex justify-between items-end">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Some of my recent work
          </p>
        </div>
        
        {/* Scroll Controls */}
        <div className="flex gap-4">
          <button 
            onClick={scrollLeft}
            className="p-3 rounded-full glass glass-hover text-slate-800 dark:text-white group"
            aria-label="Scroll left"
          >
            <FiChevronLeft className="text-2xl group-hover:-translate-x-1 transition-transform" />
          </button>
          <button 
            onClick={scrollRight}
            className="p-3 rounded-full glass glass-hover text-slate-800 dark:text-white group"
            aria-label="Scroll right"
          >
            <FiChevronRight className="text-2xl group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Netflix Style Horizontal Scroll Container */}
      <div 
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto hide-scrollbar px-4 md:px-12 py-8 snap-x snap-mandatory"
        style={{ scrollPadding: '0 3rem' }}
      >
        {projectsData.map((project, idx) => (
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            key={project.id}
            onClick={() => setSelectedProject(project)}
            className="min-w-[320px] md:min-w-[450px] flex-shrink-0 glass rounded-3xl overflow-hidden group cursor-pointer snap-center hover:scale-[1.03] transition-all duration-500 border border-white/20 dark:border-slate-700/50 shadow-2xl relative"
          >
            {/* Image Box */}
            <div className="h-56 overflow-hidden relative">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity" />
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <p className="text-white/80 text-sm font-medium mb-1">{project.timeline}</p>
                <h3 className="text-2xl font-bold text-white font-display">{project.title}</h3>
              </div>
            </div>

            {/* Content Preview */}
            <div className="p-6">
              <p className="text-slate-600 dark:text-slate-300 line-clamp-2 mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.slice(0, 3).map(tech => (
                  <span key={tech} className="px-3 py-1 text-xs font-semibold rounded-full bg-primary/10 text-primary-dark dark:text-primary-light border border-primary/20">
                    {tech}
                  </span>
                ))}
                {project.tech.length > 3 && (
                  <span className="px-3 py-1 text-xs font-semibold rounded-full bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300">
                    +{project.tech.length - 3}
                  </span>
                )}
              </div>
            </div>
          </motion.div>
        ))}
        {/* Spacer to allow full scroll to end */}
        <div className="min-w-[10vw] flex-shrink-0"></div>
      </div>

      {/* Modal / Expanded View for Desktop */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-[200] flex items-center justify-center bg-slate-900/60 backdrop-blur-sm p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 50 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 50 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-lightCard dark:bg-darkCard backdrop-blur-2xl border border-white/20 dark:border-slate-600 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl shadow-2xl relative custom-scrollbar flex flex-col md:flex-row"
            >
              <button 
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
              >
                <FiX className="text-2xl" />
              </button>

              <div className="md:w-1/2 h-64 md:h-auto overflow-hidden relative">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-slate-900/80 md:from-transparent via-transparent to-transparent flex items-end p-6">
                  <div className="md:hidden">
                    <h2 className="text-3xl font-bold font-display text-white">{selectedProject.title}</h2>
                    <p className="text-white/80">{selectedProject.timeline}</p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="hidden md:block mb-6">
                    <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white">{selectedProject.title}</h2>
                    <p className="text-primary-dark dark:text-primary-light font-medium">{selectedProject.timeline}</p>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                     {selectedProject.description}
                  </p>

                  <h4 className="font-semibold text-slate-800 dark:text-white mb-3 text-lg">Key Features:</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-8">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 text-sm font-semibold rounded border border-primary/30 text-primary">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-slate-700/50">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium transition-colors">
                    <FiGithub /> GitHub
                  </a>
                  <a href={selectedProject.demo} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-medium transition-colors">
                    <FiExternalLink /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
