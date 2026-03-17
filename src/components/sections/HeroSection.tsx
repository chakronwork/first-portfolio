"use client";

import { motion } from 'framer-motion';

export function HeroSection() {
  return (
    <section className="flex flex-col items-start justify-center min-h-[70vh] gap-8">
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="inline-flex items-center px-4 py-1.5 rounded-full bg-indigo-50 text-indigo-600 text-sm font-semibold tracking-wide border border-indigo-100/50"
      >
        Available for Internship
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1]">
          Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500">Chakron Yuraket</span>.<br />
          Software Engineer (Internship).
        </h1>
      </motion.div>
      
      <motion.p 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-lg md:text-xl text-slate-600 max-w-2xl leading-relaxed"
      >
        I specialize in building robust backend systems and crafting efficient data architectures using Node.js and Python.
      </motion.p>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="flex flex-wrap gap-4 mt-2"
      >
        <a 
          href="#projects" 
          className="px-8 py-3.5 bg-slate-900 text-white font-semibold rounded-xl hover:bg-slate-800 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          View My Projects
        </a>
        <a 
          href="mailto:chakronwork@gmail.com" 
          className="px-8 py-3.5 bg-white text-slate-900 font-semibold rounded-xl border border-slate-200 hover:border-slate-300 hover:bg-slate-50 transition-all active:scale-95"
        >
          Contact Me
        </a>
      </motion.div>
    </section>
  );
}