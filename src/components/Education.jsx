// src/components/Education.js
// import React from 'react';

const Education = () => {
    return (
        <section id="education" className="education section">
            <div className="container">
                <div className="section-header">
                    <p className="section-kicker">Education</p>
                    <h2 className="section-title">Strong fundamentals, continuous growth.</h2>
                    <p className="section-subtitle">
                        A foundation in engineering with a focus on modern product development.
                    </p>
                </div>
                <div className="education-track">
                    <div className="education-card">
                        <div className="education-card-top">
                            <span className="education-badge">2021</span>
                            <span className="education-type">Bootcamp</span>
                        </div>
                        <h3 className="education-title">Product Engineering</h3>
                        <p className="education-school">School of Accelerated Learning (SOAL)</p>
                        <div className="education-footer">
                            <span className="education-period">Feb 2021 - Aug 2021</span>
                            <span className="education-chip">Accelerated Program</span>
                        </div>
                    </div>
                    <div className="education-card">
                        <div className="education-card-top">
                            <span className="education-badge">2020</span>
                            <span className="education-type">Degree</span>
                        </div>
                        <h3 className="education-title">Bachelor of Technology (B. Tech.)</h3>
                        <p className="education-school">Dr. Sudhir Chandra Sur Degree Engineering College</p>
                        <div className="education-footer">
                            <span className="education-period">Aug 2016 - July 2020</span>
                            <span className="education-chip">Engineering</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Education;
