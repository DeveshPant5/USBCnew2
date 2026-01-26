import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, MapPin, Mail } from 'lucide-react';
import './Contact.css'; // This import is CRITICAL

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
      alert('Message sent!');
      setForm({ name: '', email: '', message: '' });
    }, 1500);
  };

  return (
    <section id="contact" className="contact-section">
      
      {/* Background Glow Effects */}
      <div className="contact-bg-glow glow-purple"></div>
      <div className="contact-bg-glow glow-blue"></div>

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
            <p className="sub-text">GET IN TOUCH</p>
            <h3 className="head-text">Let's Connect.</h3>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <label>
              <span>Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="abhi"
                className="input-field"
              />
            </label>

            <label>
              <span>Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="abhi@example.com"
                className="input-field"
              />
            </label>

            <label>
              <span>Your Message</span>
              <textarea
                rows={5}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your project..."
                className="input-field textarea-field"
              />
            </label>

            <button type="submit" className="submit-btn">
              {loading ? "Sending..." : "Send Message"}
              <Send size={18} />
            </button>
          </form>
        </motion.div>

        {/* RIGHT SIDE: Visuals */}
        <motion.div
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="contact-visuals"
        >
          {/* 3D Earth Animation */}
          <div className="earth-wrapper">
            <div className="earth-sphere"></div>
            <div className="earth-ring"></div>
          </div>

          {/* Info Cards */}
          <div className="info-cards">
            <div className="info-card">
              <div className="icon-box purple-icon">
                <Mail size={24} />
              </div>
              <div className="card-text">
                <span className="card-label">Email Us</span>
                <span className="card-value">Info@usbcfunding.com</span>
              </div>
            </div>

            <div className="info-card">
              <div className="icon-box blue-icon">
                <MapPin size={24} />
              </div>
              <div className="card-text">
                <span className="card-label">Visit Us</span>
                <span className="card-value">2500 Treymore Drive, Suite 201, Orlando, FL, 32825</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;