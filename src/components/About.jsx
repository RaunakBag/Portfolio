// src/components/About.js
import { motion } from 'framer-motion';
import { FiCpu, FiCloud, FiShield } from 'react-icons/fi';
import { MotionSection } from './MotionSection';

const cardMotion = {
  rest: { opacity: 0, y: 24 },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 * i, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const About = () => {
  return (
    <MotionSection id="about" className="about section">
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
              {[
                { value: '4+', label: 'Years Experience' },
                { value: '15+', label: 'Projects Completed' },
                { value: '5+', label: 'Certifications' },
              ].map((h, i) => (
                <motion.div
                  className="highlight-card"
                  key={h.label}
                  custom={i}
                  initial="rest"
                  whileInView="show"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={cardMotion}
                >
                  <div className="highlight-value">{h.value}</div>
                  <div className="highlight-label">{h.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="about-cards">
            {[
              { icon: <FiCpu />, title: 'Performance First', text: 'Designing low-latency services and optimizing critical paths in distributed systems.' },
              { icon: <FiCloud />, title: 'Cloud Native', text: 'Shipping reliable microservices on AWS, Azure, and OCI with production-ready practices.' },
              { icon: <FiShield />, title: 'Secure by Design', text: 'Building observability, compliance, and resilience into every stage of delivery.' },
            ].map((f, i) => (
              <motion.div
                className="feature-card"
                key={f.title}
                custom={i + 3}
                initial="rest"
                whileInView="show"
                viewport={{ once: true, amount: 0.4 }}
                variants={cardMotion}
                whileHover={{ y: -4, transition: { duration: 0.25 } }}
              >
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default About;
