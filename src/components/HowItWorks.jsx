import { UserPlus, Target, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';
import './HowItWorks.css';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Fill In Details",
      description: "Connect with us and select your ideal funding amount from $10,000 to $50,000,000",
      time: "2 minutes"
    },
    {
      icon: Target,
      title: "Offer Evaluation",
      description: "We guarantee a 4-hour turnaround on offers after file submission",
      time: "Your pace"
    },
    {
      icon: Trophy,
      title: "Get Funded",
      description: "Pass evaluation and receive your funded account within 24 hours",
      time: "24 hours"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="how-it-works" className="how-it-works-section">
      <div className="how-it-works-container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="how-it-works-header"
        >
          <p className="how-it-works-label">The Process</p>
          <h2 className="how-it-works-title">
            Easy Steps to <em>Scale</em>
          </h2>
          <p className="how-it-works-subtitle">
            Three easy steps to get your funds within 24 hours
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="steps-grid"
        >
          {steps.map((step, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="step-card"
            >
              {/* Icon Container with Badge */}
              <div className="step-icon-wrapper">
                <motion.div
                  className="step-icon-box"
                  whileHover={{
                    background: 'linear-gradient(135deg, #f36f21 0%, #ff8a47 100%)',
                    scale: 1.05
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <step.icon size={40} color="#FFFFFF" strokeWidth={1.5} />
                </motion.div>

                {/* Number Badge */}
                <div className="step-number">{index + 1}</div>
              </div>

              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <div className="step-time">{step.time}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;