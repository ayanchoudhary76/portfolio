import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink } from 'react-icons/fi';
import privacyAndSecurity from '../assets/privacyAndSecurity.png';
import aiFundamentals from '../assets/aiFundamentals.png';
import dataAnalytics from '../assets/dataAnalytics.png';

const certificatesData = [
  {
    title: 'Privacy and Security in Online Social Media',
    issuer: 'NPTEL',
    date: 'Apr 2025',
    image: privacyAndSecurity,
    link: 'https://drive.google.com/file/d/1tKYwEJ-c-NVcJ8V5cNZJ9YgjN_HYpJ2k/view'
  },
  {
    title: 'Artificial Intelligence Fundamentals',
    issuer: 'IBM',
    date: 'Jul 2024',
    image: aiFundamentals,
    link: 'https://www.credly.com/badges/aaa69b2e-ad9a-4450-a668-46485652e68b/linked_in_profile'
  },
  {
    title: 'Data Analytics Essentials',
    issuer: 'Cisco',
    date: 'Jun 2024',
    image: dataAnalytics,
    link: 'https://www.credly.com/badges/9a069a07-07b4-43c5-a52d-e9b58f3321d3/public_url'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-24 relative z-10 w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Licenses & <span className="text-gradient">Certifications</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Continuous learning and professional credentials
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
        >
          {certificatesData.map((cert, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 rounded-3xl group flex flex-col h-full hover:scale-105 transition-transform duration-500 border border-white/20 dark:border-slate-700/50 relative overflow-hidden"
            >
              {/* Decorative top-right glow */}
              <div className="absolute -top-10 -right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="w-full h-48 rounded-xl overflow-hidden mb-6 relative border border-slate-200 dark:border-slate-700/50 bg-slate-100 dark:bg-slate-800">
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 bg-slate-900/40 backdrop-blur-sm">
                  <a href={cert.link} target="_blank" rel="noopener noreferrer" className="px-6 py-2 bg-primary text-white font-medium rounded-full flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-xl">
                    <FiExternalLink /> Verify
                  </a>
                </div>
                <img 
                  src={cert.image} 
                  alt={cert.title} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 MixBlendMode relative z-10" 
                />
              </div>

              <div className="flex flex-col flex-1">
                <h3 className="text-xl font-bold font-display text-slate-800 dark:text-white mb-2 leading-tight">
                  {cert.title}
                </h3>
                <div className="mt-auto flex items-end justify-between">
                  <div>
                    <h4 className="font-semibold text-primary">{cert.issuer}</h4>
                    <p className="text-sm font-medium text-slate-500 mt-1">Issued: {cert.date}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Certificates;
