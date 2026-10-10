import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import ServiceCard from '../components/ServiceCard';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import AssetImage from '../components/AssetImage';
import { serviceCategories } from '../data/services';
import { locations } from '../data/locations';
import { generalFaqs } from '../data/faqs';
import { getCategoryImage, getLocationImage, getPageImage } from '../data/imageCatalog';
import { organizationSchema } from '../utils/seo';

const Home = () => {
  const industries = [
    { icon: '🛒', name: 'E-commerce' },
    { icon: '🏥', name: 'Healthcare' },
    { icon: '🏦', name: 'Finance' },
    { icon: '🎓', name: 'Education' },
    { icon: '🏠', name: 'Real Estate' },
    { icon: '💻', name: 'Technology' },
    { icon: '🏫', name: 'Government' },
    { icon: '🏭', name: 'Manufacturing' },
    { icon: '⚖️', name: 'Legal' },
    { icon: '🏨', name: 'Hospitality' },
    { icon: '📚', name: 'Media' },
    { icon: '🚚', name: 'Logistics' }
  ];

  const whyChoose = [
    { icon: '🏆', title: 'Proven Expertise', description: 'Our team combines deep technical knowledge with digital marketing expertise to deliver solutions that work.' },
    { icon: '🎯', title: 'Results-Driven', description: 'We focus on measurable outcomes and ROI, not just deliverables. Every project is aligned with your business goals.' },
    { icon: '🤝', title: 'Client Partnership', description: 'We work as an extension of your team, providing transparent communication and collaborative problem-solving.' },
    { icon: '⚡', title: 'Agile Delivery', description: 'Our agile methodology ensures fast delivery, continuous improvement, and flexibility to adapt to changing needs.' },
    { icon: '🔒', title: 'Quality & Security', description: 'We follow industry best practices for code quality, testing, and security to deliver reliable, production-ready solutions.' },
    { icon: '🇦🇺', title: 'Australian Based', description: 'Based in Australia, we understand the local market and provide services tailored to Australian businesses.' }
  ];

  const processSteps = [
    { number: '01', title: 'Discover', description: 'We learn about your business, goals, audience, and challenges through in-depth consultation.' },
    { number: '02', title: 'Strategise', description: 'We develop a tailored strategy and plan that aligns with your objectives and budget.' },
    { number: '03', title: 'Execute', description: 'Our expert team brings the strategy to life with precision, quality, and attention to detail.' },
    { number: '04', title: 'Optimise', description: 'We continuously monitor, measure, and refine to ensure ongoing improvement and maximum results.' }
  ];

  const technologies = [
    'React', 'Next.js', 'Node.js', 'Python', 'Flutter', 'Swift', 'Kotlin',
    'WordPress', 'Shopify', 'AWS', 'Azure', 'Google Cloud', 'Docker', 'Kubernetes',
    'TensorFlow', 'OpenAI', 'PostgreSQL', 'MongoDB', 'Figma', 'Google Ads',
    'SEMrush', 'HubSpot', 'Power BI', 'Tableau'
  ];

  const trustedPartnerImg = getPageImage('trusted-partner');

  return (
    <>
      <SEOHead
        title="Austratech | Technology & Digital Marketing Company Australia"
        description="Leading Australian technology and digital marketing company. Expert web development, app development, SEO, AI solutions, cloud services, and digital marketing for businesses across Australia."
        canonical="/"
        keywords={['digital marketing australia', 'web development australia', 'app development australia', 'seo services australia', 'technology company australia']}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(organizationSchema)}</script>
      </Helmet>

      <Hero />

      {/* Introduction */}
      <section className="section">
        <div className="container">
          <div className="intro-grid">
            <div className="intro-content">
              <span className="section-label">About Austratech</span>
              <h2>Your Trusted Technology & Digital Marketing Partner</h2>
              {trustedPartnerImg && (
                <AssetImage image={trustedPartnerImg} className="intro-inline-image" loading="lazy" />
              )}
              <p>
                Austratech is an Australian technology and digital marketing company dedicated to helping businesses
                succeed in the digital landscape. We combine technical expertise with strategic marketing knowledge
                to deliver solutions that drive measurable growth.
              </p>
              <p>
                From startups to established enterprises, we partner with businesses across Australia to build
                exceptional websites, develop innovative mobile apps, implement effective digital marketing strategies,
                and harness the power of AI and cloud technologies.
              </p>
              <Link to="/about/" className="btn btn-primary">Learn More About Us</Link>
            </div>
            <div className="intro-stats">
              <div className="intro-stat-card">
                <div className="stat-number">8+</div>
                <div className="stat-label">Service Categories</div>
              </div>
              <div className="intro-stat-card">
                <div className="stat-number">90+</div>
                <div className="stat-label">Specialised Services</div>
              </div>
              <div className="intro-stat-card">
                <div className="stat-number">4</div>
                <div className="stat-label">Australian Locations</div>
              </div>
              <div className="intro-stat-card">
                <div className="stat-number">24/7</div>
                <div className="stat-label">Support & Maintenance</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Services */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Services</span>
            <h2>Comprehensive Digital Solutions</h2>
            <p>From digital marketing and web development to AI and cloud solutions, we offer everything your business needs to thrive online.</p>
          </div>
          <div className="services-home-grid">
            {serviceCategories.map((cat) => (
              <ServiceCard
                key={cat.id}
                icon={cat.icon}
                title={cat.name}
                description={cat.shortDescription}
                link={`/services/${cat.slug}/`}
                image={getCategoryImage(cat.id)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Why Austratech</span>
            <h2>Why Choose Austratech?</h2>
            <p>We combine technical excellence with strategic thinking to deliver digital solutions that drive real business results.</p>
          </div>
          <div className="why-choose-grid">
            {whyChoose.map((item, index) => (
              <div key={index} className="why-choose-item">
                <div className="icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Process</span>
            <h2>How We Work</h2>
            <p>Our proven four-step process ensures every project is delivered with quality, efficiency, and measurable results.</p>
          </div>
          <div className="process-steps">
            {processSteps.map((step, index) => (
              <div key={index} className="process-step">
                <div className="process-step-number">{step.number}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Industries</span>
            <h2>Industries We Serve</h2>
            <p>We deliver tailored digital solutions for businesses across a wide range of industries throughout Australia.</p>
          </div>
          <div className="industries-grid">
            {industries.map((ind, index) => (
              <div key={index} className="industry-card">
                <div className="industry-icon">{ind.icon}</div>
                <h4>{ind.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Technologies</span>
            <h2>Technologies & Tools We Use</h2>
            <p>We work with the latest and most reliable technologies to build solutions that are fast, scalable, and future-proof.</p>
          </div>
          <div className="tech-tags">
            {technologies.map((tech, index) => (
              <span key={index} className="tech-tag">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Locations</span>
            <h2>Serving Businesses Across Australia</h2>
            <p>We provide digital solutions to businesses in major Australian cities and beyond.</p>
          </div>
          <div className="locations-grid">
            {locations.map((loc) => (
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

      {/* FAQ */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">FAQ</span>
            <h2>Frequently Asked Questions</h2>
            <p>Find answers to common questions about our services and how we work.</p>
          </div>
          <FAQ faqs={generalFaqs} />
        </div>
      </section>

      {/* CTA */}
      <CTASection />
    </>
  );
};

export default Home;
