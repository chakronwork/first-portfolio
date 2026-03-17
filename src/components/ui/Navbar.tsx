"use client";

import { motion } from 'framer-motion';

export function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-white/70 backdrop-blur-md border-b border-slate-200/50"
    >
      <div className="text-xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-sky-500 tracking-tight">
        CY.
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
        <a href="#skills" className="hover:text-indigo-600 transition-colors">Skills</a>
        <a href="#projects" className="hover:text-indigo-600 transition-colors">Projects</a>
      </div>

      <div className="flex items-center gap-4">
        <a
          href="mailto:your.email@example.com"
          className="hidden md:inline-flex px-5 py-2.5 text-sm font-bold text-white bg-indigo-600 rounded-full hover:bg-indigo-700 transition-all shadow-md hover:shadow-lg active:scale-95"
        >
          Hire Me
        </a>

        <button className="md:hidden p-2 text-slate-600 bg-slate-100 rounded-lg hover:bg-slate-200 transition-colors">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </div>
    </motion.nav>
  );
}