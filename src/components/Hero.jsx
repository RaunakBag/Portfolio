// src/components/Hero.js
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { FiArrowUpRight, FiDownload, FiMapPin } from 'react-icons/fi';
import { TiltCard } from './TiltCard';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.09, delayChildren: 0.14 },
  },
};

const item = {
  hidden: { opacity: 0, y: 36 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: [0.22, 1, 0.36, 1] },
  },
};

const Hero = ({ setActiveSection }) => {
  return (
    <motion.section
      id="home"
      className="hero section hero--3d"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.75 }}
    >
      <div className="container hero-grid">
        <motion.div className="hero-text" variants={container} initial="hidden" animate="show">
          <motion.p className="eyebrow" variants={item}>
            Software Developer
          </motion.p>
          <motion.h1 className="hero-title" variants={item}>
            Building resilient, cloud-native systems that scale with confidence.
          </motion.h1>
          <motion.p className="hero-lead" variants={item}>
            Results-driven engineer with 4+ years of experience designing high-throughput microservices, event-driven
            architectures, and production-grade APIs for global teams.
          </motion.p>
          <motion.div className="hero-actions" variants={item}>
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
          </motion.div>
          <motion.div className="hero-metrics" variants={item}>
            {[
              { value: '4+', label: 'Years Experience' },
              { value: '15+', label: 'Projects Delivered' },
              { value: '5+', label: 'Certifications' },
            ].map((m) => (
              <motion.div
                className="metric"
                key={m.label}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="metric-value">{m.value}</div>
                <div className="metric-label">{m.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
        <motion.div
          className="hero-panel"
          initial={{ opacity: 0, scale: 0.95, x: 24 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 0.75, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
        >
          <TiltCard className="hero-tilt" intensity={9}>
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
          </TiltCard>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
