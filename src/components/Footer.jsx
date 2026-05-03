// src/components/Footer.js
import { motion } from 'framer-motion';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';

const Footer = () => {
  return (
    <motion.footer
      className="footer footer-unique"
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-unique">
            <h2>Raunak Bag</h2>
            <span className="footer-role">Software Developer</span>
            <p className="footer-quote">&quot;Building digital experiences with passion and precision.&quot;</p>
          </div>
          <div className="footer-social-unique">
            <motion.a
              href="https://www.linkedin.com/in/raunakbag/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              whileHover={{ y: -4, rotate: -6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href="https://github.com/raunakbag"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              whileHover={{ y: -4, rotate: 6 }}
              transition={{ type: 'spring', stiffness: 400, damping: 18 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a href="mailto:raunakbag97@gmail.com" aria-label="Email" whileHover={{ y: -4 }} transition={{ type: 'spring', stiffness: 400, damping: 18 }}>
              <FiMail />
            </motion.a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-divider" />
          <p className="footer-copyright">
            &copy; {new Date().getFullYear()} Raunak Bag. Crafted with <span className="footer-heart">♥</span> in 2026.
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;
