import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import AcademicExtras from './components/AcademicExtras';
import Contact from './components/Contact';
import './index.css';

function App() {
  return (
    <div className="app-container">
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <AcademicExtras />
        <Contact />
      </main>
    </div>
  );
}

export default App;
