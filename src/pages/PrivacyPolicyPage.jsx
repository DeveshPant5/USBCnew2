import { motion } from 'framer-motion';
import { ArrowLeft, Shield, Lock, Eye, Mail, Cookie, ExternalLink, Users, RefreshCw, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const PrivacyPolicyPage = () => {
    const sectionStyle = {
        marginBottom: '48px',
    };

    const headingStyle = {
        fontSize: '1.25rem',
        fontWeight: 600,
        color: '#0d3b54',
        marginBottom: '20px',
        paddingBottom: '12px',
        borderBottom: '2px solid rgba(13, 59, 84, 0.2)',
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        fontFamily: "'Inter', sans-serif",
    };

    const highlightBoxStyle = {
        background: 'linear-gradient(135deg, rgba(13, 59, 84, 0.08) 0%, rgba(26, 90, 122, 0.08) 100%)',
        borderLeft: '4px solid #f36f21',
        padding: '28px',
        marginBottom: '32px',
        borderRadius: '4px',
    };

    const listItemStyle = {
        marginBottom: '16px',
        lineHeight: '1.8',
        color: '#1f2937',
        fontFamily: "'Inter', sans-serif",
        fontSize: '1rem',
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: '#ffffff',
            fontFamily: "'Inter', sans-serif",
        }}>
            {/* Header */}
            <header style={{
                background: '#ffffff',
                backdropFilter: 'blur(20px)',
                borderBottom: '1px solid rgba(13, 59, 84, 0.1)',
                padding: '20px 0',
                position: 'sticky',
                top: 0,
                zIndex: 100,
            }}>
                <div style={{
                    maxWidth: '1200px',
                    margin: '0 auto',
                    padding: '0 48px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                }}>
                    <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <motion.div whileHover={{ opacity: 0.8 }} style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <ArrowLeft size={18} color="#64748b" />
                            <span style={{ color: '#64748b', fontWeight: '400', fontSize: '0.875rem' }}>Back to Home</span>
                        </motion.div>
                    </Link>
                    <div style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: '1.25rem',
                        color: '#0d3b54',
                        fontWeight: 600
                    }}>
                        USBC Funding <span style={{ color: '#f36f21' }}>.</span>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main style={{
                maxWidth: '900px',
                margin: '0 auto',
                padding: '80px 48px',
            }}>
                {/* Title */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{ textAlign: 'center', marginBottom: '60px' }}
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        style={{
                            display: 'inline-flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            width: '80px',
                            height: '80px',
                            background: 'linear-gradient(135deg, #0d3b54 0%, #1a5a7a 100%)',
                            borderRadius: '50%',
                            marginBottom: '24px',
                        }}
                    >
                        <Shield size={36} color="#ffffff" />
                    </motion.div>
                    <p style={{
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        letterSpacing: '0.2em',
                        textTransform: 'uppercase',
                        color: '#f36f21',
                        marginBottom: '16px',
                        fontFamily: "'Inter', sans-serif"
                    }}>
                        Legal
                    </p>
                    <h1 style={{
                        fontSize: 'clamp(2rem, 5vw, 3rem)',
                        color: '#0d3b54',
                        fontWeight: 600,
                        marginBottom: '16px',
                        fontFamily: "'Inter', sans-serif",
                        letterSpacing: '-0.02em'
                    }}>
                        Privacy Policy
                    </h1>
                    <p style={{
                        color: '#64748b',
                        fontSize: '0.95rem',
                        fontWeight: 500,
                        letterSpacing: '0.02em'
                    }}>
                        Last Updated: January 2026
                    </p>
                </motion.div>

                {/* Content Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    style={{
                        background: '#f9fafb',
                        border: '1px solid rgba(13, 59, 84, 0.1)',
                        borderRadius: '8px',
                        padding: '48px',
                    }}
                >
                    {/* Protecting Your Privacy */}
                    <div style={highlightBoxStyle}>
                        <h2 style={{
                            fontSize: '1.375rem',
                            color: '#0d3b54',
                            fontWeight: 600,
                            marginBottom: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontFamily: "'Inter', sans-serif",
                        }}>
                            <Lock size={22} color="#f36f21" />
                            Protecting Your Privacy
                        </h2>
                        <p style={{ color: '#1f2937', lineHeight: '1.8', margin: 0, fontSize: '1rem', fontWeight: 500 }}>
                            We value your privacy. This Privacy Policy outlines how we collect, utilize, share, and safeguard your information when you use our website ("Site") and services, including text messaging. By using our services, you agree to the terms of this policy.
                        </p>
                    </div>

                    {/* What We Collect */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <Eye size={20} color="#f36f21" />
                            What We Collect
                        </h2>
                        <ul style={{ paddingLeft: '24px', margin: 0 }}>
                            <li style={listItemStyle}>
                                <strong style={{ color: '#0d3b54', fontWeight: 700 }}>Personal Identifiable Information (PII):</strong> This includes your name, email address, phone number, and any other details you directly provide when filling out a form or message.
                            </li>
                            <li style={listItemStyle}>
                                <strong style={{ color: '#0d3b54', fontWeight: 700 }}>Non-Personally Identifiable Information (Non-PII):</strong> Technical data like your IP address, browser device details, website usage, including how you use our text messaging.
                            </li>
                        </ul>
                    </section>

                    {/* How We Use Your Data */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <Users size={20} color="#f36f21" />
                            How We Use Your Data
                        </h2>
                        <ul style={{ paddingLeft: '24px', margin: 0 }}>
                            <li style={listItemStyle}>
                                <strong style={{ color: '#0d3b54', fontWeight: 700 }}>Service Delivery:</strong> To provide and enhance our services including our text messaging
                            </li>
                            <li style={listItemStyle}>
                                <strong style={{ color: '#0d3b54', fontWeight: 700 }}>Communication:</strong> Responding to your questions (including those via text), and for marketing if you opt-in
                            </li>
                            <li style={listItemStyle}>
                                <strong style={{ color: '#0d3b54', fontWeight: 700 }}>Analytics:</strong> Understanding how you use our Site and text features to make improvements
                            </li>
                            <li style={listItemStyle}>
                                <strong style={{ color: '#0d3b54', fontWeight: 700 }}>Legal Compliance:</strong> As required by applicable laws requirements
                            </li>
                        </ul>
                    </section>

                    {/* We Do Not Sell Your Data */}
                    <div style={{
                        ...highlightBoxStyle,
                        background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1) 0%, rgba(5, 150, 105, 0.08) 100%)',
                        borderLeftColor: '#10b981',
                    }}>
                        <h2 style={{
                            fontSize: '1.375rem',
                            fontWeight: 600,
                            color: '#0d3b54',
                            marginBottom: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontFamily: "'Inter', sans-serif",
                        }}>
                            <Shield size={22} color="#10b981" />
                            We Do Not Sell Your Data
                        </h2>
                        <p style={{ color: '#1f2937', lineHeight: '1.8', margin: 0, fontSize: '1rem', fontWeight: 500 }}>
                            Your information, including that shared via text, is never sold.
                        </p>
                    </div>

                    {/* Security Measures */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <Lock size={20} color="#f36f21" />
                            Security Measures
                        </h2>
                        <p style={{ color: '#1f2937', lineHeight: '1.8', fontSize: '1rem', fontWeight: 500 }}>
                            We take reasonable steps to protect your data against unauthorized access or intrusion. However, no internet-based system is 100% secure.
                        </p>
                    </section>

                    {/* Third Parties */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <Users size={20} color="#f36f21" />
                            Third Parties
                        </h2>
                        <p style={{ color: '#1f2937', lineHeight: '1.8', fontSize: '1rem', fontWeight: 500 }}>
                            We only share your information when legally obligated or to provide necessary services. We ensure third parties handle your data securely and in line with this Privacy Policy.
                        </p>
                    </section>

                    {/* Cookies */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <Cookie size={20} color="#f36f21" />
                            Cookies
                        </h2>
                        <p style={{ color: '#1f2937', lineHeight: '1.8', fontSize: '1rem', fontWeight: 500 }}>
                            We may use cookies and similar technologies for better user experience, analytics, and personalization. You can manage these settings in your browser.
                        </p>
                    </section>

                    {/* External Links */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <ExternalLink size={20} color="#f36f21" />
                            External Links
                        </h2>
                        <p style={{ color: '#1f2937', lineHeight: '1.8', fontSize: '1rem', fontWeight: 500 }}>
                            We may link to other websites. Please review their privacy policies as we are not responsible for their practices.
                        </p>
                    </section>

                    {/* Children's Privacy */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <Users size={20} color="#f36f21" />
                            Children's Privacy
                        </h2>
                        <p style={{ color: '#1f2937', lineHeight: '1.8', fontSize: '1rem', fontWeight: 500 }}>
                            Our services, including texting, are not for children under 13. We do not intentionally gather their data.
                        </p>
                    </section>

                    {/* Updates */}
                    <section style={sectionStyle}>
                        <h2 style={headingStyle}>
                            <RefreshCw size={20} color="#f36f21" />
                            Updates
                        </h2>
                        <p style={{ color: '#1f2937', lineHeight: '1.8', fontSize: '1rem', fontWeight: 500 }}>
                            This Privacy Policy may change. The "Last Updated" date reflects revisions. Continued use of our services means you accept any changes.
                        </p>
                    </section>

                    {/* Questions */}
                    <div style={highlightBoxStyle}>
                        <h2 style={{
                            fontSize: '1.375rem',
                            fontWeight: 600,
                            color: '#0d3b54',
                            marginBottom: '16px',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '10px',
                            fontFamily: "'Inter', sans-serif",
                        }}>
                            <HelpCircle size={22} color="#f36f21" />
                            Questions?
                        </h2>
                        <p style={{ color: '#1f2937', lineHeight: '1.8', margin: 0, fontSize: '1rem', fontWeight: 500 }}>
                            If you have questions about this policy or our data practices contact us at:{' '}
                            <a
                                href="mailto:Info@usbcfunding.com"
                                style={{
                                    color: '#f36f21',
                                    fontWeight: 600,
                                    textDecoration: 'none',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '4px',
                                    transition: 'opacity 0.3s ease'
                                }}
                            >
                                <Mail size={14} /> Info@usbcfunding.com
                            </a>
                        </p>
                    </div>

                    {/* Back to Home Button */}
                    <div style={{ textAlign: 'center', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(13, 59, 84, 0.1)' }}>
                        <Link to="/" style={{ textDecoration: 'none' }}>
                            <motion.button
                                whileHover={{
                                    backgroundColor: '#d45a10',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 6px 20px rgba(243, 111, 33, 0.3)'
                                }}
                                whileTap={{ scale: 0.98 }}
                                style={{
                                    background: '#f36f21',
                                    color: '#ffffff',
                                    border: 'none',
                                    borderRadius: '4px',
                                    padding: '14px 32px',
                                    fontSize: '0.875rem',
                                    fontWeight: 600,
                                    cursor: 'pointer',
                                    display: 'inline-flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    fontFamily: "'Inter', sans-serif",
                                    letterSpacing: '0.03em',
                                    transition: 'all 0.3s ease',
                                    boxShadow: '0 4px 15px rgba(243, 111, 33, 0.3)'
                                }}
                            >
                                <ArrowLeft size={16} /> Back to Home
                            </motion.button>
                        </Link>
                    </div>
                </motion.div>

                {/* Trust Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                    style={{
                        marginTop: '48px',
                        textAlign: 'center',
                        color: '#64748b',
                        fontSize: '0.875rem',
                        fontFamily: "'Inter', sans-serif",
                        fontWeight: 500,
                        letterSpacing: '0.02em'
                    }}
                >
                    <p style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                        🔒 Your privacy is our priority
                    </p>
                </motion.div>
            </main>
        </div>
    );
};

export default PrivacyPolicyPage;
