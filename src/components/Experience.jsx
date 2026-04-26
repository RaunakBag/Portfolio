// src/components/Experience.js
// import React from 'react';

const Experience = () => {
    const experiences = [
        {
            company: "Cognizant | Hays Recruitment",
            position: "Software Engineer",
            period: "March 2026 - Present",
            location: "Kolkata, India",
            responsibilities: [
                "Refactored Spring Boot microservices to enable support for multiple geographical regions, improving scalability and localization.",
                "Implemented region-specific configurations (e.g., timezone, currency, and API endpoints) to enhance user experience across markets.",
                "Diagnosed and fixed production bugs, improving system reliability and reducing incident frequency.",
                "Collaborated with QA and product teams to validate fixes and ensure smooth releases."
            ]
        },
        {
            company: "Cognizant | Voya Financial",
            position: "Software Engineer",
            period: "March 2025 - December 2025",
            location: "Kolkata, India",
            responsibilities: [
                "Designed and executed migration of containerized and legacy applications from on-premise environments to Azure using ARO and OCP.",
                "Automated deployment pipelines using CI/CD tools, reducing release time and minimizing manual intervention.",
                "Implemented containerization strategies with Docker and Kubernetes, enhancing application scalability and fault tolerance.",
                "Collaborated with cross-functional teams to ensure seamless data migration, security compliance, and minimal downtime."
            ]
        },
        {
            company: "Cognizant | Schneider National",
            position: "Associate",
            period: "March 2023 - March 2025",
            location: "Kolkata, India",
            responsibilities: [
                "Led the migration of microservices from Spring Boot 2.x to Spring Boot 3, ensuring seamless compatibility with Jakarta EE standards.",
                "Refactored and upgraded deprecated APIs, enhancing system performance, stability, and long-term maintainability.",
                "Optimized Kafka-based event-driven architecture, reducing message processing latency and increasing overall system throughput.",
                "Implemented location mapping and mileage calculations using Trimble Maps in a new project, enabling accurate geospatial analysis."
            ]
        },
        {
            company: "Cognizant",
            position: "Programmer Analyst Trainee",
            period: "February 2022 - February 2023",
            location: "Kolkata, India",
            responsibilities: [
                "Trained in these technologies: HTML, CSS, JavaScript, Angular, Node.js, MongoDB, Java, Spring Boot, SQL, PL/SQL, Oracle Forms, and Oracle Apex.",
                "Using the knowledge from this training, built a MEAN Stack E-Commerce Application."
            ]
        },
        {
            company: "Globsyn AI Workspace",
            position: "Research Analyst",
            period: "March 2020 - September 2020",
            location: "Kolkata, India",
            responsibilities: [
                "Spearheaded AI and Machine Learning initiatives by actively participating in projects hosted on Amazon SageMaker, contributing to innovative solutions and enhancing data-driven capabilities.",
                "Played a key role in data annotation tasks for a Voice Assistant project, ensuring high-quality data for training and optimizing the project's natural language understanding and response generation."
            ]
        }
    ];

    return (
        <section id="experience" className="experience section">
            <div className="container">
                <div className="section-header">
                    <p className="section-kicker">Experience</p>
                    <h2 className="section-title">Leading delivery across platforms and teams.</h2>
                    <p className="section-subtitle">
                        Shipping scalable services, optimizing cloud migrations, and delivering production-ready systems.
                    </p>
                </div>
                <div className="timeline">
                    {experiences.map((exp, index) => (
                        <div className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} key={index}>
                            <div className="timeline-card">
                                <div className="timeline-header">
                                    <div>
                                        <h3 className="timeline-role">{exp.position}</h3>
                                        <p className="timeline-company">{exp.company}</p>
                                    </div>
                                    <div className="timeline-meta">
                                        <span className="timeline-pill">{exp.period}</span>
                                        <span className="timeline-location">{exp.location}</span>
                                    </div>
                                </div>
                                <ul className="timeline-details">
                                    {exp.responsibilities.map((resp, idx) => (
                                        <li key={idx}>{resp}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;
