import { Building2, TrendingUp, DollarSign, RefreshCw, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Services.css';


const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const servicesData = [
  {
    icon: <Landmark size={32} />,
    title: "SBA Loans (7a / 504)",
    desc: "Acquiring owner-occupied commercial real estate, business acquisition, large-scale expansion, heavy equipment purchases.",
    whyUs: "We navigate the complex SBA underwriting process for you. Our deep relationships with SBA Preferred Lenders mean your application gets priority attention, drastically reducing the typical approval timeline.",
    fundingAmount: "Up to $15,000,000+",
    termLength: "Up to 25 years"
  },
  {
    icon: <DollarSign size={32} />,
    title: "Large Asset-Based Lending (ABL)",
    desc: "Companies with significant accounts receivable, inventory, or equipment needing large-scale working capital or growth financing.",
    whyUs: "We connect you with institutional lenders who understand how to value your assets and structure eight-figure credit facilities that traditional banks can't handle.",
    fundingAmount: "Up to $25,000,000+",
    termLength: "Up to 10 years"
  },
  {
    icon: <Building2 size={32} />,
    title: "Commercial Real Estate Financing",
    desc: "Acquisition, development, or refinance of investment properties, industrial warehouses, office buildings, and multi-family units.",
    whyUs: "Access to life insurance companies, CMBS lenders, and debt funds that compete for your business, ensuring you get the most aggressive rates on large deals.",
    fundingAmount: "Up to $50,000,000+",
    termLength: "Up to 30 years"
  },
  {
    icon: <TrendingUp size={32} />,
    title: "Working Capital & Cash Flow Loans",
    desc: "Covering payroll, purchasing inventory, launching marketing campaigns, or managing seasonal fluctuations.",
    whyUs: "Speed is critical. We have a dedicated panel of fintech and alternative lenders who can provide term sheets within hours and funding in as little as 24-48 hours for qualified applicants.",
    fundingAmount: "Up to $5,000,000",
    termLength: "Up to 5 years"
  },
  {
    icon: <RefreshCw size={32} />,
    title: "Debt Refinancing & Restructuring",
    desc: "Businesses burdened by high-interest MCAs, multiple confusing loans, or debt that is stifling growth.",
    whyUs: "We act as your advocate, negotiating with your current lenders and securing new, lower-cost capital to free up your cash flow and simplify your finances.",
    fundingAmount: "Varies (Consolidate up to $2M+)",
    termLength: "Structured to save you money"
  }
];

const Services = () => {
  return (
    <section id="services" className="services-section" style={{ background: '#ffffff', padding: '120px 0' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 48px' }}>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <h2 style={{
            fontSize: 'clamp(2.25rem, 4vw, 3rem)',
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            color: '#0d3b54',
            marginBottom: '24px',
            letterSpacing: '-0.02em'
          }}>
            Your Business Financing Solutions
          </h2>
          <p style={{
            fontSize: '1.125rem',
            color: '#6b7280',
            maxWidth: '900px',
            margin: '0 auto',
            lineHeight: 1.8
          }}>
            No two businesses are alike, and neither are their financial needs. At USBC Funding, we provide access to the entire spectrum of business lending products available in the U.S. market. From nimble solutions for immediate needs to multi-million dollar capital for transformative growth, we have the expertise and the partners to make it happen.
          </p>
        </motion.div>


        <motion.div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: '32px',
            marginBottom: '64px'
          }}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((s, i) => (
            <motion.div
              key={i}
              variants={cardVariants}
              style={{
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: '8px',
                padding: '32px',
                transition: 'all 0.4s ease'
              }}
              whileHover={{
                y: -8,
                boxShadow: '0 20px 60px -15px rgba(13, 59, 84, 0.15)'
              }}
            >

              <div style={{
                width: '56px',
                height: '56px',
                background: 'linear-gradient(135deg, #0d3b54 0%, #1a5a7a 100%)',
                borderRadius: '8px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
                color: '#ffffff'
              }}>
                {s.icon}
              </div>


              <h3 style={{
                fontSize: '1.125rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                color: '#f36f21',
                marginBottom: '12px'
              }}>
                {s.title}
              </h3>


              <p style={{
                fontSize: '0.95rem',
                color: '#374151',
                lineHeight: 1.7,
                marginBottom: '20px'
              }}>
                {s.desc}
              </p>


              <p style={{
                fontSize: '0.875rem',
                color: '#6b7280',
                lineHeight: 1.7,
                marginBottom: '24px',
                fontStyle: 'italic'
              }}>
                <span style={{ color: '#0d3b54', fontWeight: 600, fontStyle: 'normal' }}>Why USBC? </span>
                {s.whyUs}
              </p>


              <div style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '16px',
                paddingTop: '20px',
                borderTop: '1px solid #e5e7eb'
              }}>
                <div>
                  <div style={{
                    fontSize: '0.688rem',
                    color: '#6b7280',
                    marginBottom: '4px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 500
                  }}>
                    Funding Amount
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 700,
                    color: '#0d3b54'
                  }}>
                    {s.fundingAmount}
                  </div>
                </div>
                <div>
                  <div style={{
                    fontSize: '0.688rem',
                    color: '#6b7280',
                    marginBottom: '4px',
                    letterSpacing: '0.1em',
                    textTransform: 'uppercase',
                    fontWeight: 500
                  }}>
                    Term Length
                  </div>
                  <div style={{
                    fontSize: '1rem',
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 600,
                    color: '#374151'
                  }}>
                    {s.termLength}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>


        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '16px',
            flexWrap: 'wrap'
          }}
        >
          <Link to="/apply" style={{ textDecoration: 'none' }}>
            <motion.button
              whileHover={{
                backgroundColor: '#d45a10',
                transform: 'translateY(-2px)',
                boxShadow: '0 8px 25px rgba(243, 111, 33, 0.4)'
              }}
              whileTap={{ scale: 0.98 }}
              style={{
                background: '#f36f21',
                color: '#ffffff',
                border: 'none',
                padding: '14px 40px',
                borderRadius: '4px',
                fontSize: '0.9rem',
                fontFamily: "'Inter', sans-serif",
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                boxShadow: '0 4px 15px rgba(243, 111, 33, 0.3)'
              }}
            >
              Apply Now
            </motion.button>
          </Link>

          <motion.a
            href="#stories"
            whileHover={{
              backgroundColor: 'rgba(13, 59, 84, 0.05)',
              borderColor: '#0d3b54'
            }}
            style={{
              background: 'transparent',
              color: '#0d3b54',
              border: '2px solid #0d3b54',
              padding: '12px 32px',
              borderRadius: '4px',
              fontSize: '0.9rem',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 600,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
              display: 'inline-block'
            }}
          >
            Read More Stories
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;