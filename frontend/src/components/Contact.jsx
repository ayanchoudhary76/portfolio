import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiPhone, FiLinkedin, FiGithub, FiSend, FiCheckCircle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState({ loading: false, success: false, error: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, success: false, error: '' });

    try {
      const response = await fetch('https://portfolio-api-jq0o.onrender.com/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setStatus({ loading: false, success: true, error: '' });
        setFormData({ name: '', email: '', subject: '', message: '' });
        // Reset success state after a while
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ loading: false, success: false, error: data.error || 'Something went wrong.' });
      }
    } catch (error) {
      console.error(error);
      setStatus({ loading: false, success: false, error: 'Failed to connect to the server.' });
    }
  };

  return (
    <section id="contact" className="py-24 relative z-10 w-full">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-4">
            Get in <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-lg">
            Let's discuss how we can work together
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8">
          
          {/* Contact Information Cards */}
          <div className="lg:w-1/3 flex flex-col gap-6">
            <motion.a 
              href="mailto:ayanchoudhary76@gmail.com"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="glass p-6 rounded-2xl flex items-center gap-4 group hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all border border-transparent hover:border-primary/30"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 text-primary flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <FiMail />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">Email</h4>
                <p className="text-slate-500 font-medium break-all">ayanchoudhary76@gmail.com</p>
              </div>
            </motion.a>

            <motion.a 
              href="tel:+919817937397"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="glass p-6 rounded-2xl flex items-center gap-4 group hover:bg-white/80 dark:hover:bg-slate-800/80 transition-all border border-transparent hover:border-green-500/30"
            >
              <div className="w-12 h-12 rounded-full bg-green-500/10 text-green-500 flex items-center justify-center text-xl group-hover:scale-110 transition-transform">
                <FiPhone />
              </div>
              <div>
                <h4 className="font-bold text-slate-800 dark:text-white">Phone</h4>
                <p className="text-slate-500 font-medium">+91 9817937397</p>
              </div>
            </motion.a>

            <div className="flex gap-4 mt-2">
              <motion.a 
                href="https://www.linkedin.com/in/ayanchoudhary76/"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex-1 glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:bg-[#0077b5]/10 transition-colors border border-transparent hover:border-[#0077b5]/50"
              >
                <div className="text-3xl text-[#0077b5] group-hover:scale-110 transition-transform"><FiLinkedin /></div>
                <span className="font-semibold text-slate-800 dark:text-white">LinkedIn</span>
              </motion.a>
              <motion.a 
                href="https://github.com/ayanchoudhary76"
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex-1 glass p-6 rounded-2xl flex flex-col items-center justify-center gap-3 group hover:bg-slate-800/10 dark:hover:bg-slate-700/50 transition-colors border border-transparent hover:border-slate-800 dark:hover:border-slate-500"
              >
                <div className="text-3xl text-slate-800 dark:text-white group-hover:scale-110 transition-transform"><FiGithub /></div>
                <span className="font-semibold text-slate-800 dark:text-white">GitHub</span>
              </motion.a>
            </div>
          </div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-2/3 glass rounded-3xl p-8 lg:p-10 border border-white/20 dark:border-slate-700/50 shadow-2xl relative overflow-hidden"
          >
            {/* Background glowing orb */}
            <div className="absolute top-[-10%] right-[-10%] w-64 h-64 bg-primary/20 rounded-full blur-3xl pointer-events-none fade-in"></div>

            <h3 className="text-2xl font-bold font-display text-slate-800 dark:text-white mb-6">Send Me A Message</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-6 relative z-10">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-600 dark:text-slate-400">Your Name *</label>
                  <input 
                    type="text" 
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="John Doe"
                  />
                </div>
                <div className="flex-1 flex flex-col gap-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-600 dark:text-slate-400">Your Email *</label>
                  <input 
                    type="email" 
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-sm font-semibold text-slate-600 dark:text-slate-400">Subject</label>
                <input 
                  type="text" 
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-600 dark:text-slate-400">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-100 dark:bg-slate-800/50 border border-slate-300 dark:border-slate-700 rounded-xl px-4 py-3 text-slate-800 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow resize-none"
                  placeholder="Hi Ayan, I would like to discuss..."
                ></textarea>
              </div>

              <div className="flex items-center justify-between mt-2">
                {status.error && <p className="text-red-500 font-medium">{status.error}</p>}
                {status.success && (
                  <p className="text-green-500 font-medium flex items-center gap-2">
                    <FiCheckCircle /> Message sent successfully!
                  </p>
                )}
                {!status.error && !status.success && <span></span>}

                <button 
                  type="submit" 
                  disabled={status.loading}
                  className={`px-8 py-3 rounded-xl bg-primary hover:bg-primary-dark text-white font-semibold transition-all shadow-lg flex items-center gap-2 ${status.loading ? 'opacity-70 cursor-not-allowed' : 'hover:scale-105 shadow-primary/30'}`}
                >
                  {status.loading ? 'Sending...' : (
                    <>
                      Send Message <FiSend />
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
