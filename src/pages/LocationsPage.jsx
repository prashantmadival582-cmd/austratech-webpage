import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import { locations } from '../data/locations';
import AssetImage from '../components/AssetImage';
import { getLocationImage, getPageImage } from '../data/imageCatalog';

const LocationsPage = () => {
  const overviewImage = getPageImage('our-locations');

  return (
    <>
      <SEOHead
        title="Our Locations | Austratech"
        description="Austratech serves businesses across Australia including Melbourne, Sydney, Brisbane, and Perth. Find our digital services in your city."
        canonical="/locations/"
      />

      <div className="page-header">
        <div className="container">
          <h1>Our Locations</h1>
          <p>Austratech provides comprehensive digital services to businesses across major Australian cities.</p>
        </div>
      </div>

      {overviewImage && (
        <section className="section locations-overview-image-section">
          <div className="container">
            <AssetImage image={overviewImage} className="locations-overview-image" loading="lazy" />
          </div>
        </section>
      )}

      <section className="section">
        <div className="container">
          <div className="locations-grid">
            {locations.map(loc => (
              <Link key={loc.id} to={`/locations/${loc.slug}/`} className="location-card">
                <AssetImage image={getLocationImage(loc.slug)} className="location-card-image" />
                {!getLocationImage(loc.slug) && <div className="location-icon">{loc.icon}</div>}
                <h3>{loc.name}</h3>
                <p>{loc.state}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Why Location Matters</h2>
            <p>While we serve clients across all of Australia, understanding local markets is key to delivering effective digital strategies. Our team has experience working with businesses in each of these major cities, understanding their unique challenges and opportunities.</p>
          </div>
        </div>
      </section>

      <CTASection
        title="Find Services In Your City"
        description="Contact us to learn about our digital services available in your area."
      />
    </>
  );
};

export default LocationsPage;
