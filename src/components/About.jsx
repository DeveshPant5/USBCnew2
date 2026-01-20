import { Users, Award, Shield, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  const values = [
    {
      icon: Shield,
      title: "Transparency",
      description: "Clear rules, honest evaluation, and straightforward profit splits. No hidden fees."
    },
    {
      icon: Users,
      title: "Trader-First",
      description: "We succeed when you succeed. Built around empowering skilled traders."
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

  const timeline = [
    { year: "2020", event: "USBC Founded", desc: "Mission to democratize prop trading" },
    { year: "2021", event: "$5M Paid Out", desc: "First 1,000 traders funded" },
    { year: "2023", event: "$50M Milestone", desc: "5,000+ active funded traders" },
    { year: "2025", event: "$85M+ Paid", desc: "10,000+ traders globally" }
  ];

  return (
    <section id="about" style={{
      padding: '120px 0',
      background: '#FFFFFF',
      fontFamily: "'DM Sans', 'Roboto', sans-serif"
    }}>
      <div className="container" style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px'
      }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#0F172A',
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            About USBC
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748B',
            maxWidth: '800px',
            margin: '0 auto',
            lineHeight: '1.8'
          }}>
            We're on a mission to empower talented traders worldwide by providing access to 
            institutional-level capital. Since 2020, we've funded over 10,000 traders and paid 
            out more than $85 million in profits.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '32px',
          marginBottom: '80px'
        }}>
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              style={{
                textAlign: 'center',
                padding: '32px 24px'
              }}
            >
              <div style={{
                width: '72px',
                height: '72px',
                margin: '0 auto 20px',
                background: 'linear-gradient(135deg, #2563EB 0%, #059669 100%)',
                borderRadius: '18px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.15)'
              }}>
                <value.icon size={32} color="#FFFFFF" strokeWidth={2} />
              </div>
              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#0F172A',
                marginBottom: '12px'
              }}>
                {value.title}
              </h3>
              <p style={{
                fontSize: '0.95rem',
                color: '#64748B',
                lineHeight: '1.6'
              }}>
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{
            background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)',
            borderRadius: '24px',
            padding: '64px 48px',
            border: '2px solid #E2E8F0'
          }}
        >
          <h3 style={{
            fontSize: '2rem',
            fontWeight: '700',
            color: '#0F172A',
            textAlign: 'center',
            marginBottom: '48px'
          }}>
            Our Journey
          </h3>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px'
          }}>
            {timeline.map((item, index) => (
              <div key={index} style={{ textAlign: 'center', position: 'relative' }}>
                <div style={{
                  fontSize: '3rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #2563EB 0%, #059669 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '12px'
                }}>
                  {item.year}
                </div>
                <div style={{
                  fontSize: '1.125rem',
                  fontWeight: '700',
                  color: '#0F172A',
                  marginBottom: '8px'
                }}>
                  {item.event}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#64748B'
                }}>
                  {item.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
