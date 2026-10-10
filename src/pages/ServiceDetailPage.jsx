import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import FAQ from '../components/FAQ';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import AssetImage from '../components/AssetImage';
import { getServiceBySlug, getCategoryBySlug, getRelatedServices, serviceCategories } from '../data/services';
import { getCategoryImage } from '../data/imageCatalog';
import { createServiceSchema } from '../utils/seo';
import NotFound from './NotFound';

const ServiceDetailPage = () => {
  const { slug } = useParams();

  // Try as pillar first, then as sub-service
  const category = getCategoryBySlug(slug);
  const service = !category ? getServiceBySlug(slug) : null;

  if (!category && !service) return <NotFound />;

  // PILLAR PAGE
  if (category) {
    const categoryImage = getCategoryImage(category.id);

    return (
      <>
        <SEOHead
          title={category.metaTitle}
          description={category.metaDescription}
          canonical={`/services/${category.slug}/`}
          keywords={category.keywords}
        />
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(createServiceSchema(category))}</script>
        </Helmet>

        <div className="page-header">
          <div className="container">
            <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>Our Services</span>
            <h1>{category.icon} {category.name}</h1>
            <p>{category.shortDescription}</p>
          </div>
        </div>

        {categoryImage && (
          <section className="section service-feature-image-section">
            <div className="container">
              <AssetImage image={categoryImage} className="service-feature-image" />
            </div>
          </section>
        )}

        {/* Description */}
        <section className="section">
          <div className="container">
            <div className="service-content">
              <h2>About Our {category.name} Services</h2>
              <p>{category.description}</p>

              {/* Benefits */}
              <h2>Benefits</h2>
              <ul>
                {category.benefits.map((b, i) => <li key={i}>{b}</li>)}
              </ul>

              {/* Features */}
              <h2>Key Features</h2>
              <ul>
                {category.features.map((f, i) => <li key={i}>{f}</li>)}
              </ul>
            </div>
          </div>
        </section>

        {/* Process */}
        {category.process && (
          <section className="section bg-light">
            <div className="container">
              <div className="section-header">
                <span className="section-label">Our Process</span>
                <h2>How We Deliver {category.name}</h2>
              </div>
              <div className="process-steps">
                {category.process.map((step, i) => (
                  <div key={i} className="process-step">
                    <div className="process-step-number">{String(i + 1).padStart(2, '0')}</div>
                    <h4>{step.step}</h4>
                    <p>{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Sub-services */}
        {category.subServices && category.subServices.length > 0 && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-label">{category.name}</span>
                <h2>Our {category.name} Services</h2>
                <p>Explore our specialised {category.name.toLowerCase()} services to find the right solution for your business.</p>
              </div>
              <div className="grid-3">
                {category.subServices.map((sub) => (
                  <div key={sub.slug} className="card">
                    <div className="card-icon">{sub.icon}</div>
                    <h3>{sub.name}</h3>
                    <p>{sub.shortDescription}</p>
                    <Link to={`/services/${sub.slug}/`} className="card-link">Learn More <span>→</span></Link>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Technologies */}
        {category.technologies && (
          <section className="section bg-light">
            <div className="container">
              <div className="section-header">
                <span className="section-label">Technologies</span>
                <h2>Technologies We Use</h2>
              </div>
              <div className="tech-tags">
                {category.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* Industries */}
        {category.industries && (
          <section className="section">
            <div className="container">
              <div className="section-header">
                <span className="section-label">Industries</span>
                <h2>Industries We Serve</h2>
              </div>
              <div className="tech-tags">
                {category.industries.map((ind, i) => (
                  <span key={i} className="tech-tag">{ind}</span>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* FAQ */}
        {category.faqs && category.faqs.length > 0 && (
          <section className="section bg-light">
            <div className="container">
              <div className="section-header">
                <span className="section-label">FAQ</span>
                <h2>Frequently Asked Questions</h2>
              </div>
              <FAQ faqs={category.faqs} />
            </div>
          </section>
        )}

        <CTASection
          title={`Ready to Get Started with ${category.name}?`}
          description={`Contact Austratech today to discuss your ${category.name.toLowerCase()} needs and receive a free consultation.`}
        />
      </>
    );
  }

  // CLUSTER (SUB-SERVICE) PAGE
  const parentCategory = serviceCategories.find(cat =>
    cat.subServices && cat.subServices.some(s => s.slug === slug)
  );

  const relatedServices = getRelatedServices(service.relatedSlugs);
  const categoryImage = parentCategory ? getCategoryImage(parentCategory.id) : null;

  return (
    <>
      <SEOHead
        title={service.metaTitle}
        description={service.metaDescription}
        canonical={`/services/${service.slug}/`}
        keywords={service.keywords}
      />
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(createServiceSchema(service))}</script>
      </Helmet>

      <div className="page-header">
        <div className="container">
          <span className="section-label" style={{ color: 'rgba(255,255,255,0.7)' }}>
            {parentCategory?.name}
          </span>
          <h1>{service.icon} {service.name}</h1>
          <p>{service.shortDescription}</p>
        </div>
      </div>

      {categoryImage && (
        <section className="section service-feature-image-section">
          <div className="container">
            <AssetImage image={categoryImage} className="service-feature-image" />
          </div>
        </section>
      )}

      {/* Main Content */}
      <section className="section">
        <div className="container">
          <div className="service-content">
            {service.content?.intro && (
              <>
                <h2>Overview</h2>
                <p>{service.content.intro}</p>
              </>
            )}

            {service.content?.about && (
              <>
                <h2>About {service.name}</h2>
                <p>{service.content.about}</p>
              </>
            )}

            {service.content?.benefits && (
              <>
                <h2>Benefits</h2>
                <ul>
                  {service.content.benefits.map((b, i) => <li key={i}>{b}</li>)}
                </ul>
              </>
            )}

            {service.content?.features && (
              <>
                <h2>Key Features</h2>
                <ul>
                  {service.content.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
              </>
            )}

            {/* Why Choose Austratech */}
            <h2>Why Choose Austratech for {service.name}?</h2>
            <p>
              Austratech brings deep expertise and a results-driven approach to every {service.name.toLowerCase()} project.
              Our team combines technical knowledge with strategic thinking to deliver solutions that achieve
              your business objectives. We provide transparent communication, agile delivery, and ongoing
              support to ensure your success.
            </p>

            {/* Industries */}
            <h2>Industries We Serve</h2>
            <p>
              Our {service.name.toLowerCase()} services are tailored for businesses across diverse industries including
              e-commerce, healthcare, finance, education, technology, real estate, hospitality, and more.
              We understand the unique challenges and opportunities within each industry and deliver solutions accordingly.
            </p>
          </div>
        </div>
      </section>

      {/* Related Services */}
      {relatedServices.length > 0 && (
        <section className="section bg-light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">Related Services</span>
              <h2>Explore Related Services</h2>
            </div>
            <div className="related-services">
              {relatedServices.map((rs) => (
                <Link key={rs.slug} to={`/services/${rs.slug}/`} className="related-service-card">
                  <h4>{rs.icon} {rs.name}</h4>
                  <p>{rs.shortDescription}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Back to parent */}
      {parentCategory && (
        <section className="section">
          <div className="container text-center">
            <p>This service is part of our <Link to={`/services/${parentCategory.slug}/`} style={{ fontWeight: 600 }}>{parentCategory.name}</Link> offerings.</p>
            <Link to={`/services/${parentCategory.slug}/`} className="btn btn-secondary" style={{ marginTop: 'var(--space-4)' }}>
              ← View All {parentCategory.name} Services
            </Link>
          </div>
        </section>
      )}

      {/* FAQ */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="section bg-light">
          <div className="container">
            <div className="section-header">
              <span className="section-label">FAQ</span>
              <h2>Frequently Asked Questions</h2>
            </div>
            <FAQ faqs={service.faqs} />
          </div>
        </section>
      )}

      <CTASection
        title={`Get Started with ${service.name}`}
        description={`Contact Austratech today to discuss your ${service.name.toLowerCase()} requirements.`}
      />
    </>
  );
};

export default ServiceDetailPage;
