import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  return (
    <div 
      className="group cursor-pointer"
      onClick={onClick}
    >
      <div className="relative overflow-hidden rounded-2xl shadow-xl">
        <img 
          src={project.image} 
          alt={project.title}
          className="w-full h-64 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity duration-500 flex items-center justify-center">
          <span className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            View Project
          </span>
        </div>
      </div>
      <h3 className="mt-4 text-xl font-display font-bold text-title">{project.title}</h3>
      <p className="mt-2 text-subtitle">{project.description}</p>
    </div>
  );
}