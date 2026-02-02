import { useState, useEffect } from 'react';
import { ChevronDown, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Navbar.css';

import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const navItems = [
    { label: 'How It Works', href: '#how-it-works' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    {
      label: 'Solutions',
      href: '#solutions',
      hasDropdown: true,
      dropdownItems: [
        { title: 'SBA Loans', desc: 'Up to $15M+ funding', href: '#services' },
        { title: 'Asset-Based Lending', desc: 'Up to $25M+ funding', href: '#services' },
        { title: 'Working Capital', desc: 'Fast cash flow solutions', href: '#services' },
      ]
    },
    { label: 'Success Stories', href: '#stories' },
  ];

  return (
    <motion.nav
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <div className="container nav-container">

        <a href="#" className="logo">
          <img src={logoImg} alt="USBC Funding Logo" className="logo-icon" />
          <span>USBC Funding <span className="dot">.</span></span>
        </a>


        <div className="nav-center">
          {navItems.map((item, index) => (
            <div
              key={index}
              className="nav-item-wrapper"
              onMouseEnter={() => item.hasDropdown && setActiveDropdown(index)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a href={item.href} className="nav-link">
                {item.label}
                {item.hasDropdown && <ChevronDown size={14} strokeWidth={2.5} />}
              </a>

              {item.hasDropdown && (
                <AnimatePresence>
                  {activeDropdown === index && (
                    <motion.div
                      className="dropdown-menu"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      {item.dropdownItems.map((dropItem, idx) => (
                        <a key={idx} href={dropItem.href} className="dropdown-item">
                          <div className="dropdown-item-title">{dropItem.title}</div>
                          <div className="dropdown-item-desc">{dropItem.desc}</div>
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </div>


        <div className="nav-actions">
          <a href="#contact" className="nav-cta-btn">
            <span>Contact Us</span>
            <ArrowRight size={16} strokeWidth={2.5} />
          </a>
        </div>


        <button
          className="hamburger"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>


      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="mobile-menu-content">
              {navItems.map((item, index) => (
                <div key={index} className="mobile-nav-item">
                  {item.hasDropdown ? (
                    <>
                      <button
                        className="mobile-nav-link mobile-dropdown-toggle"
                        onClick={() => setActiveDropdown(activeDropdown === index ? null : index)}
                      >
                        {item.label}
                        <ChevronDown
                          size={16}
                          className={activeDropdown === index ? 'rotated' : ''}
                        />
                      </button>
                      <AnimatePresence>
                        {activeDropdown === index && (
                          <motion.div
                            className="mobile-dropdown"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                          >
                            {item.dropdownItems.map((dropItem, idx) => (
                              <a
                                key={idx}
                                href={dropItem.href}
                                className="mobile-dropdown-item"
                                onClick={() => setMobileMenuOpen(false)}
                              >
                                <div className="mobile-dropdown-title">{dropItem.title}</div>
                                <div className="mobile-dropdown-desc">{dropItem.desc}</div>
                              </a>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </>
                  ) : (
                    <a
                      href={item.href}
                      className="mobile-nav-link"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.label}
                    </a>
                  )}
                </div>
              ))}


              <div style={{ marginTop: '24px' }}>
                <a
                  href="#contact"
                  className="mobile-cta-btn"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Contact Us <ArrowRight size={18} strokeWidth={2.5} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;