import React from 'react';
import { Mail, Linkedin, Github } from 'lucide-react';

export default function Contact() {
  return (
    <div className="min-h-screen pt-20 pb-12 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-4xl font-display font-bold text-title mb-8">Get in Touch</h2>
          
          <div className="flex flex-col items-center space-y-8">
            <a 
              href="https://github.com/jungji777" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center group"
            >
              <Github size={32} className="text-text group-hover:text-title transition-colors" />
              <span className="mt-2 text-text group-hover:text-title transition-colors">jungji777</span>
            </a>

            <a 
              href="https://www.linkedin.com/in/cesar-betancourth-784b54268" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex flex-col items-center group"
            >
              <Linkedin size={32} className="text-text group-hover:text-title transition-colors" />
              <span className="mt-2 text-text group-hover:text-title transition-colors">Cesar Betancourth</span>
            </a>

            <a 
              href="mailto:jungjibetancourth@gmail.com" 
              className="flex flex-col items-center group"
            >
              <Mail size={32} className="text-text group-hover:text-title transition-colors" />
              <span className="mt-2 text-text group-hover:text-title transition-colors">jungjibetancourth@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}