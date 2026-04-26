// src/components/Hero.js
// import React from 'react';
import { Link } from 'react-scroll';
import { FiArrowUpRight, FiDownload, FiMapPin } from 'react-icons/fi';

const Hero = ({ setActiveSection }) => {
    return (
        <section id="home" className="hero section">
            <div className="container hero-grid">
                <div className="hero-text">
                    <p className="eyebrow">Software Developer</p>
                    <h1 className="hero-title">Building resilient, cloud-native systems that scale with confidence.</h1>
                    <p className="hero-lead">
                        Results-driven engineer with 4+ years of experience designing high-throughput microservices, event-driven
                        architectures, and production-grade APIs for global teams.
                    </p>
                    <div className="hero-actions">
                        <Link
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="btn btn-primary"
                            onClick={() => setActiveSection('contact')}
                        >
                            Let’s Collaborate <FiArrowUpRight />
                        </Link>
                        <a
                            href="https://drive.google.com/file/d/12cD7c53Esu6oPK-qEtKwi2D1ULAbjSEH/view?usp=sharing"
                            className="btn btn-ghost"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Download CV <FiDownload />
                        </a>
                    </div>
                    <div className="hero-metrics">
                        <div className="metric">
                            <div className="metric-value">4+</div>
                            <div className="metric-label">Years Experience</div>
                        </div>
                        <div className="metric">
                            <div className="metric-value">15+</div>
                            <div className="metric-label">Projects Delivered</div>
                        </div>
                        <div className="metric">
                            <div className="metric-value">5+</div>
                            <div className="metric-label">Certifications</div>
                        </div>
                    </div>
                </div>
                <div className="hero-panel">
                    <div className="profile-card">
                        <div className="profile-image">
                            <img src="/profile.jpg" alt="Raunak Bag" />
                        </div>
                        <div className="profile-details">
                            <h3>Raunak Bag</h3>
                            <p>Software Developer</p>
                            <div className="profile-tags">
                                <span className="tag">Microservices</span>
                                <span className="tag">Cloud</span>
                                <span className="tag">Event-Driven</span>
                            </div>
                            <div className="profile-meta">
                                <FiMapPin />
                                <span>Kolkata, India</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
