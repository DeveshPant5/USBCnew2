import { BookOpen, Video, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const resources = [
    {
      icon: Video,
      title: "Video Tutorials",
      description: "50+ hours of education covering technical analysis and risk management",
      count: "75 videos",
      badge: "Free"
    },
    {
      icon: FileText,
      title: "Trading Guides",
      description: "Comprehensive PDF guides on evaluation strategies and scaling techniques",
      count: "12 guides",
      badge: "Free"
    },
    {
      icon: BookOpen,
      title: "Live Webinars",
      description: "Weekly live sessions with professionals sharing strategies",
      count: "Every Tuesday",
      badge: "Live"
    },
    {
      icon: Download,
      title: "Business Templates",
      description: "Pre-built plans, risk calculators, and journal templates",
      count: "8 templates",
      badge: "Free"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section id="education" style={{
      padding: '140px 0',
      background: '#f9fafb',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 48px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <p style={{
            fontSize: '0.813rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#f36f21',
            marginBottom: '20px'
          }}>
            Resources
          </p>
          <h2 style={{
            fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            color: '#0d3b54',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Education & Resources
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '500px',
            margin: '0 auto'
          }}>
            Free learning materials to help you succeed
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '32px'
          }}
        >
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                background: '#FFFFFF',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '40px 32px',
                position: 'relative',
                textAlign: 'center',
                transition: 'all 0.4s ease'
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px -15px rgba(13, 59, 84, 0.15)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                padding: '4px 12px',
                borderRadius: '4px',
                background: resource.badge === 'Live' ? '#f36f21' : 'transparent',
                border: resource.badge === 'Live' ? 'none' : '1px solid #0d3b54',
                color: resource.badge === 'Live' ? '#ffffff' : '#0d3b54',
                fontSize: '0.688rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase'
              }}>
                {resource.badge}
              </div>

              <div style={{
                width: '72px',
                height: '72px',
                margin: '0 auto 28px',
                background: 'linear-gradient(135deg, #0d3b54 0%, #1a5a7a 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <resource.icon size={32} color="#ffffff" strokeWidth={1.5} />
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '12px'
              }}>
                {resource.title}
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                lineHeight: 1.7,
                marginBottom: '24px'
              }}>
                {resource.description}
              </p>

              <div style={{
                padding: '12px 20px',
                background: '#f9fafb',
                borderRadius: '4px',
                fontSize: '0.875rem',
                fontWeight: 600,
                color: '#0d3b54'
              }}>
                {resource.count}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
