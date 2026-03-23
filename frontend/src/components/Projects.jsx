import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiGithub, FiX } from 'react-icons/fi';

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
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section id="projects" className="py-24 relative z-10 w-full">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            A selection of my recent full-stack and systems work
          </p>
        </div>

        {/* Grid Container Update */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
          {projectsData.map((project, idx) => (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="glass rounded-3xl overflow-hidden group cursor-pointer hover:-translate-y-2 transition-transform duration-500 border border-white/20 dark:border-slate-700/50 shadow-xl flex flex-col h-full"
            >
              {/* Image Box */}
              <div className="h-64 overflow-hidden relative">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-50 transition-opacity" />
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute bottom-6 left-6 z-20">
                  <p className="text-white/90 text-sm font-medium mb-2 backdrop-blur-md px-3 py-1 rounded-full bg-black/20 inline-block border border-white/10">{project.timeline}</p>
                  <h3 className="text-2xl font-bold text-white font-display drop-shadow-md">{project.title}</h3>
                </div>
              </div>

              {/* Content Preview */}
              <div className="p-8 flex flex-col flex-grow">
                <p className="text-slate-600 dark:text-slate-300 mb-6 flex-grow">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-auto pt-2">
                  {project.tech.map(tech => (
                    <span key={tech} className="px-3 py-1 text-xs font-bold rounded-full bg-primary/10 text-primary-dark dark:text-primary-light border border-primary/20">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
                className="absolute top-4 right-4 z-50 p-2 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors"
                aria-label="Close modal"
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
                    <span className="text-primary-light text-sm font-bold mb-1 block">{selectedProject.timeline}</span>
                    <h2 className="text-3xl font-bold font-display text-white">{selectedProject.title}</h2>
                  </div>
                </div>
              </div>

              <div className="p-8 md:w-1/2 flex flex-col justify-between">
                <div>
                  <div className="hidden md:block mb-6">
                    <h2 className="text-3xl font-bold font-display text-slate-800 dark:text-white leading-tight">{selectedProject.title}</h2>
                    <p className="text-primary-dark dark:text-primary-light font-bold mt-2">{selectedProject.timeline}</p>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                     {selectedProject.description}
                  </p>

                  <h4 className="font-bold text-slate-800 dark:text-white mb-3 text-lg border-b border-slate-200 dark:border-slate-700 pb-2">Key Features</h4>
                  <ul className="list-disc pl-5 space-y-2 text-slate-600 dark:text-slate-400 mb-8 font-medium">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i}>{feature}</li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {selectedProject.tech.map(tech => (
                      <span key={tech} className="px-3 py-1 text-sm font-semibold rounded border border-primary/30 text-primary bg-primary/5">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 mt-auto pt-6 border-t border-slate-200 dark:border-slate-700/50">
                  <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="flex-1 flex items-center justify-center gap-2 py-4 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
                    <FiGithub className="text-xl" /> GitHub
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
