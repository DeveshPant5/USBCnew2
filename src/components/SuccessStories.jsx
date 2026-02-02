import { useState, useEffect, useCallback } from 'react';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import './SuccessStories.css';

const SuccessStories = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const stories = [
    {
      name: "Michael Chen",
      role: "Restaurant Owner",
      profit: "$250,000",
      account: "$500K",
      avatar: "MC",
      rating: 5,
      story: "USBC Funding helped us expand to three new locations. The process was seamless and funding arrived in just 48 hours."
    },
    {
      name: "Sarah Johnson",
      role: "E-Commerce Entrepreneur",
      profit: "$180,000",
      account: "$350K",
      avatar: "SJ",
      rating: 5,
      story: "Best financing decision we ever made. Clear terms, fast approval, and excellent support. We've scaled our inventory and seen 200% growth."
    },
    {
      name: "David Rodriguez",
      role: "Auto Repair Shop Owner",
      profit: "$95,000",
      account: "$200K",
      avatar: "DR",
      rating: 5,
      story: "As a small business owner, getting traditional bank loans was impossible. USBC Funding believed in my vision."
    },
    {
      name: "Emily Watson",
      role: "Healthcare Clinic Director",
      profit: "$420,000",
      account: "$750K",
      avatar: "EW",
      rating: 5,
      story: "We needed equipment financing fast. USBC delivered with competitive rates and no hidden fees. Now we serve 3x more patients."
    },
    {
      name: "James Mitchell",
      role: "Construction Company CEO",
      profit: "$680,000",
      account: "$1.2M",
      avatar: "JM",
      rating: 5,
      story: "Landing a major contract required immediate capital. USBC Funding came through when banks couldn't move fast enough."
    },
    {
      name: "Lisa Park",
      role: "Boutique Hotel Owner",
      profit: "$310,000",
      account: "$600K",
      avatar: "LP",
      rating: 5,
      story: "Post-pandemic recovery seemed impossible until we found USBC. They helped us renovate and relaunch successfully."
    },
    {
      name: "Robert Thompson",
      role: "Manufacturing Plant Manager",
      profit: "$550,000",
      account: "$900K",
      avatar: "RT",
      rating: 5,
      story: "Our aging equipment was killing productivity. USBC helped us upgrade to state-of-the-art machinery. ROI in 8 months."
    },
    {
      name: "Maria Gonzalez",
      role: "Trucking Fleet Owner",
      profit: "$275,000",
      account: "$450K",
      avatar: "MG",
      rating: 5,
      story: "Expanding our fleet from 5 to 15 trucks seemed like a dream. USBC made it reality with flexible terms."
    }
  ];

  const stats = [
    { value: "10,000+", label: "Funded Businesses" },
    { value: "$85M+", label: "Paid Out" },
    { value: "78%", label: "Success Rate" },
    { value: "4.9/5", label: "Trust Score" }
  ];

  const totalSlides = stories.length;

  const nextSlide = useCallback(() => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  }, [totalSlides]);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  }, [totalSlides]);

  const goToSlide = (index) => {
    setDirection(index > currentIndex ? 1 : -1);
    setCurrentIndex(index);
  };


  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slideVariants = {
    enter: (direction) => ({
      x: direction > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 300 : -300,
      opacity: 0,
      scale: 0.9
    })
  };

  const currentStory = stories[currentIndex];

  return (
    <section id="stories" className="stories-section">
      <div className="stories-container">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="stories-header"
        >
          <p className="stories-label">Testimonials</p>
          <h2 className="stories-title">Success Stories</h2>
          <p className="stories-subtitle">Real businesses, real results, real growth</p>


          <div className="stories-stats">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="stat-item"
              >
                <div className="stat-value">{stat.value}</div>
                <div className="stat-label">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>


        <div
          className="slider-wrapper"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >

          <motion.button
            onClick={prevSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="slider-arrow slider-arrow-left"
            aria-label="Previous slide"
          >
            <ChevronLeft size={24} color="#ffffff" />
          </motion.button>

          <motion.button
            onClick={nextSlide}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="slider-arrow slider-arrow-right"
            aria-label="Next slide"
          >
            <ChevronRight size={24} color="#ffffff" />
          </motion.button>


          <div className="slider-viewport">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                  scale: { duration: 0.3 }
                }}
                className="story-card"
              >
                <Quote size={40} className="quote-icon" />

                <div className="story-header">
                  <div className="story-avatar">
                    {currentStory.avatar}
                  </div>
                  <div className="story-info">
                    <h4 className="story-name">{currentStory.name}</h4>
                    <p className="story-role">{currentStory.role}</p>
                  </div>
                </div>

                <div className="story-rating">
                  {[...Array(currentStory.rating)].map((_, i) => (
                    <Star key={i} size={18} fill="#f36f21" stroke="#f36f21" />
                  ))}
                </div>

                <p className="story-text">"{currentStory.story}"</p>

                <div className="story-stats">
                  <div className="story-stat">
                    <div className="story-stat-label">Funded</div>
                    <div className="story-stat-value">{currentStory.account}</div>
                  </div>
                  <div className="story-stat">
                    <div className="story-stat-label">Growth</div>
                    <div className="story-stat-value story-stat-highlight">{currentStory.profit}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>


          <div className="slider-dots">
            {stories.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                whileHover={{ scale: 1.2 }}
                className={`slider-dot ${currentIndex === index ? 'active' : ''}`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>


          <div className="slide-counter">
            <span className="current-slide">{String(currentIndex + 1).padStart(2, '0')}</span>
            <span className="slide-separator">/</span>
            <span className="total-slides">{String(totalSlides).padStart(2, '0')}</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
