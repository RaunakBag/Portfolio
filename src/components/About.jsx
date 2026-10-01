// src/components/About.js
import { FiCpu, FiCloud, FiShield } from 'react-icons/fi';
import { MotionSection } from './MotionSection';

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
              ].map((h) => (
                <div className="highlight-card" key={h.label}>
                  <div className="highlight-value">{h.value}</div>
                  <div className="highlight-label">{h.label}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="about-cards">
            {[
              { icon: <FiCpu />, title: 'Performance First', text: 'Designing low-latency services and optimizing critical paths in distributed systems.' },
              { icon: <FiCloud />, title: 'Cloud Native', text: 'Shipping reliable microservices on AWS, Azure, and OCI with production-ready practices.' },
              { icon: <FiShield />, title: 'Secure by Design', text: 'Building observability, compliance, and resilience into every stage of delivery.' },
            ].map((f) => (
              <div className="feature-card" key={f.title}>
                <div className="feature-icon">{f.icon}</div>
                <div>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MotionSection>
  );
};

export default About;
