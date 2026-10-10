import { Link } from 'react-router-dom';

const CTASection = ({ 
  title = 'Ready to Transform Your Business?', 
  description = 'Contact Austratech today and discover how our digital solutions can help you achieve your business goals.',
  primaryBtn = { text: 'Get Started', link: '/contact/' },
  secondaryBtn = { text: 'View Our Services', link: '/services/' }
}) => {
  const secondaryText = secondaryBtn?.text || 'Contact Us';
  const secondaryLink = secondaryBtn?.link || '/contact/';

  return (
    <section className="cta-section">
      <div className="container">
        <h2>{title}</h2>
        <p>{description}</p>
        <div className="cta-buttons">
          <Link to={primaryBtn.link} className="btn btn-cta-primary btn-lg">
            {primaryBtn.text}
          </Link>
          <Link to={secondaryLink} className="btn btn-cta-secondary btn-lg">
            {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
