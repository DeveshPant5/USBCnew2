import { Check, X } from 'lucide-react';
import { motion } from 'framer-motion';
import './Comparison.css';

const Comparison = () => {
  const data = [
    { label: 'Speed of Funding', us: 'Days, sometimes hours', them: 'Weeks to months' },
    { label: 'Flexibility', us: 'Cash flow-based, no collateral', them: 'Rigid terms, strict collateral' },
    { label: 'Approval Rates', us: 'High (Pre-screening logic)', them: 'High rejection rates' },
    { label: 'Relationship', us: 'Ongoing advisory', them: 'Transactional' },
  ];

  return (
    <section id="comparison" className="comparison-section">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Everything banks don't offer.
        </motion.h2>
        
        <div className="table-wrapper">
          <table className="comparison-table">
            <thead>
              <tr>
                <th style={{ width: '30%' }}>FEATURES</th>
                <th className="col-us" style={{ width: '35%' }}>USBC CAPITAL</th>
                <th className="col-them" style={{ width: '35%' }}>TRADITIONAL BANKS</th>
              </tr>
            </thead>
            {/* Animate the TBODY to stagger rows */}
            <motion.tbody
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                visible: { transition: { staggerChildren: 0.15 } }
              }}
            >
              {data.map((row, i) => (
                <motion.tr 
                  key={i}
                  variants={{
                    hidden: { opacity: 0, x: -20 },
                    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } }
                  }}
                >
                  <td className="row-label">{row.label}</td>
                  <td className="col-us">
                    <div className="cell-content">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.3, type: "spring" }}
                      >
                        <Check size={18} className="icon-check" />
                      </motion.div>
                      {row.us}
                    </div>
                  </td>
                  <td className="col-them">
                    <div className="cell-content">
                      <X size={18} className="icon-x" /> 
                      {row.them}
                    </div>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;