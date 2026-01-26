import { UserPlus, Target, Trophy } from 'lucide-react';
import { motion } from 'framer-motion';

const HowItWorks = () => {
  const steps = [
    {
      icon: UserPlus,
      title: "Sign Up & Choose",
      description: "Create your account and select your ideal funding amount from $25K to $200K",
      time: "2 minutes"
    },
    {
      icon: Target,
      title: "Complete Evaluation",
      description: "Demonstrate your trading skills through our two-phase evaluation",
      time: "Your pace"
    },
    {
      icon: Trophy,
      title: "Get Funded",
      description: "Pass evaluation and receive your funded account within 24 hours",
      time: "24 hours"
    }
  ];

  return (
    <section id="how-it-works" style={{
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
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2rem, 4vw, 3rem)',
            fontWeight: '700',
            color: '#0F172A',
            marginBottom: '16px',
            letterSpacing: '-0.02em'
          }}>
            How It Works
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Three simple steps to becoming a funded trader
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', // Increased min-width slightly for better 3-column look
          gap: '40px',
          position: 'relative'
        }}>
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              style={{
                position: 'relative',
                textAlign: 'center'
              }}
            >
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 24px',
                background: 'linear-gradient(135deg, #2563EB 0%, #059669 100%)',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 8px 24px rgba(37, 99, 235, 0.2)'
              }}>
                <step.icon size={36} color="#FFFFFF" strokeWidth={2} />
              </div>

              {/* Number Badge */}
              <div style={{
                position: 'absolute',
                top: '0', 
                left: '50%',
                transform: 'translate(-50%, -50%) translateX(-40px) translateY(-10px)', // Adjusted to sit nicely on the icon corner
                width: '32px',
                height: '32px',
                background: '#0F172A',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '0.875rem',
                fontWeight: '700',
                color: '#FFFFFF',
                zIndex: 2
              }}>
                {index + 1}
              </div>

              <h3 style={{
                fontSize: '1.25rem',
                fontWeight: '700',
                color: '#0F172A',
                marginBottom: '12px'
              }}>
                {step.title}
              </h3>

              <p style={{
                fontSize: '0.95rem',
                color: '#64748B',
                lineHeight: '1.6',
                marginBottom: '16px'
              }}>
                {step.description}
              </p>

              <div style={{
                display: 'inline-block',
                padding: '6px 16px',
                background: '#EFF6FF',
                color: '#2563EB',
                borderRadius: '100px',
                fontSize: '0.813rem',
                fontWeight: '600'
              }}>
                {step.time}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;