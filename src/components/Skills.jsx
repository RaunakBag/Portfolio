// src/components/Skills.js
import { motion } from 'framer-motion';
import { FiCode, FiLayers, FiCloud, FiTool, FiDatabase, FiWifi } from 'react-icons/fi';
import { FaJava, FaJs, FaHtml5, FaCss3Alt, FaReact, FaAngular, FaNodeJs, FaAws, FaMicrosoft, FaGoogle, FaDocker, FaDatabase } from 'react-icons/fa';
import { SiKubernetes } from 'react-icons/si';
import { SiTypescript, SiSpringboot, SiExpress, SiMongodb, SiApachekafka, SiGrafana } from 'react-icons/si';
import { MotionSection } from './MotionSection';

const Skills = () => {
  const skillCategories = [
    {
      category: 'Languages',
      description: 'Core languages for scalable backend and web systems.',
      icon: <FiCode />,
      skills: ['Java', 'JavaScript', 'TypeScript', 'HTML/CSS'],
    },
    {
      category: 'Frameworks & Libraries',
      description: 'Modern frameworks for APIs, UIs, and services.',
      icon: <FiLayers />,
      skills: ['Spring Boot', 'React', 'Angular', 'Node.js', 'Express'],
    },
    {
      category: 'Cloud Platforms',
      description: 'Production-ready deployment across major clouds.',
      icon: <FiCloud />,
      skills: ['AWS', 'Azure', 'GCP', 'OCI'],
    },
    {
      category: 'DevOps Tools',
      description: 'Automation, observability, and container orchestration.',
      icon: <FiTool />,
      skills: ['Docker', 'Kubernetes', 'AKS', 'OCP', 'Grafana'],
    },
    {
      category: 'Databases',
      description: 'Relational and NoSQL data foundations.',
      icon: <FiDatabase />,
      skills: ['MongoDB', 'SQL', 'PL/SQL'],
    },
    {
      category: 'Messaging Systems',
      description: 'Event streaming and distributed messaging.',
      icon: <FiWifi />,
      skills: ['Apache Kafka'],
    },
  ];

  const skillIcons = {
    Java: <FaJava style={{ color: '#f89820' }} />,
    JavaScript: <FaJs style={{ color: '#f7df1e' }} />,
    TypeScript: <SiTypescript style={{ color: '#3178c6' }} />,
    'HTML/CSS': (
      <span style={{ display: 'inline-flex', gap: 2 }}>
        <FaHtml5 style={{ color: '#e34c26' }} />
        <FaCss3Alt style={{ color: '#1572b6' }} />
      </span>
    ),
    'Spring Boot': <SiSpringboot style={{ color: '#6db33f' }} />,
    React: <FaReact style={{ color: '#61dafb' }} />,
    Angular: <FaAngular style={{ color: '#dd0031' }} />,
    'Node.js': <FaNodeJs style={{ color: '#3c873a' }} />,
    Express: <SiExpress style={{ color: '#000' }} />,
    AWS: <FaAws style={{ color: '#ff9900' }} />,
    Azure: <FaMicrosoft style={{ color: '#0078d4' }} />,
    GCP: <FaGoogle style={{ color: '#4285f4' }} />,
    Docker: <FaDocker style={{ color: '#2496ed' }} />,
    Kubernetes: <SiKubernetes style={{ color: '#326ce5' }} />,
    AKS: <FaMicrosoft style={{ color: '#0078d4' }} />,
    OCP: <FaDocker style={{ color: '#e00' }} />,
    Grafana: <SiGrafana style={{ color: '#f46800' }} />,
    MongoDB: <SiMongodb style={{ color: '#47a248' }} />,
    SQL: <FaDatabase style={{ color: '#00758f' }} />,
    'PL/SQL': <FaDatabase style={{ color: '#00758f' }} />,
    'Apache Kafka': <SiApachekafka style={{ color: '#231f20' }} />,
  };

  return (
    <MotionSection id="skills" className="skills section">
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
            <motion.div
              className="skill-card"
              key={category.category}
              initial={{ opacity: 0, y: 40, rotateX: 6 }}
              whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ delay: index * 0.06, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
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
            </motion.div>
          ))}
        </div>
      </div>
    </MotionSection>
  );
};

export default Skills;
