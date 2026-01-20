import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const SuccessStories = () => {
  const stories = [
    {
      name: "Michael Chen",
      role: "Forex Trader",
      profit: "$47,000",
      account: "$100K",
      avatar: "MC",
      rating: 5,
      story: "Started with a $25K account and scaled to $100K within 6 months. The payout system is incredibly reliable. I've withdrawn over $47,000 in profits."
    },
    {
      name: "Sarah Johnson",
      role: "Day Trader",
      profit: "$89,000",
      account: "$200K",
      avatar: "SJ",
      rating: 5,
      story: "Best prop firm I've worked with. Clear rules, fast payouts, and excellent support. Passed my evaluation in 3 weeks and haven't looked back."
    },
    {
      name: "David Rodriguez",
      role: "Swing Trader",
      profit: "$23,500",
      account: "$50K",
      avatar: "DR",
      rating: 5,
      story: "As a part-time trader, the unlimited time for evaluation was crucial. I'm now consistently profitable and withdrawing weekly."
    }
  ];

  const stats = [
    { value: "10,000+", label: "Funded Traders" },
    { value: "$85M+", label: "Paid Out" },
    { value: "78%", label: "Success Rate" },
    { value: "4.9/5", label: "Trust Score" }
  ];

  return (
    <section id="stories" style={{
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
            Success Stories
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#64748B',
            maxWidth: '600px',
            margin: '0 auto 48px'
          }}>
            Real traders, real results, real payouts
          </p>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '32px',
            maxWidth: '900px',
            margin: '0 auto'
          }}>
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div style={{
                  fontSize: '2.5rem',
                  fontWeight: '700',
                  background: 'linear-gradient(135deg, #2563EB 0%, #059669 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  marginBottom: '8px'
                }}>
                  {stat.value}
                </div>
                <div style={{
                  fontSize: '0.875rem',
                  color: '#64748B',
                  fontWeight: '600'
                }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '32px'
        }}>
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              style={{
                background: '#FFFFFF',
                border: '2px solid #E2E8F0',
                borderRadius: '16px',
                padding: '32px',
                position: 'relative',
                boxShadow: '0 4px 16px rgba(15, 23, 42, 0.04)',
                transition: 'all 0.3s ease'
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 12px 32px rgba(15, 23, 42, 0.12)'
              }}
            >
              <Quote
                size={32}
                color="#E2E8F0"
                style={{
                  position: 'absolute',
                  top: '24px',
                  right: '24px'
                }}
              />

              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '16px',
                marginBottom: '20px'
              }}>
                <div style={{
                  width: '56px',
                  height: '56px',
                  background: 'linear-gradient(135deg, #2563EB 0%, #059669 100%)',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '1.25rem',
                  fontWeight: '700',
                  color: '#FFFFFF'
                }}>
                  {story.avatar}
                </div>
                <div>
                  <h4 style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: '#0F172A',
                    marginBottom: '4px'
                  }}>
                    {story.name}
                  </h4>
                  <p style={{
                    fontSize: '0.875rem',
                    color: '#64748B'
                  }}>
                    {story.role}
                  </p>
                </div>
              </div>

              <div style={{
                display: 'flex',
                gap: '4px',
                marginBottom: '16px'
              }}>
                {[...Array(story.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="#FFA500" stroke="#FFA500" />
                ))}
              </div>

              <p style={{
                fontSize: '0.95rem',
                color: '#475569',
                lineHeight: '1.7',
                marginBottom: '24px'
              }}>
                "{story.story}"
              </p>

              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                padding: '16px',
                background: '#F8FAFC',
                borderRadius: '8px'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#64748B',
                    marginBottom: '4px'
                  }}>
                    Account
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: '#0F172A'
                  }}>
                    {story.account}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#64748B',
                    marginBottom: '4px'
                  }}>
                    Profit
                  </div>
                  <div style={{
                    fontSize: '1.125rem',
                    fontWeight: '700',
                    color: '#059669'
                  }}>
                    {story.profit}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;
