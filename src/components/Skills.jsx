// src/components/Skills.js
// import React from 'react';
import { FiCode, FiLayers, FiCloud, FiTool, FiDatabase, FiWifi } from 'react-icons/fi';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaNodeJs, FaAws, FaMicrosoft, FaGoogle, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import { SiTypescript, SiSpringboot, SiExpress, SiMongodb, SiApachekafka, SiGrafana } from 'react-icons/si';

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

    // Map skill names to icons
    const skillIcons = {
        Java: <FaJava style={{ color: '#f89820' }} />, // orange
        JavaScript: <FaJs style={{ color: '#f7df1e' }} />, // yellow
        TypeScript: <SiTypescript style={{ color: '#3178c6' }} />, // blue
        'HTML/CSS': <span style={{ display: 'inline-flex', gap: 2 }}><FaHtml5 style={{ color: '#e34c26' }} /><FaCss3Alt style={{ color: '#1572b6' }} /></span>,
        'Spring Boot': <SiSpringboot style={{ color: '#6db33f' }} />, // green
        React: <FaReact style={{ color: '#61dafb' }} />, // cyan
        Angular: <FaAngular style={{ color: '#dd0031' }} />, // red
        'Node.js': <FaNodeJs style={{ color: '#3c873a' }} />, // green
        Express: <SiExpress style={{ color: '#000' }} />, // black
        AWS: <FaAws style={{ color: '#ff9900' }} />, // orange
        Azure: <FaMicrosoft style={{ color: '#0078d4' }} />, // blue
        GCP: <FaGoogle style={{ color: '#4285f4' }} />, // blue
        // OCI: <FaOracle style={{ color: '#f80000' }} />, // red
        Docker: <FaDocker style={{ color: '#2496ed' }} />, // blue
        Kubernetes: <SiKubernetes style={{ color: '#326ce5' }} />, // blue
        AKS: <FaMicrosoft style={{ color: '#0078d4' }} />, // blue
        // OCP: OpenShift icon not available in react-icons/si; fallback to FaDocker with red color
        OCP: <FaDocker style={{ color: '#e00' }} />, // fallback red Docker icon
        Grafana: <SiGrafana style={{ color: '#f46800' }} />, // orange
        MongoDB: <SiMongodb style={{ color: '#47a248' }} />, // green
        SQL: <FaDatabase style={{ color: '#00758f' }} />, // blue
        'PL/SQL': <FaDatabase style={{ color: '#00758f' }} />, // blue
        'Apache Kafka': <SiApachekafka style={{ color: '#231f20' }} />,
    };

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
                                    <span className="skill-pill" key={idx}>
                                        <span style={{ marginRight: 6, verticalAlign: 'middle' }}>{skillIcons[skill]}</span>
                                        {skill}
                                    </span>
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
