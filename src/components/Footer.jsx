// src/components/Footer.js
// import React from 'react';
import { FiLinkedin, FiGithub, FiMail } from 'react-icons/fi';


const Footer = () => {
  return (
    <footer className="footer footer-unique">
      <div className="footer-glow"></div>
      <div className="container">
        <div className="footer-main">
          <div className="footer-brand-unique">
            <h2>Raunak Bag</h2>
            <span className="footer-role">Software Developer</span>
            <p className="footer-quote">"Building digital experiences with passion and precision."</p>
          </div>
          <div className="footer-social-unique">
            <a href="https://www.linkedin.com/in/raunakbag/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
            <a href="https://github.com/raunakbag" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="mailto:raunakbag97@gmail.com" aria-label="Email">
              <FiMail />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <span className="footer-divider"></span>
          <p className="footer-copyright">&copy; {new Date().getFullYear()} Raunak Bag. Crafted with <span className="footer-heart">♥</span> in 2026.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
