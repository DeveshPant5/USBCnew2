import { ArrowRight, Twitter, Linkedin, Instagram } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="premium-footer">
      <div className="container">


        <div className="footer-grid">


          <div className="footer-brand-col">
            <div className="footer-logo">
              USBC Capital<span className="dot">.</span>
            </div>
            <p className="footer-tagline">
              The operating system for modern capital.
              <br />Funding the next generation of giants.
            </p>

            <div className="newsletter-box">
              <span className="newsletter-label">Stay ahead of the market</span>
              <div className="input-group">
                <input type="email" placeholder="Enter your email" />
                <button aria-label="Subscribe">
                  <ArrowRight size={20} />
                </button>
              </div>
            </div>
          </div>


          <div className="footer-links-group">
            <div className="link-col">
              <h4>Product</h4>
              <ul>
                <li><a href="#">Term Loans</a></li>
                <li><a href="#">Lines of Credit</a></li>
                <li><a href="#">SBA Solutions</a></li>
                <li><a href="#">Equipment Financing</a></li>
              </ul>
            </div>

            <div className="link-col">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Careers</a> <span className="hiring-badge">Hiring</span></li>
                <li><a href="#">Press</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>

            <div className="link-col">
              <h4>Legal</h4>
              <ul>
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Cookie Settings</a></li>
              </ul>
            </div>
          </div>
        </div>


        <div className="footer-bottom">
          <span className="copyright">
            &copy; {new Date().getFullYear()} USBC Funding All rights reserved.
          </span>

          <div className="social-links">
            <a href="#" aria-label="Twitter"><Twitter size={20} /></a>
            <a href="#" aria-label="LinkedIn"><Linkedin size={20} /></a>
            <a href="#" aria-label="Instagram"><Instagram size={20} /></a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;