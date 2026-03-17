"use client";

import { useState } from 'react';
import { ProjectCategory } from '../../types';
import { projectsData } from '../../data/portfolio';

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState<ProjectCategory>('GENERAL');

  const filteredProjects = projectsData.filter(project => project.category === activeTab);

  return (
    <section id="projects" className="py-20">
      <div className="flex flex-col items-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-8 tracking-tight">
          Featured Projects
        </h2>
        
        <div className="flex p-1.5 bg-slate-100 rounded-xl shadow-inner">
          <button
            onClick={() => setActiveTab('GENERAL')}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === 'GENERAL'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            General & Side Projects
          </button>
          <button
            onClick={() => setActiveTab('ACADEMIC')}
            className={`px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200 ${
              activeTab === 'ACADEMIC'
                ? 'bg-white text-blue-700 shadow-sm'
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/50'
            }`}
          >
            Academic
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project) => (
          <div 
            key={project.id} 
            className="flex flex-col p-8 bg-white border border-slate-200 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
              {project.title}
            </h3>
            <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
              {project.description}
            </p>
            
            <div className="flex flex-col gap-6 mt-auto">
              <div className="flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span 
                    key={tech} 
                    className="px-4 py-1.5 bg-slate-50 border border-slate-100 text-slate-700 text-xs font-bold rounded-full tracking-wide"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors w-fit group/link"
                >
                  {project.linkLabel || 'View Project'}
                  <svg 
                    className="w-4 h-4 ml-1.5 transform group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}