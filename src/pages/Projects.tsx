import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import { projects } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['all', 'web', 'design', 'branding'];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-display font-bold text-title mb-8">My Projects</h2>
        
        <div className="flex space-x-4 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full ${
                selectedCategory === category
                  ? 'bg-button text-white shadow-lg'
                  : 'bg-white/5 text-subtitle hover:bg-white/10'
              }`}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {selectedProject && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-background rounded-2xl max-w-2xl w-full p-8 shadow-2xl">
              <img 
                src={selectedProject.image} 
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-2xl mb-6 shadow-xl"
              />
              <h3 className="text-2xl font-display font-bold text-title mb-4">{selectedProject.title}</h3>
              <p className="text-subtitle mb-6">{selectedProject.details}</p>
              {selectedProject.technologies && (
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.technologies.map(tech => (
                    <span key={tech} className="px-3 py-1 bg-white/5 text-subtitle rounded-full text-sm shadow-md">
                      {tech}
                    </span>
                  ))}
                </div>
              )}
              {selectedProject.liveUrl && (
                <a 
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block px-6 py-2 bg-button text-white rounded-full hover:bg-button/80 shadow-lg"
                >
                  View Live
                </a>
              )}
              <button
                onClick={() => setSelectedProject(null)}
                className="ml-4 px-6 py-2 border border-subtitle text-subtitle rounded-full hover:bg-white/10 shadow-md"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}