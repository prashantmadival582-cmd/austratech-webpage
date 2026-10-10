import { useState } from 'react';
import SEOHead from '../components/SEOHead';
import AssetImage from '../components/AssetImage';
import { serviceCategories } from '../data/services';
import { getPageImage } from '../data/imageCatalog';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', service: '', message: ''
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const locationImage = getPageImage('our-locations');

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = 'Name is required';
    if (!formData.email.trim()) errs.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) errs.email = 'Please enter a valid email';
    if (!formData.message.trim()) errs.message = 'Message is required';
    if (formData.phone && !/^[+]?[\d\s()-]{7,15}$/.test(formData.phone)) errs.phone = 'Please enter a valid phone number';
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length === 0) {
      setSubmitted(true);
    }
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  return (
    <>
      <SEOHead
        title="Contact Us | Austratech"
        description="Contact Austratech for digital marketing, web development, app development, and technology solutions. Get a free consultation today."
        canonical="/contact/"
      />

      <div className="page-header contact-page-header">
        <div className="container">
          <span className="section-label section-label-light">Let’s Talk</span>
          <h1>Contact Us</h1>
          <p>Get in touch with Austratech to discuss your project or request a free consultation.</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2>Get In Touch</h2>
              <p style={{ marginBottom: 'var(--space-8)' }}>Whether you have a question about our services, need a consultation, or want to discuss a project, we are here to help.</p>

              <div className="contact-info-cards">
                <div className="contact-info-card">
                  <div className="contact-icon">📧</div>
                  <div>
                    <h4>Email Us</h4>
                    <p><a href="mailto:info@austratech.com.au">info@austratech.com.au</a></p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-icon">📞</div>
                  <div>
                    <h4>Call Us</h4>
                    <p><a href="tel:+611300000000">1300 000 000</a></p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-icon">📍</div>
                  <div>
                    <h4>Locations</h4>
                    <p>Melbourne • Sydney • Brisbane • Perth</p>
                  </div>
                </div>
                <div className="contact-info-card">
                  <div className="contact-icon">💬</div>
                  <div>
                    <h4>WhatsApp</h4>
                    <p><a href="https://wa.me/611300000000" target="_blank" rel="noopener noreferrer">Chat on WhatsApp</a></p>
                  </div>
                </div>
              </div>

              {locationImage && (
                <AssetImage image={locationImage} className="contact-location-image" loading="lazy" />
              )}
            </div>

            <div className="contact-form-wrapper">
              {submitted ? (
                <div className="form-success">
                  <h3>✅ Thank You!</h3>
                  <p>Your message has been received. This is a frontend-only form — no message has been sent to a server. When a backend is connected, your enquiry will be delivered to our team.</p>
                  <button className="btn btn-primary" style={{ marginTop: 'var(--space-4)' }} onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', phone: '', service: '', message: '' }); }}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h3 style={{ marginBottom: 'var(--space-6)' }}>Send Us a Message</h3>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="name">Full Name *</label>
                      <input type="text" id="name" name="name" className={`form-input ${errors.name ? 'error' : ''}`} value={formData.name} onChange={handleChange} placeholder="Your full name" />
                      {errors.name && <div className="form-error">{errors.name}</div>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="email">Email Address *</label>
                      <input type="email" id="email" name="email" className={`form-input ${errors.email ? 'error' : ''}`} value={formData.email} onChange={handleChange} placeholder="your@email.com" />
                      {errors.email && <div className="form-error">{errors.email}</div>}
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group">
                      <label className="form-label" htmlFor="phone">Phone Number</label>
                      <input type="tel" id="phone" name="phone" className={`form-input ${errors.phone ? 'error' : ''}`} value={formData.phone} onChange={handleChange} placeholder="+61 400 000 000" />
                      {errors.phone && <div className="form-error">{errors.phone}</div>}
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="service">Service Interest</label>
                      <select id="service" name="service" className="form-select" value={formData.service} onChange={handleChange}>
                        <option value="">Select a service</option>
                        {serviceCategories.map(cat => (
                          <option key={cat.id} value={cat.name}>{cat.name}</option>
                        ))}
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="message">Your Message *</label>
                    <textarea id="message" name="message" className={`form-textarea ${errors.message ? 'error' : ''}`} value={formData.message} onChange={handleChange} placeholder="Tell us about your project or requirements..." rows="5"></textarea>
                    {errors.message && <div className="form-error">{errors.message}</div>}
                  </div>
                  <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%' }}>Send Message</button>
                  <p style={{ fontSize: 'var(--text-sm)', color: 'var(--text-tertiary)', marginTop: 'var(--space-3)', textAlign: 'center' }}>This is a frontend-only form. Backend integration required for message delivery.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
