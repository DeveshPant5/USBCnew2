// import { ArrowRight, Check } from 'lucide-react';
// import { motion } from 'framer-motion';

// const Pricing = () => {
//   const plans = [
//     {
//       name: "$25K Account",
//       price: "149",
//       phase1: "$2,000",
//       phase2: "$1,250",
//       split: "80%",
//       features: ["Two-phase evaluation", "Unlimited time", "Trade all instruments", "EAs allowed", "First payout 14 days"]
//     },
//     {
//       name: "$50K Account",
//       price: "249",
//       phase1: "$4,000",
//       phase2: "$2,500",
//       split: "80%",
//       features: ["Two-phase evaluation", "Unlimited time", "Trade all instruments", "EAs allowed", "First payout 14 days", "Priority support"]
//     },
//     {
//       name: "$100K Account",
//       price: "449",
//       phase1: "$8,000",
//       phase2: "$5,000",
//       split: "85%",
//       popular: true,
//       features: ["Two-phase evaluation", "Unlimited time", "Trade all instruments", "EAs allowed", "First payout 14 days", "Priority support", "Scaling included"]
//     },
//     {
//       name: "$200K Account",
//       price: "849",
//       phase1: "$16,000",
//       phase2: "$10,000",
//       split: "90%",
//       features: ["Two-phase evaluation", "Unlimited time", "Trade all instruments", "EAs allowed", "First payout 7 days", "Priority support", "Scaling included", "Account manager"]
//     }
//   ];

//   return (
//     <section id="pricing" style={{
//       padding: '120px 0',
//       background: '#FFFFFF',
//       fontFamily: "'DM Sans', 'Roboto', sans-serif"
//     }}>
//       <div className="container" style={{
//         maxWidth: '1200px',
//         margin: '0 auto',
//         padding: '0 24px'
//       }}>
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           style={{ textAlign: 'center', marginBottom: '64px' }}
//         >
//           <h2 style={{
//             fontSize: 'clamp(2rem, 4vw, 3rem)',
//             fontWeight: '700',
//             color: '#0F172A',
//             marginBottom: '16px',
//             letterSpacing: '-0.02em'
//           }}>
//             Choose Your Path to Funding
//           </h2>
//           <p style={{
//             fontSize: '1.125rem',
//             color: '#64748B',
//             maxWidth: '600px',
//             margin: '0 auto'
//           }}>
//             One-time evaluation fee. No monthly subscriptions.
//           </p>
//         </motion.div>

//         <div style={{
//           display: 'grid',
//           gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
//           gap: '24px',
//           maxWidth: '1400px',
//           margin: '0 auto'
//         }}>
//           {plans.map((plan, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 30 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: index * 0.1 }}
//               style={{
//                 background: plan.popular ? 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)' : '#FFFFFF',
//                 border: plan.popular ? 'none' : '2px solid #E2E8F0',
//                 borderRadius: '16px',
//                 padding: '32px',
//                 position: 'relative',
//                 boxShadow: plan.popular ? '0 20px 40px rgba(15, 23, 42, 0.15)' : '0 4px 16px rgba(15, 23, 42, 0.04)',
//                 transition: 'all 0.3s ease'
//               }}
//               whileHover={{
//                 y: -8,
//                 boxShadow: plan.popular ? '0 24px 48px rgba(15, 23, 42, 0.25)' : '0 12px 24px rgba(15, 23, 42, 0.12)'
//               }}
//             >
//               {plan.popular && (
//                 <div style={{
//                   position: 'absolute',
//                   top: '-12px',
//                   left: '50%',
//                   transform: 'translateX(-50%)',
//                   background: 'linear-gradient(135deg, #2563EB 0%, #059669 100%)',
//                   color: 'white',
//                   padding: '6px 20px',
//                   borderRadius: '100px',
//                   fontSize: '0.75rem',
//                   fontWeight: '700',
//                   letterSpacing: '0.05em'
//                 }}>
//                   MOST POPULAR
//                 </div>
//               )}

//               <h3 style={{
//                 fontSize: '1.5rem',
//                 fontWeight: '700',
//                 color: plan.popular ? '#FFFFFF' : '#0F172A',
//                 marginBottom: '8px'
//               }}>
//                 {plan.name}
//               </h3>

//               <div style={{ marginBottom: '24px' }}>
//                 <span style={{
//                   fontSize: '3rem',
//                   fontWeight: '700',
//                   color: plan.popular ? '#FFFFFF' : '#0F172A'
//                 }}>
//                   ${plan.price}
//                 </span>
//                 <span style={{
//                   fontSize: '0.875rem',
//                   color: plan.popular ? 'rgba(255,255,255,0.7)' : '#64748B',
//                   marginLeft: '8px'
//                 }}>
//                   one-time
//                 </span>
//               </div>

//               <div style={{
//                 display: 'grid',
//                 gridTemplateColumns: '1fr 1fr',
//                 gap: '12px',
//                 marginBottom: '24px',
//                 padding: '16px',
//                 background: plan.popular ? 'rgba(255,255,255,0.05)' : '#F8FAFC',
//                 borderRadius: '8px'
//               }}>
//                 <div>
//                   <div style={{
//                     fontSize: '0.75rem',
//                     color: plan.popular ? 'rgba(255,255,255,0.7)' : '#64748B',
//                     marginBottom: '4px'
//                   }}>
//                     Profit Split
//                   </div>
//                   <div style={{
//                     fontSize: '1.25rem',
//                     fontWeight: '700',
//                     color: plan.popular ? '#FFFFFF' : '#059669'
//                   }}>
//                     {plan.split}
//                   </div>
//                 </div>
//                 <div>
//                   <div style={{
//                     fontSize: '0.75rem',
//                     color: plan.popular ? 'rgba(255,255,255,0.7)' : '#64748B',
//                     marginBottom: '4px'
//                   }}>
//                     Phase 1
//                   </div>
//                   <div style={{
//                     fontSize: '1.25rem',
//                     fontWeight: '700',
//                     color: plan.popular ? '#FFFFFF' : '#0F172A'
//                   }}>
//                     {plan.phase1}
//                   </div>
//                 </div>
//               </div>

//               <ul style={{
//                 listStyle: 'none',
//                 padding: 0,
//                 margin: '0 0 32px 0'
//               }}>
//                 {plan.features.map((feature, idx) => (
//                   <li key={idx} style={{
//                     display: 'flex',
//                     alignItems: 'center',
//                     gap: '12px',
//                     marginBottom: '12px',
//                     color: plan.popular ? 'rgba(255,255,255,0.9)' : '#475569',
//                     fontSize: '0.875rem'
//                   }}>
//                     <Check size={16} strokeWidth={3} color={plan.popular ? '#FFFFFF' : '#059669'} />
//                     {feature}
//                   </li>
//                 ))}
//               </ul>

//               <motion.button
//                 whileHover={{ scale: 1.02 }}
//                 whileTap={{ scale: 0.98 }}
//                 style={{
//                   width: '100%',
//                   padding: '14px',
//                   background: plan.popular ? '#FFFFFF' : 'linear-gradient(135deg, #0F172A 0%, #1E293B 100%)',
//                   color: plan.popular ? '#0F172A' : '#FFFFFF',
//                   border: 'none',
//                   borderRadius: '10px',
//                   fontSize: '0.95rem',
//                   fontWeight: '600',
//                   display: 'flex',
//                   alignItems: 'center',
//                   justifyContent: 'center',
//                   gap: '8px',
//                   cursor: 'pointer',
//                   transition: 'all 0.2s ease'
//                 }}
//               >
//                 Get Started <ArrowRight size={16} strokeWidth={3} />
//               </motion.button>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Pricing;
