import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Contact from './pages/Contact';
import SplineBackground from './components/SplineBackground';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-background">
        <div className="relative">
          {/* Only show Spline background on home page */}
          <Routes>
            <Route path="/" element={<SplineBackground />} />
          </Routes>
          <Header />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;