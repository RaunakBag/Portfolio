import React from 'react';
import HeroSection from './sections/HeroSection';
import MarqueeSection from './sections/MarqueeSection';
import AboutSection from './sections/AboutSection';
import ServicesSection from './sections/ServicesSection';
import ProjectsSection from './sections/ProjectsSection';
import ContactSection from './sections/ContactSection';
import Footer from './components/shared/Footer';

const App: React.FC = () => {
    return (
        <div className="main-wrapper">
            <HeroSection />
            <MarqueeSection />
            <AboutSection />
            <ServicesSection />
            <ProjectsSection />
            <ContactSection />
            <Footer />
        </div>
    );
};

export default App;
