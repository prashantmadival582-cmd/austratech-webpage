import { Link } from 'react-router-dom';
import { serviceCategories } from '../data/services';
import logoAustratech from '../assets/logo-austratech.jpeg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link to="/" className="footer-brand-logo" aria-label="Austratech Home">
            <img src={logoAustratech} alt="Austratech company logo" className="footer-logo-img" />
          </Link>
          <p>
            Austratech is a technology and digital marketing company based in Australia,
            delivering innovative digital solutions that help businesses grow and succeed
            in the digital age.
          </p>
          <div className="footer-social">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="LinkedIn">in</a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Twitter">X</a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Facebook">f</a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="footer-social-link" aria-label="Instagram">ig</a>
          </div>
        </div>

        <div className="footer-column">
          <h4>Services</h4>
          <div className="footer-links">
            {serviceCategories.slice(0, 6).map(cat => (
              <Link key={cat.slug} to={`/services/${cat.slug}/`} className="footer-link">{cat.name}</Link>
            ))}
          </div>
        </div>

        <div className="footer-column">
          <h4>Company</h4>
          <div className="footer-links">
            <Link to="/about/" className="footer-link">About Us</Link>
            <Link to="/services/" className="footer-link">Our Services</Link>
            <Link to="/locations/" className="footer-link">Locations</Link>
            <Link to="/contact/" className="footer-link">Contact Us</Link>
          </div>
        </div>

        <div className="footer-column">
          <h4>Locations</h4>
          <div className="footer-links">
            <Link to="/locations/melbourne/" className="footer-link">Melbourne</Link>
            <Link to="/locations/sydney/" className="footer-link">Sydney</Link>
            <Link to="/locations/brisbane/" className="footer-link">Brisbane</Link>
            <Link to="/locations/perth/" className="footer-link">Perth</Link>
          </div>
          <h4 style={{ marginTop: 'var(--space-6)' }}>Contact</h4>
          <div className="footer-links">
            <a href="mailto:info@austratech.com.au" className="footer-link">info@austratech.com.au</a>
            <a href="tel:+611300000000" className="footer-link">1300 000 000</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <span>&copy; {currentYear} Austratech. All rights reserved.</span>
          <div className="footer-bottom-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms of Service</a>
            <a href="/sitemap.xml">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
