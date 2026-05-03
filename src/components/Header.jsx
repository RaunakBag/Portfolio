// src/components/Header.js
import { useEffect, useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';
import { motion } from 'framer-motion';

const Header = ({ activeSection, setActiveSection }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'experience', label: 'Experience' },
    { id: 'certifications', label: 'Certifications' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <motion.header
      className={`header ${scrolled ? 'header--scrolled' : ''}`}
      initial={{ y: -88, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className="container header-inner">
        <motion.div
          className="logo"
          whileHover={{ scale: 1.02 }}
          transition={{ type: 'spring', stiffness: 400, damping: 24 }}
        >
          <span className="logo-mark">RB</span>
          <div className="logo-text">
            <span className="logo-name">Raunak Bag</span>
            <span className="logo-role">Software Developer</span>
          </div>
        </motion.div>

        <nav className={`nav ${menuOpen ? 'active' : ''}`}>
          <ul>
            {navItems.map((item) => (
              <li key={item.id}>
                <Link
                  to={item.id}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onSetActive={() => setActiveSection(item.id)}
                  onClick={() => {
                    setActiveSection(item.id);
                    closeMenu();
                  }}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="nav-actions">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-80}
              duration={500}
              onClick={() => {
                setActiveSection('contact');
                closeMenu();
              }}
              className="btn btn-primary btn-sm"
            >
              Let’s Talk
            </Link>
          </div>
        </nav>

        <button className="menu-toggle" onClick={toggleMenu} aria-label="Toggle navigation">
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
