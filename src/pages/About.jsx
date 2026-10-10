import { Link } from 'react-router-dom';
import CTASection from '../components/CTASection';
import SEOHead from '../components/SEOHead';
import AssetImage from '../components/AssetImage';
import { getPageImage } from '../data/imageCatalog';

const About = () => {
  const values = [
    { icon: '🎯', title: 'Excellence', description: 'We strive for excellence in every project, delivering high-quality solutions that exceed expectations.' },
    { icon: '🤝', title: 'Integrity', description: 'We operate with transparency and honesty, building trust through ethical business practices.' },
    { icon: '💡', title: 'Innovation', description: 'We embrace new technologies and creative thinking to deliver forward-looking solutions.' },
    { icon: '👥', title: 'Collaboration', description: 'We work closely with our clients, treating every project as a true partnership.' },
    { icon: '📊', title: 'Results', description: 'We focus on measurable outcomes that drive real business value and growth.' },
    { icon: '🌱', title: 'Growth', description: 'We are committed to continuous learning and helping our clients grow their businesses.' }
  ];

  const empoweringImg = getPageImage('empowering-technology');

  return (
    <>
      <SEOHead
        title="About Austratech | Technology & Digital Marketing Company Australia"
        description="Learn about Austratech, an Australian technology and digital marketing company helping businesses grow through innovative digital solutions."
        canonical="/about/"
      />

      <div className="page-header">
        <div className="container">
          <h1>About Austratech</h1>
          <p>An Australian technology and digital marketing company dedicated to helping businesses succeed in the digital age.</p>
        </div>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container">
          <div className="about-story">
            <div>
              <span className="section-label">Our Story</span>
              <h2>Building Digital Success Stories</h2>
              <p>
                Austratech was founded with a clear mission: to help Australian businesses harness the power of
                technology and digital marketing to achieve their goals. We recognised that many businesses struggle
                to navigate the complex and ever-changing digital landscape, and we set out to be the trusted partner
                they need.
              </p>
              <p>
                Today, Austratech offers a comprehensive suite of digital services spanning digital marketing,
                website development, mobile app development, custom software development, AI and data solutions,
                cloud and DevOps services, UI/UX design, and software testing. We serve businesses across Melbourne,
                Sydney, Brisbane, Perth, and throughout Australia.
              </p>
              <p>
                Our team is made up of skilled professionals who are passionate about technology and committed
                to delivering results. We combine technical expertise with strategic thinking to create solutions
                that not only look great but also drive measurable business outcomes.
              </p>
            </div>
            <div className="about-visual">
              <div className="big-icon">🇦🇺</div>
              <h3>Australian Owned & Operated</h3>
              <p>Proudly serving businesses across Australia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Mission</span>
            <h2>Empowering Businesses Through Technology</h2>
            <p>
              Our mission is to empower Australian businesses with innovative, effective, and accessible digital solutions
              that drive growth, efficiency, and competitive advantage. We believe every business deserves access to
              world-class technology and digital marketing expertise.
            </p>
          </div>
          {empoweringImg && (
            <div className="about-mission-image-wrapper">
              <AssetImage image={empoweringImg} className="about-mission-image" loading="lazy" />
            </div>
          )}
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <span className="section-label">Our Values</span>
            <h2>What We Stand For</h2>
            <p>Our core values guide everything we do, from how we build solutions to how we treat our clients and each other.</p>
          </div>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="section bg-light">
        <div className="container">
          <div className="section-header">
            <span className="section-label">What We Do</span>
            <h2>Our Service Areas</h2>
            <p>We offer a comprehensive range of digital services to meet all your technology and marketing needs.</p>
          </div>
          <div className="grid-2">
            <div className="card">
              <h3>📈 Digital Marketing</h3>
              <p>SEO, PPC, social media marketing, content marketing, and email marketing services to grow your online presence and generate leads.</p>
              <Link to="/services/digital-marketing-agency-australia/" className="card-link">Explore Digital Marketing <span>→</span></Link>
            </div>
            <div className="card">
              <h3>🌐 Website Development</h3>
              <p>Custom website development, WordPress, Shopify, e-commerce, and responsive web design for businesses of all sizes.</p>
              <Link to="/services/website-development-company-australia/" className="card-link">Explore Web Development <span>→</span></Link>
            </div>
            <div className="card">
              <h3>📱 Mobile App Development</h3>
              <p>iOS, Android, Flutter, and React Native app development for innovative mobile experiences.</p>
              <Link to="/services/mobile-app-development-company-australia/" className="card-link">Explore App Development <span>→</span></Link>
            </div>
            <div className="card">
              <h3>⚡ Software Development</h3>
              <p>Custom software, SaaS, CRM, ERP, and web application development tailored to your business needs.</p>
              <Link to="/services/custom-software-development-company-australia/" className="card-link">Explore Software Dev <span>→</span></Link>
            </div>
            <div className="card">
              <h3>🤖 AI & Data Solutions</h3>
              <p>AI consulting, machine learning, chatbots, data analytics, and business intelligence solutions.</p>
              <Link to="/services/ai-development-services-australia/" className="card-link">Explore AI Solutions <span>→</span></Link>
            </div>
            <div className="card">
              <h3>☁️ Cloud & DevOps</h3>
              <p>Azure consulting, cloud migration, DevOps, infrastructure management, and cloud security services.</p>
              <Link to="/services/cloud-consulting-services-australia/" className="card-link">Explore Cloud Services <span>→</span></Link>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Work With Us?"
        description="Contact Austratech today and let us help you achieve your digital goals."
      />
    </>
  );
};

export default About;
