import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen">
      <section className="h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-title mb-8 animate-fade-in">
            Creative Developer & Designer
          </h1>
          <p className="text-xl md:text-2xl text-text mb-12 max-w-2xl mx-auto">
            Crafting beautiful digital experiences through clean code and thoughtful design
          </p>
          <Link 
            to="/projects"
            className="inline-flex items-center px-8 py-3 bg-title text-background rounded-full hover:bg-title/80 transition-colors"
          >
            View My Work
            <ArrowRight className="ml-2" size={20} />
          </Link>
        </div>
      </section>
    </div>
  );
}