// src/components/Skills.js
// import React from 'react';
import { FiCode, FiLayers, FiCloud, FiTool, FiDatabase, FiWifi } from 'react-icons/fi';

const Skills = () => {
    const skillCategories = [
        {
            category: "Languages",
            description: "Core languages for scalable backend and web systems.",
            icon: <FiCode />,
            skills: ["Java", "JavaScript", "TypeScript", "HTML/CSS"]
        },
        {
            category: "Frameworks & Libraries",
            description: "Modern frameworks for APIs, UIs, and services.",
            icon: <FiLayers />,
            skills: ["Spring Boot", "React", "Angular", "Node.js", "Express"]
        },
        {
            category: "Cloud Platforms",
            description: "Production-ready deployment across major clouds.",
            icon: <FiCloud />,
            skills: ["AWS", "Azure", "GCP", "OCI"]
        },
        {
            category: "DevOps Tools",
            description: "Automation, observability, and container orchestration.",
            icon: <FiTool />,
            skills: ["Docker", "Kubernetes", "AKS", "OCP", "Grafana"]
        },
        {
            category: "Databases",
            description: "Relational and NoSQL data foundations.",
            icon: <FiDatabase />,
            skills: ["MongoDB", "SQL", "PL/SQL"]
        },
        {
            category: "Messaging Systems",
            description: "Event streaming and distributed messaging.",
            icon: <FiWifi />,
            skills: ["Apache Kafka"]
        }
    ];

    return (
        <section id="skills" className="skills section">
            <div className="container">
                <div className="section-header">
                    <p className="section-kicker">Skills</p>
                    <h2 className="section-title">A modern backend toolkit.</h2>
                    <p className="section-subtitle">
                        A focused stack for building reliable systems, scalable services, and cloud-ready platforms.
                    </p>
                </div>
                <div className="skills-grid">
                    {skillCategories.map((category, index) => (
                        <div className="skill-card" key={index}>
                            <div className="skill-card-top">
                                <div className="skill-card-badge">
                                    <span className="skill-card-icon">{category.icon}</span>
                                    <span className="skill-card-count">{category.skills.length}</span>
                                </div>
                                <div className="skill-card-info">
                                    <span className="skill-label">Focus Area</span>
                                    <h3 className="skill-title">{category.category}</h3>
                                    <p className="skill-desc">{category.description}</p>
                                </div>
                            </div>
                            <div className="skill-chip-grid">
                                {category.skills.map((skill, idx) => (
                                    <span className="skill-pill" key={idx}>{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Skills;
