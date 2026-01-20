import { Building2, TrendingUp, DollarSign, RefreshCw } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

// 1. Define Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2 // Delay between each card appearing
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
  { icon: <Building2 size={32} />, title: "SBA Loans", desc: "Secure low-interest, government-backed loans for expansion or real estate.", detail: "Funding up to $15M+ | Terms up to 25 years" },
  { icon: <DollarSign size={32} />, title: "Asset-Based Lending", desc: "Unlock capital based on receivables, inventory, or equipment.", detail: "Funding up to $25M+ | Terms up to 10 years" },
  { icon: <TrendingUp size={32} />, title: "Working Capital", desc: "Bridge cash flow gaps and seize new opportunities quickly.", detail: "Funding up to $5M | Terms up to 5 years" },
  { icon: <RefreshCw size={32} />, title: "Debt Refinancing", desc: "Consolidate high-interest debt into one manageable payment.", detail: "Consolidate up to $2M+ | Save Thousands" }
];

const Services = () => {
  return (
    <section id="services" className="services-section">
      <div className="container">
        {/* Simple Fade Up for Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="section-header"
        >
          <h2>How We Help You Win</h2>
          <p>Secure a custom loan with fewer roadblocks.</p>
        </motion.div>
        
        {/* Staggered Grid for Cards */}
        <motion.div 
          className="services-grid"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {servicesData.map((s, i) => (
            <motion.div key={i} className="service-card" variants={cardVariants}>
              <div className="icon-wrapper">{s.icon}</div>
              <h3>{s.title}</h3>
              <p className="service-desc">{s.desc}</p>
              <div className="service-divider"></div>
              <p className="service-detail">{s.detail}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;