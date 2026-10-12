import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { serviceCategories } from '../data/services';
import logoAustratech from '../assets/logo-austratech.jpeg';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileOpen(false);
    setMobileDropdown(null);
  }, [location.pathname]);

  useEffect(() => {
    if (!isMobileOpen) return undefined;

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setIsMobileOpen(false);
    };

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [isMobileOpen]);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isMobileOpen]);

  const isActive = (path) => {
    const current = location.pathname.endsWith('/') && location.pathname !== '/'
      ? location.pathname.slice(0, -1)
      : location.pathname;
    const target = path.endsWith('/') && path !== '/'
      ? path.slice(0, -1)
      : path;

    if (target === '') return current === '/' || current === '';
    return current === target || current.startsWith(target + '/');
  };

  const navLinks = [
    { label: 'Home', path: '/' },
    {
      label: 'Services',
      path: '/services/',
      dropdown: serviceCategories.map(cat => ({
        label: cat.name,
        path: `/services/${cat.slug}/`,
        icon: cat.icon
      }))
    },
    { label: 'Locations', path: '/locations/' },
    { label: 'About', path: '/about/' },
    { label: 'Contact', path: '/contact/' }
  ];

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <nav className="navbar-container" role="navigation" aria-label="Main navigation">
        <Link to="/" className="navbar-logo" aria-label="Austratech Home">
          <img src={logoAustratech} alt="Austratech company logo" className="logo-img" />
        </Link>

        <div className="navbar-links">
          {navLinks.map((link) => (
            link.dropdown ? (
              <div key={link.label} className="navbar-dropdown">
                <Link
                  to={link.path}
                  className={`navbar-link navbar-dropdown-trigger ${isActive(link.path) ? 'active' : ''}`}
                  aria-haspopup="true"
                >
                  {link.label}
                  <span className="navbar-dropdown-arrow" aria-hidden="true">▾</span>
                </Link>
                <div className="navbar-dropdown-menu" role="menu">
                  {link.dropdown.map((item) => (
                    <Link key={item.path} to={item.path} className="navbar-dropdown-item" role="menuitem">
                      <span className="dropdown-item-icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link
                key={link.label}
                to={link.path}
                className={`navbar-link ${isActive(link.path) ? 'active' : ''}`}
              >
                {link.label}
              </Link>
            )
          ))}
        </div>

        <div className="navbar-actions">
          <Link to="/contact/" className="btn btn-primary btn-sm navbar-cta">
            Get a Quote
          </Link>
          <button
            className={`menu-toggle ${isMobileOpen ? 'open' : ''}`}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            aria-label={isMobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={isMobileOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-menu ${isMobileOpen ? 'open' : ''}`} aria-hidden={!isMobileOpen}>
        <div className="mobile-menu-container">
          <div className="mobile-menu-links">
            {navLinks.map((link) => (
              <div key={link.label} className="mobile-menu-item">
                {link.dropdown ? (
                  <>
                    <button
                      className="mobile-menu-link mobile-dropdown-btn"
                      onClick={() => setMobileDropdown(mobileDropdown === link.label ? null : link.label)}
                      aria-expanded={mobileDropdown === link.label}
                    >
                      <span>{link.label}</span>
                      <span className="dropdown-indicator">{mobileDropdown === link.label ? '▴' : '▾'}</span>
                    </button>
                    <div className={`mobile-dropdown-items ${mobileDropdown === link.label ? 'open' : ''}`}>
                      <Link to="/services/" className="mobile-dropdown-item main-category-link">
                        → All Services Overview
                      </Link>
                      {link.dropdown.map((item) => (
                        <Link key={item.path} to={item.path} className="mobile-dropdown-item">
                          <span className="mobile-icon">{item.icon}</span> {item.label}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  <Link
                    to={link.path}
                    className={`mobile-menu-link ${isActive(link.path) ? 'active' : ''}`}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            <Link to="/contact/" className="btn btn-primary mobile-cta">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
