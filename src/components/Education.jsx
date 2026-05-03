// src/components/Education.js
import { motion } from 'framer-motion';
import { MotionSection } from './MotionSection';

const Education = () => {
  const items = [
    {
      badge: '2021',
      type: 'Bootcamp',
      title: 'Product Engineering',
      school: 'School of Accelerated Learning (SOAL)',
      period: 'Feb 2021 - Aug 2021',
      chip: 'Accelerated Program',
    },
    {
      badge: '2020',
      type: 'Degree',
      title: 'Bachelor of Technology (B. Tech.)',
      school: 'Dr. Sudhir Chandra Sur Degree Engineering College',
      period: 'Aug 2016 - July 2020',
      chip: 'Engineering',
    },
  ];

  return (
    <MotionSection id="education" className="education section">
      <div className="container">
        <div className="section-header">
          <p className="section-kicker">Education</p>
          <h2 className="section-title">Strong fundamentals, continuous growth.</h2>
          <p className="section-subtitle">
            A foundation in engineering with a focus on modern product development.
          </p>
        </div>
        <div className="education-track">
          {items.map((edu, index) => (
            <motion.div
              className="education-card"
              key={edu.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="education-card-top">
                <span className="education-badge">{edu.badge}</span>
                <span className="education-type">{edu.type}</span>
              </div>
              <h3 className="education-title">{edu.title}</h3>
              <p className="education-school">{edu.school}</p>
              <div className="education-footer">
                <span className="education-period">{edu.period}</span>
                <span className="education-chip">{edu.chip}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Education;
