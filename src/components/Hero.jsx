import { Link } from 'react-router-dom';
import AssetImage from './AssetImage';
import { getPageImage } from '../data/imageCatalog';

const Hero = () => {
  const heroImage = getPageImage('hero-innovation');

  return (
    <section className="hero">
      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge">
            🇦🇺 Australia's Trusted Technology Partner
          </div>
          <h1>
            Transform Your Business with{' '}
            <span className="gradient-text">Digital Excellence</span>
          </h1>
          <p className="hero-description">
            We help Australian businesses grow through innovative digital marketing, custom software development, AI solutions, and cutting-edge web and mobile technologies.
          </p>
          <div className="hero-buttons">
            <Link to="/contact/" className="btn btn-hero-primary btn-lg">Start Your Project</Link>
            <Link to="/contact/" className="btn btn-hero-secondary btn-lg">Contact Us</Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-graphic">
            {heroImage ? (
              <AssetImage image={heroImage} className="hero-graphic-image" loading="eager" />
            ) : (
              <div className="hero-graphic-content">
                <div className="big-icon">🚀</div>
                <h3>Innovation Delivered</h3>
                <p>Digital Marketing • Development • AI • Cloud</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
