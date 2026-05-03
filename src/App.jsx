// src/App.js
import { useState } from 'react';
import './App.css';
import { Scene3D } from './components/Scene3D';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Certifications from './components/Certification';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="App">
      <Scene3D />
      <Header activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="site-main">
        <Hero setActiveSection={setActiveSection} />
        <About />
        <Skills />
        <Experience />
        <Certifications />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
