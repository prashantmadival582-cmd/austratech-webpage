import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { serviceCategories } from '../data/services';
import AssetImage from '../components/AssetImage';
import { getCategoryImage } from '../data/imageCatalog';

const ServicesPage = () => {
  return (
    <>
      <SEOHead
        title="Our Services | Austratech"
        description="Explore Austratech's comprehensive digital services including digital marketing, web development, app development, AI solutions, cloud services, and more."
        canonical="/services/"
      />

      <div className="page-header">
        <div className="container">
          <h1>Our Services</h1>
          <p>Comprehensive digital solutions to help your business grow and succeed in the digital landscape.</p>
        </div>
      </div>

      <section className="section">
        <div className="container services-list-section">
          {serviceCategories.map((cat) => (
            <div key={cat.id} className="service-category">
              <Link to={`/services/${cat.slug}/`}>
                <h2>{cat.icon} {cat.name}</h2>
              </Link>
              <div className={`service-category-intro${getCategoryImage(cat.id) ? ' has-image' : ''}`}>
                {getCategoryImage(cat.id) && (
                  <AssetImage image={getCategoryImage(cat.id)} className="service-category-image" />
                )}
                <p>{cat.shortDescription}</p>
              </div>
              <div className="service-links-grid">
                <Link to={`/services/${cat.slug}/`} className="service-link-card" style={{ fontWeight: 700, borderColor: 'var(--primary)', background: 'var(--primary-soft)' }}>
                  → {cat.name} Overview
                </Link>
                {cat.subServices && cat.subServices.map(sub => (
                  <Link key={sub.slug} to={`/services/${sub.slug}/`} className="service-link-card">
                    {sub.icon} {sub.name}
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default ServicesPage;
