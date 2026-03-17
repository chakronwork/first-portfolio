"use client";

import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Core Technologies",
    skills: [
      { name: "Node.js", level: "Advanced" },
      { name: "Python", level: "Advanced" },
      { name: "C#", level: "Basic" },
      { name: "TypeScript", level: "Intermediate" }
    ]
  },
  {
    title: "Databases & BaaS",
    skills: [
      { name: "PostgreSQL", level: "Basic" },
      { name: "MySQL", level: "Basic" },
      { name: "MariaDB", level: "Basic" },
      { name: "Supabase", level: "Basic" },
      { name: "Firebase", level: "Basic" }
    ]
  },
  {
    title: "Tools & API",
    skills: [
      { name: "Git", level: "Basic" },
      { name: "GitHub", level: "Basic" },
      { name: "GitLab", level: "Basic" },
      { name: "Postman", level: "Basic" }
    ]
  },
  {
    title: "AI & Productivity",
    skills: [
      { name: "Gemini", level: "Proficient" },
      { name: "ChatGPT", level: "Proficient" },
      { name: "Claude", level: "Proficient" }
    ]
  },
  {
    title: "General & Design",
    skills: [
      { name: "MS Office", level: "Basic" },
      { name: "Adobe Photoshop", level: "Basic" },
      { name: "Goole workspace", level: "Basic" },
      { name: "Goole AppScript", level: "Nomal" },
    ]
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function SkillsSection() {
  return (
    <section id="skills" className="py-20">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
          Technical Arsenal
        </h2>
        <p className="text-slate-600 text-center max-w-2xl">
          A comprehensive overview of my technical skills, development tools, and workflow enhancers.
        </p>
      </div>

      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skillCategories.map((category) => (
          <motion.div 
            key={category.title}
            variants={itemVariants}
            className="flex flex-col p-6 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-md transition-shadow"
          >
            <h3 className="text-lg font-bold text-slate-900 mb-6 pb-4 border-b border-slate-100">
              {category.title}
            </h3>
            <div className="flex flex-col gap-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="flex items-center justify-between">
                  <span className="font-medium text-slate-700">{skill.name}</span>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-50 text-slate-500 rounded-md border border-slate-100">
                    {skill.level}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}