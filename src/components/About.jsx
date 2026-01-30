import { Award, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear rules, honest evaluation, and straightforward profit splits. No hidden fees."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Industry-leading technology, support, and payout systems."
    },
    {
      icon: Zap,
      title: "Innovation",
      description: "Constantly improving with faster payouts and better tools."
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
    <section id="about" style={{
      padding: '140px 0',
      background: '#ffffff',
      fontFamily: "'Inter', sans-serif"
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 48px'
      }}>
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ textAlign: 'center', marginBottom: '100px' }}
        >
          <p style={{
            fontSize: '0.813rem',
            fontWeight: 600,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#f36f21',
            marginBottom: '20px'
          }}>
            About Us
          </p>
          <h2 style={{
            fontSize: 'clamp(2.25rem, 4vw, 3.5rem)',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            color: '#0d3b54',
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            About USBC
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '700px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            USBC Funding secures the funding your business needs to thrive. From $10,000 to $50,000,000+, we leverage our vast network of 500+ lenders to find you the most competitive terms, fast.
          </p>
        </motion.div>

        {/* Values Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '40px',
            marginBottom: '120px'
          }}
        >
          {values.map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              style={{
                textAlign: 'center',
                padding: '48px 32px',
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                transition: 'all 0.4s ease'
              }}
              whileHover={{
                background: '#0d3b54',
                y: -8
              }}
            >
              <motion.div
                style={{
                  width: '72px',
                  height: '72px',
                  margin: '0 auto 24px',
                  background: 'linear-gradient(135deg, #0d3b54 0%, #1a5a7a 100%)',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
                whileHover={{ background: 'linear-gradient(135deg, #f36f21 0%, #ff8a47 100%)' }}
              >
                <value.icon size={32} color="#ffffff" strokeWidth={1.5} />
              </motion.div>
              <h3 style={{
                fontSize: '1.25rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                color: '#1f2937',
                marginBottom: '12px'
              }}>
                {value.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#6b7280',
                lineHeight: 1.7
              }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;