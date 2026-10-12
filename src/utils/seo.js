// SEO utility functions

import logoAustratech from '../assets/logo-austratech.jpeg';

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  'name': 'Austratech',
  'url': 'https://austratech.com.au',
  'logo': new URL(logoAustratech, 'https://austratech.com.au').href,
  'description': 'Austratech is a technology and digital marketing company based in Australia, delivering innovative digital solutions including web development, app development, digital marketing, AI solutions, and cloud services.',
  'address': {
    '@type': 'PostalAddress',
    'addressCountry': 'AU'
  },
  'contactPoint': {
    '@type': 'ContactPoint',
    'telephone': '+61-1300-000-000',
    'contactType': 'customer service',
    'areaServed': 'AU',
    'availableLanguage': 'English'
  },
  'sameAs': [
    'https://www.linkedin.com/company/austratech',
    'https://twitter.com/austratech',
    'https://www.facebook.com/austratech'
  ]
};

export const createServiceSchema = (service) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    'name': service.name || service.metaTitle,
    'description': service.shortDescription || service.metaDescription,
    'provider': {
      '@type': 'Organization',
      'name': 'Austratech',
      'url': 'https://austratech.com.au'
    },
    'areaServed': {
      '@type': 'Country',
      'name': 'Australia'
    },
    'serviceType': service.name
  };
};

export const createLocalBusinessSchema = (location) => {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    'name': `Austratech ${location.name}`,
    '@id': `https://austratech.com.au/locations/${location.slug}/`,
    'url': `https://austratech.com.au/locations/${location.slug}/`,
    'description': location.description,
    'address': {
      '@type': 'PostalAddress',
      'addressLocality': location.name,
      'addressRegion': location.state,
      'addressCountry': 'AU'
    },
    'geo': {},
    'parentOrganization': {
      '@type': 'Organization',
      'name': 'Austratech',
      'url': 'https://austratech.com.au'
    }
  };
};
