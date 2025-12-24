
import React from 'react';
import { ExternalLink } from 'lucide-react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center backdrop-blur-[2px]">
          <button className="bg-white text-slate-950 px-6 py-2 rounded-full font-bold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform">
            View Case Study <ExternalLink size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-8">
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tech.map(t => (
            <span key={t} className="text-[10px] font-mono font-bold tracking-widest uppercase py-1 px-2 bg-slate-800 text-slate-400 rounded">
              {t}
            </span>
          ))}
        </div>
        
        <h3 className="font-display text-2xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        
        <p className="text-slate-400 text-sm mb-4 leading-relaxed line-clamp-2">
          {project.problem}
        </p>
        
        <div className="pt-4 border-t border-slate-800 mt-auto">
          <p className="text-emerald-400 text-sm font-medium">
            {project.impact}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
