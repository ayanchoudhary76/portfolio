import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  const educationData = [
    {
      degree: "B.Tech in Computer Science and Engineering",
      institution: "Lovely Professional University",
      duration: "2023 - 2027",
      grade: "CGPA: 8.73",
      color: "from-blue-500/20 to-cyan-500/20",
      borderColor: "hover:border-blue-500/50",
      iconColor: "text-blue-500",
      iconBg: "bg-blue-500/10"
    },
    {
      degree: "12th Standard (Higher Secondary)",
      institution: "Aravalli Hills Public School",
      duration: "2022 - 2023",
      grade: "Percentage: 78%",
      color: "from-purple-500/20 to-pink-500/20",
      borderColor: "hover:border-purple-500/50",
      iconColor: "text-purple-500",
      iconBg: "bg-purple-500/10"
    },
    {
      degree: "10th Standard (Secondary School)",
      institution: "Mohan Lal Dayal Vinay Mandir (Parle) School",
      duration: "2020 - 2021",
      grade: "Percentage: 90%",
      color: "from-green-500/20 to-emerald-500/20",
      borderColor: "hover:border-green-500/50",
      iconColor: "text-green-500",
      iconBg: "bg-green-500/10"
    }
  ];

  return (
    <section id="education" className="py-24 relative z-10">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            My <span className="text-gradient">Education</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Academic background and qualifications
          </p>
        </div>

        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`glass rounded-3xl p-8 md:p-10 border hover:border-slate-300 dark:hover:border-slate-600 transition-colors duration-300 relative overflow-hidden group`}
            >
              <div className={`absolute -inset-2 bg-gradient-to-r ${edu.color} blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
              
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 relative z-10">
                <div className={`w-16 h-16 shrink-0 rounded-2xl ${edu.iconBg} flex items-center justify-center text-3xl`}>
                  <FaGraduationCap className={edu.iconColor} />
                </div>
                
                <div className="flex-1 w-full">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2">
                    <h3 className="text-2xl md:text-3xl font-bold font-display text-slate-800 dark:text-white">
                      {edu.degree}
                    </h3>
                    <span className="inline-block mt-2 md:mt-0 px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium text-slate-600 dark:text-slate-300 whitespace-nowrap border border-slate-200 dark:border-slate-700">
                      {edu.duration}
                    </span>
                  </div>
                  
                  <h4 className="text-lg font-medium text-primary dark:text-primary-light mb-3">
                    {edu.institution}
                  </h4>
                  
                  <p className="text-slate-600 dark:text-slate-400 font-medium">
                    {edu.grade}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
