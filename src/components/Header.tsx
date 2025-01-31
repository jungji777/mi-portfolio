import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed w-full bg-background/90 backdrop-blur-sm z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-display text-title">Jungji.dev</Link>
          
          <div className="hidden md:flex space-x-8">
            <Link to="/" className="text-text hover:text-title transition-colors">Home</Link>
            <Link to="/projects" className="text-text hover:text-title transition-colors">Projects</Link>
            <Link to="/about" className="text-text hover:text-title transition-colors">About</Link>
            <Link to="/contact" className="text-text hover:text-title transition-colors">Contact</Link>
          </div>

          <button 
            className="md:hidden text-text"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {isOpen && (
          <div className="md:hidden">
            <div className="flex flex-col space-y-4 pt-4 pb-3">
              <Link to="/" className="text-text hover:text-title transition-colors">Home</Link>
              <Link to="/projects" className="text-text hover:text-title transition-colors">Projects</Link>
              <Link to="/about" className="text-text hover:text-title transition-colors">About</Link>
              <Link to="/contact" className="text-text hover:text-title transition-colors">Contact</Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}