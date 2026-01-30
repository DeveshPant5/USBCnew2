import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Hero.css';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94]
      }
    }
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0
    }
  };

  const headlineText = "Your Financial Future";

  const stats = [
    { value: '$85M+', label: 'Funded' },
    { value: '10,000+', label: 'Businesses' },
    { value: '24hr', label: 'Disbursement' }
  ];

  return (
    <section className="hero-section">
      {/* Video Background */}
      <div className="hero-video-container">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="hero-video"
        >
          <source
            src="https://videos.pexels.com/video-files/3129671/3129671-uhd_2560_1440_30fps.mp4"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Dark Teal Gradient Overlay */}
      <div className="hero-overlay" />

      {/* Curved Wave Divider at Bottom */}
      <div className="hero-wave">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="hero-wave-svg"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.1,118.92,147.05,68.63,321.39,56.44Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* Large Watermark Letters */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.06, x: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
        className="hero-watermark"
      >
        U<br />S
      </motion.div>

      {/* Main Content */}
      <motion.div
        className="hero-content"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Subtitle */}
        <motion.p variants={itemVariants} className="hero-subtitle">
          USBC Funding
        </motion.p>

        {/* Main Headline with Word Animation */}
        <motion.h1 className="hero-headline">
          <motion.span className="hero-headline-words">
            {headlineText.split(' ').map((word, index) => (
              <motion.span
                key={index}
                variants={letterVariants}
                initial="hidden"
                animate="visible"
                transition={{
                  delay: 0.5 + index * 0.12,
                  duration: 0.5,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }}
                className="hero-word"
              >
                {word}
              </motion.span>
            ))}
          </motion.span>
        </motion.h1>

        {/* Description */}
        <motion.p variants={itemVariants} className="hero-description">
          Stop waiting on banks. Unlock <span className="hero-highlight">instant liquidity</span> with
          our network of 500+ lenders. From $10,000 to $50,000,000+.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="hero-buttons">
          <Link to="/apply" className="hero-btn-link">
            <motion.button
              whileHover={{
                backgroundColor: '#d45a10',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(243, 111, 33, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              className="hero-btn-primary"
            >
              Apply Now
              <ArrowRight size={18} strokeWidth={2} />
            </motion.button>
          </Link>

          <motion.a
            href="#how-it-works"
            whileHover={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderColor: '#ffffff'
            }}
            className="hero-btn-secondary"
          >
            Learn More
          </motion.a>
        </motion.div>

        {/* Bottom Stats */}
        <motion.div variants={itemVariants} className="hero-stats">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 + index * 0.1 }}
              className="hero-stat"
            >
              <div className="hero-stat-value">{stat.value}</div>
              <div className="hero-stat-label">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="hero-scroll-indicator"
      >
        <span className="hero-scroll-text">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="hero-scroll-line"
        />
      </motion.div>
    </section>
  );
};

export default Hero;