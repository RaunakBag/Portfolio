// src/components/About.js
// import React from 'react';
import { FiCpu, FiCloud, FiShield } from 'react-icons/fi';

const About = () => {
    return (
        <section id="about" className="about section">
            <div className="container">
                <div className="section-header">
                    <p className="section-kicker">About</p>
                    <h2 className="section-title">Crafting reliable platforms with a product mindset.</h2>
                    <p className="section-subtitle">
                        I design backend systems that remain reliable at scale, with clear APIs, strong observability, and cloud-native
                        foundations that support rapid, safe delivery.
                    </p>
                </div>
                <div className="about-grid">
                    <div className="about-text">
                        <p>
                            I am a backend-focused Software Engineer with 4+ years of experience delivering Spring Boot services and
                            cloud-first architectures. I have led platform migrations, improved event-driven systems, and partnered
                            with product, QA, and DevOps teams to ship resilient, production-ready solutions.
                        </p>
                        <p>
                            My work centers on scalable microservices, performance tuning, and pragmatic system design that balances
                            reliability, maintainability, and business outcomes.
                        </p>
                        <div className="about-highlights">
                            <div className="highlight-card">
                                <div className="highlight-value">4+</div>
                                <div className="highlight-label">Years Experience</div>
                            </div>
                            <div className="highlight-card">
                                <div className="highlight-value">15+</div>
                                <div className="highlight-label">Projects Completed</div>
                            </div>
                            <div className="highlight-card">
                                <div className="highlight-value">5+</div>
                                <div className="highlight-label">Certifications</div>
                            </div>
                        </div>
                    </div>
                    <div className="about-cards">
                        <div className="feature-card">
                            <div className="feature-icon">
                                <FiCpu />
                            </div>
                            <div>
                                <h3>Performance First</h3>
                                <p>Designing low-latency services and optimizing critical paths in distributed systems.</p>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <FiCloud />
                            </div>
                            <div>
                                <h3>Cloud Native</h3>
                                <p>Shipping reliable microservices on AWS, Azure, and OCI with production-ready practices.</p>
                            </div>
                        </div>
                        <div className="feature-card">
                            <div className="feature-icon">
                                <FiShield />
                            </div>
                            <div>
                                <h3>Secure by Design</h3>
                                <p>Building observability, compliance, and resilience into every stage of delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
