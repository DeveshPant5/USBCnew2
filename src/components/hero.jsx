import { ArrowRight, CheckCircle, Shield } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section style={{ 
      padding: '160px 0 100px', 
      position: 'relative',
      overflow: 'hidden',
      background: '#FAFBFC',
      fontFamily: "'DM Sans', 'Roboto', 'Helvetica Neue', Arial, sans-serif"
    }}>
      {/* Subtle gradient blobs */}
      <div style={{ 
        position: 'absolute', top: '-5%', left: '5%', 
        width: '500px', height: '500px', 
        background: 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 100%)', 
        filter: 'blur(120px)', 
        borderRadius: '50%', 
        opacity: 0.5, 
        pointerEvents: 'none' 
      }} />
      <div style={{ 
        position: 'absolute', bottom: '10%', right: '0%', 
        width: '450px', height: '450px', 
        background: 'linear-gradient(135deg, #F0FDF4 0%, #DCFCE7 100%)', 
        filter: 'blur(120px)', 
        borderRadius: '50%', 
        opacity: 0.4, 
        pointerEvents: 'none' 
      }} />

      <div className="container" style={{ 
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 24px',
        textAlign: 'center', 
        position: 'relative', 
        zIndex: 1 
      }}>
        
        {/* Trust badge */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            padding: '8px 20px',
            background: 'linear-gradient(135deg, #ffffff 0%, #f8fafc 100%)', 
            border: '1px solid #E2E8F0',
            borderRadius: '100px', 
            marginBottom: '40px', 
            boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)'
          }}>
          <Shield size={14} color="#059669" strokeWidth={2.5} />
          <span style={{ 
            color: '#475569', 
            fontSize: '0.813rem', 
            fontWeight: '600', 
            letterSpacing: '0.03em'
          }}>
            TRUSTED BY 1000+ BUSINESSES
          </span>
        </motion.div>
        
        {/* Main headline - FIXED COLORS */}
        <h1 style={{ 
          fontSize: 'clamp(2.75rem, 5.5vw, 4.5rem)', 
          lineHeight: '1.1', 
          marginBottom: '28px',
          color: '#0F172A',
          fontWeight: '700',
          letterSpacing: '-0.02em'
        }}>
          The Right Capital.<br />
          <span style={{ 
            color: '#0F172A', // Changed to match parent color
            fontWeight: '700'
          }}>
            For Your Ambition.
          </span>
        </h1>
        
        {/* Subheadline */}
        <p style={{ 
          fontSize: '1.125rem', 
          color: '#163663', 
          maxWidth: '640px', 
          margin: '0 auto 48px',
          lineHeight: '1.7',
          fontWeight: '400'
        }}>
          Stop waiting on banks. Unlock{' '}
          <span style={{ 
            color: '#1E293B', 
            fontWeight: '600' 
          }}>
            INSTANT LIQUIDITY
          </span>{' '}
          with our Experts .
        </p>
        
        {/* CTA buttons */}
        <div style={{ 
          display: 'flex', 
          gap: '16px', 
          justifyContent: 'center',
          marginBottom: '56px',
          flexWrap: 'wrap'
        }}>
          <a href="https://forms.gle/9U87f5K9tjChFUjXA" style={{ textDecoration: 'none' }}>
            <motion.button 
            whileHover={{ scale: 1.03, boxShadow: '0 12px 28px -8px rgba(15, 23, 42, 0.35)' }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              background: 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
              color: 'white', 
              border: 'none', 
              padding: '18px 40px', 
              borderRadius: '10px',
              fontSize: '1rem', 
              fontWeight: '600', 
              display: 'flex', 
              alignItems: 'center', 
              gap: '10px',
              boxShadow: '0 8px 20px -8px rgba(15, 23, 42, 0.3)',
              cursor: 'pointer',
              transition: 'all 0.2s ease'
            }} >    
            Apply Now <ArrowRight size={18} strokeWidth={2.5} />
          </motion.button></a>
          
          <motion.button 
            whileHover={{ 
              scale: 1.03, 
              background: '#F8FAFC',
              borderColor: '#94A3B8'
            }}
            whileTap={{ scale: 0.98 }}
            style={{ 
              background: 'white', 
              border: '1.5px solid #CBD5E1',
              color: '#0F172A', 
              padding: '18px 40px', 
              borderRadius: '10px', 
              fontSize: '1rem', 
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 8px rgba(15, 23, 42, 0.05)'
            }}>
            View Rates
          </motion.button>
        </div>

        {/* Trust indicators */}
        <div style={{ 
          display: 'flex', 
          gap: '40px', 
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap'
        }}>
          {[
            { icon: CheckCircle, text: '24hr Disbursal', color: '#2563EB' }
          ].map((item, idx) => (
            <div 
              key={idx}
              style={{ 
                display: 'flex', 
                alignItems: 'center', 
                gap: '8px'
              }}>
              <item.icon size={18} color={item.color} strokeWidth={2.5} />
              <span style={{ 
                color: '#475569', 
                fontSize: '0.875rem', 
                fontWeight: '500'
              }}>
                {item.text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;