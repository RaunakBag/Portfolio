// src/components/Certifications.js
// import React from 'react';
import { FiAward, FiArrowUpRight } from 'react-icons/fi';

const Certifications = () => {
    const certifications = [
        {
            name: "Oracle Cloud Infrastructure 2023 Certified Architect Associate",
            issuer: "Oracle",
            date: "2023",
            credential:"https://drive.google.com/file/d/1f3nJXNxyVPLEG1ecEswWPBCEeYgKSx2E/view"
        },
        {
            name: "Microsoft Certified: Azure Fundamentals",
            issuer: "Microsoft",
            date: "2022",
            credential:"https://learn.microsoft.com/en-us/users/bagraunakcognizant-8512/credentials/85b5ba654520492?ref=https%3A%2F%2Fwww.linkedin.com%2F"
        },
        // {
        //     name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
        //     issuer: "Oracle",
        //     date: "2025",
        //     credential:"https://drive.google.com/file/d/1f3nJXNxyVPLEG1ecEswWPBCEeYgKSx2E/view"
        // },
        {
            name: "Claude Code Hackathon",
            issuer: "Anthropic",
            date: "2024",
            credential:"https://www.credly.com/badges/06e690f7-dddc-48d1-a592-1d5ff0fc2713/linked_in_profile"
        }
    ];

    return (
        <section id="certifications" className="certifications section">
            <div className="container">
                <div className="section-header">
                    <p className="section-kicker">Credentials</p>
                    <h2 className="section-title">Certifications that back the craft.</h2>
                    <p className="section-subtitle">
                        Industry-recognized achievements in cloud, architecture, and developer excellence.
                    </p>
                </div>
                <div className="cert-grid">
                    {certifications.map((cert, index) => (
                        <div className="cert-card" key={index}>
                            <div className="cert-card-top">
                                <span className="cert-badge">
                                    <FiAward />
                                </span>
                                <span className="cert-year">{cert.date}</span>
                            </div>
                            <h3 className="cert-title">{cert.name}</h3>
                            <p className="cert-issuer">{cert.issuer}</p>
                            <div className="cert-footer">
                                <span className="cert-chip">Credential</span>
                                {cert.credential ? (
                                    <a
                                        href={cert.credential}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-ghost btn-sm"
                                    >
                                        View Credential <FiArrowUpRight />
                                    </a>
                                ) : (
                                    <span className="cert-chip">Not available</span>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
