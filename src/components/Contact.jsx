import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail, Phone, Clock } from 'lucide-react';
import './Contact.css';

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert('Message sent successfully!');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">

      {/* Background Glow Effects */}
      <div className="contact-bg-glow glow-purple"></div>
      <div className="contact-bg-glow glow-blue"></div>

      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="contact-header"
        style={{ maxWidth: '1200px', margin: '0 auto 80px', padding: '0 48px' }}
      >
        <p className="section-label">Contact Us</p>
        <h2 className="section-title">Let's Start a Conversation</h2>
        <p className="section-subtitle">
          Have questions about funding? Our team is ready to help you find the perfect financing solution for your business.
        </p>
      </motion.div>

      <div className="contact-container">

        {/* LEFT SIDE: The Form */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-form-card"
        >
          <div className="form-header">
            <p className="sub-text">Get In Touch</p>
            <h3 className="head-text">Send us a Message</h3>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <label>
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Smith"
                className="input-field"
                required
              />
            </label>

            <label>
              <span>Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@company.com"
                className="input-field"
                required
              />
            </label>

            <label>
              <span>Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your funding needs..."
                className="input-field textarea-field"
                required
              />
            </label>

            <motion.button
              type="submit"
              className="submit-btn"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </motion.button>
          </form>
        </motion.div>

        {/* RIGHT SIDE: Visuals & Info */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-visuals"
        >
          {/* Decorative Globe Element */}
          <div className="earth-wrapper">
            <motion.div
              className="earth-sphere"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            />
            <div className="earth-ring"></div>
          </div>

          {/* Info Cards */}
          <div className="info-cards">
            <motion.div
              className="info-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-box purple-icon">
                <Mail size={24} />
              </div>
              <div className="card-text">
                <span className="card-label">Email Us</span>
                <span className="card-value">Info@usbcfunding.com</span>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-box blue-icon">
                <Phone size={24} />
              </div>
              <div className="card-text">
                <span className="card-label">Call Us</span>
                <span className="card-value">(800) 555-USBC</span>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-box purple-icon">
                <MapPin size={24} />
              </div>
              <div className="card-text">
                <span className="card-label">Visit Us</span>
                <span className="card-value">2500 Treymore Drive, Suite 201, Orlando, FL 32825</span>
              </div>
            </motion.div>

            <motion.div
              className="info-card"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3 }}
            >
              <div className="icon-box blue-icon">
                <Clock size={24} />
              </div>
              <div className="card-text">
                <span className="card-label">Business Hours</span>
                <span className="card-value">Mon - Fri: 9:00 AM - 6:00 PM EST</span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;