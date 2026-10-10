import { Link } from 'react-router-dom';
import SEOHead from '../components/SEOHead';

const NotFound = () => {
  return (
    <>
      <SEOHead title="Page Not Found | Austratech" noindex={true} />
      <div className="page-header" style={{ minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div style={{ fontSize: '6rem', marginBottom: 'var(--space-4)' }}>🔍</div>
          <h1>404 - Page Not Found</h1>
          <p style={{ marginBottom: 'var(--space-8)' }}>The page you are looking for does not exist or has been moved.</p>
          <div style={{ display: 'flex', gap: 'var(--space-4)', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link to="/" className="btn btn-white btn-lg">Go Home</Link>
            <Link to="/services/" className="btn btn-secondary btn-lg" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>View Services</Link>
            <Link to="/contact/" className="btn btn-secondary btn-lg" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
