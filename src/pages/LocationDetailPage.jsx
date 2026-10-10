import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { getLocationBySlug, getLocationServiceBySlug } from '../data/locations';
import { getServiceBySlug } from '../data/services';
import AssetImage from '../components/AssetImage';
import { getLocationImage } from '../data/imageCatalog';
import { createLocalBusinessSchema } from '../utils/seo';
import NotFound from './NotFound';

const LocationDetailPage = () => {
  const { slug } = useParams();

  // Try as city page first
  const location = getLocationBySlug(slug);

  if (location) {
    return (
      <>
        <SEOHead
          title={location.metaTitle}
          description={location.metaDescription}
          canonical={`/locations/${location.slug}/`}
        />
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(createLocalBusinessSchema(location))}</script>
        </Helmet>

        <div className="location-detail-hero">
          <div className="container">
            <div style={{ fontSize: '4rem', marginBottom: 'var(--space-4)' }}>{location.icon}</div>
            <h1>Digital Services in {location.name}</h1>
            <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>{location.description}</p>
          </div>
        </div>

        {getLocationImage(location.slug) && (
          <section className="section location-feature-image-section">
            <div className="container">
              <AssetImage image={getLocationImage(location.slug)} className="location-feature-image" />
            </div>
          </section>
        )}

        {/* Highlights */}
        <section className="section">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Why {location.name}</span>
              <h2>Our {location.name} Services</h2>
            </div>
            <ul style={{ maxWidth: '700px', margin: '0 auto', listStyle: 'none', padding: 0 }}>
              {location.highlights.map((h, i) => (
                <li key={i} style={{ padding: 'var(--space-3) 0', paddingLeft: 'var(--space-6)', position: 'relative', color: 'var(--text-secondary)' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--primary)', fontWeight: 700 }}>✓</span>
                  {h}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Service links */}
        <section className="section bg-light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Services</span>
              <h2>Services Available in {location.name}</h2>
              <p>Explore our digital services tailored for {location.name} businesses.</p>
            </div>
            <div className="location-services-list">
              {location.serviceHighlights.map((s) => (
                <Link key={s.slug} to={`/locations/${s.slug}/`} className="location-service-item">
                  → {s.name}
                </Link>
              ))}
            </div>
          </div>
        </section>

        <CTASection
          title={`Ready to Grow Your ${location.name} Business?`}
          description={`Contact Austratech today for expert digital services in ${location.name} and ${location.state}.`}
        />
      </>
    );
  }

  // Try as location-service page (e.g., seo-company-melbourne)
  const locService = getLocationServiceBySlug(slug);
  if (!locService) return <NotFound />;

  const parentService = getServiceBySlug(locService.serviceSlug);

  return (
    <>
      <SEOHead
        title={`${locService.name} | Austratech`}
        description={`Professional ${locService.name.toLowerCase()} services. Austratech helps ${locService.location.name} businesses grow with expert digital solutions.`}
        canonical={`/locations/${locService.slug}/`}
      />

      <div className="location-detail-hero">
        <div className="container">
          <h1>{locService.name}</h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', maxWidth: '700px', margin: '0 auto' }}>
            Professional {locService.name.toLowerCase()} services for businesses in {locService.location.name}, {locService.location.state}.
          </p>
        </div>
      </div>

      {getLocationImage(locService.location.slug) && (
        <section className="section location-feature-image-section">
          <div className="container">
            <AssetImage image={getLocationImage(locService.location.slug)} className="location-feature-image" />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="service-content">
            <h2>About {locService.name}</h2>
            <p>
              Austratech provides expert {locService.name.toLowerCase()} to businesses across {locService.location.name} and {locService.location.state}.
              Our team understands the {locService.location.name} market and delivers tailored digital solutions that help local businesses
              compete and grow in the digital landscape.
            </p>
            <p>
              Whether you are a small business in the {locService.location.name} CBD or a larger organisation across {locService.location.state},
              our {locService.name.toLowerCase()} are designed to deliver measurable results and real business value.
            </p>

            <h2>Why Choose Austratech for {locService.name}?</h2>
            <ul>
              <li>Deep understanding of the {locService.location.name} business landscape</li>
              <li>Proven track record with {locService.location.state} businesses</li>
              <li>Tailored strategies for {locService.location.name}\'s competitive market</li>
              <li>Results-driven approach with transparent reporting</li>
              <li>Ongoing support and optimisation</li>
              <li>Full-service digital capabilities beyond {parentService?.name || 'this service'}</li>
            </ul>

            {/* Link to main service page */}
            {parentService && (
              <>
                <h2>Learn More About Our {parentService.name} Services</h2>
                <p>
                  Our {locService.name.toLowerCase()} are part of our comprehensive <Link to={`/services/${parentService.slug}/`}>{parentService.name}</Link> offerings.
                  Explore the full range of services available to {locService.location.name} businesses.
                </p>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Other location services */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>More Services in {locService.location.name}</h2>
          </div>
          <div className="location-services-list">
            {locService.location.serviceHighlights
              .filter(s => s.slug !== slug)
              .map(s => (
                <Link key={s.slug} to={`/locations/${s.slug}/`} className="location-service-item">
                  → {s.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTASection
        title={`Get Started with ${locService.name}`}
        description={`Contact Austratech today to discuss ${locService.name.toLowerCase()} for your ${locService.location.name} business.`}
      />
    </>
  );
};

export default LocationDetailPage;
