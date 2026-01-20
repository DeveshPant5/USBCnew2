import { BookOpen, Video, FileText, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const Education = () => {
  const resources = [
    {
      icon: Video,
      title: "Video Tutorials",
      description: "50+ hours of trading education covering technical analysis and risk management",
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
      description: "Weekly live sessions with professional traders sharing strategies",
      count: "Every Tuesday",
      badge: "Live"
    },
    {
      icon: Download,
      title: "Trading Templates",
      description: "Pre-built trading plans, risk calculators, and journal templates",
      count: "8 templates",
      badge: "Free"
    }
  ];

  return (
    <section id="education" style={{
      padding: '120px 0',
      background: 'linear-gradient(180deg, #FAFBFC 0%, #FFFFFF 100%)',
      fontFamily: "'DM Sans', 'Roboto', sans-serif"
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '64px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#0F172A',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            Education & Resources
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Free learning materials to help you succeed as a funded trader
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '32px'
        }}>
          {resources.map((resource, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                background: '#FFFFFF',
                border: '2px solid #E2E8F0',
                borderRadius: '16px',
                padding: '32px',
                position: 'relative',
                textAlign: 'center',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)'
              }}
            >
              <div style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                padding: '4px 12px',
                background: resource.badge === 'Live' ? '#DCFCE7' : '#EFF6FF',
                color: resource.badge === 'Live' ? '#059669' : '#2563EB',
                borderRadius: '100px',
                fontSize: '0.75rem',
                fontWeight: '700',
                letterSpacing: '0.05em'
              }}>
                {resource.badge}
              </div>

              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 24px',
                background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <resource.icon size={36} color="#2563EB" strokeWidth={2} />
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#0F172A',
                marginBottom: '12px'
              }}>
                {resource.title}
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: '#64748B',
                lineHeight: '1.6',
                marginBottom: '20px'
              }}>
                {resource.description}
              </p>

              <div style={{
                padding: '12px',
                background: '#F8FAFC',
                borderRadius: '8px',
                fontSize: '0.875rem',
                fontWeight: '600',
                color: '#475569'
              }}>
                {resource.count}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
