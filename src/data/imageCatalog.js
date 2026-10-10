import aiDataImage from '../assets/ai data solutions.jpg';
import brisbaneImage from '../assets/brisbane-queensland.jpg';
import cloudDevOpsImage from '../assets/cloud&devops.jpg';
import digitalMarketingImage from '../assets/digital-marketing.jpg';
import empoweringImage from '../assets/Empowering Businesses Through Technology.jpg';
import innovationImage from '../assets/innpvation-delivered.jpg';
import melbourneImage from '../assets/melbourne-victoria.jpg';
import mobileAppImage from '../assets/mobile app development.webp';
import ourLocationImage from '../assets/our-location.jpg';
import softwareImage from '../assets/software-development.jpg';
import sydneyImage from '../assets/sydney-new-south-wales.jpg';
import testingImage from '../assets/testing&quality assurance.jpg';
import uiUxImage from '../assets/ui ux product design.jpg';
import websiteDevelopmentImage from '../assets/website-development.jpg';
import perthImage from '../assets/western-austrelia.jpg';
import trustedPartnerImage from '../assets/Your Trusted Technology & Digital Marketing Partner.jpg';

const categoryImages = {
  'digital-marketing': {
    src: digitalMarketingImage,
    alt: 'Digital marketing analytics and search strategy on laptop screen',
    fit: 'cover',
  },
  'website-development': {
    src: websiteDevelopmentImage,
    alt: 'Website development services showing modern web engineering and design',
    fit: 'cover',
  },
  'mobile-app-development': {
    src: mobileAppImage,
    alt: 'Mobile application development interface and user features',
    fit: 'contain',
  },
  'software-development': {
    src: softwareImage,
    alt: 'Custom software development concept with developer working at computer',
    fit: 'contain',
  },
  'ai-data': {
    src: aiDataImage,
    alt: 'Artificial intelligence concept represented by a digital circuit and hand',
    fit: 'contain',
  },
  'cloud-devops': {
    src: cloudDevOpsImage,
    alt: 'Cloud infrastructure and DevOps lifecycle illustration',
    fit: 'contain',
  },
  'ui-ux': {
    src: uiUxImage,
    alt: 'Product design and user experience interface illustration',
    fit: 'contain',
  },
  'testing-quality-assurance': {
    src: testingImage,
    alt: 'Software testing and quality assurance verification illustration',
    fit: 'contain',
  },
};

const locationImages = {
  melbourne: {
    src: melbourneImage,
    alt: 'Melbourne city skyline along the Yarra River in Victoria',
    fit: 'cover',
  },
  sydney: {
    src: sydneyImage,
    alt: 'Sydney Harbour Bridge and harbour skyline in New South Wales',
    fit: 'cover',
  },
  brisbane: {
    src: brisbaneImage,
    alt: 'Brisbane city skyline along the riverfront in Queensland',
    fit: 'cover',
  },
  perth: {
    src: perthImage,
    alt: 'Perth city skyline in Western Australia',
    fit: 'cover',
  },
};

const pageImages = {
  'hero-innovation': {
    src: innovationImage,
    alt: 'Innovation delivered technology and digital marketing solutions graphic',
    fit: 'cover',
  },
  'trusted-partner': {
    src: trustedPartnerImage,
    alt: 'Your trusted technology and digital marketing partner visual',
    fit: 'cover',
  },
  'empowering-technology': {
    src: empoweringImage,
    alt: 'Empowering businesses through technology concept visual',
    fit: 'cover',
  },
  'our-locations': {
    src: ourLocationImage,
    alt: 'Austratech Australian locations map and office network',
    fit: 'cover',
  },
};

export const getCategoryImage = (categoryId) => categoryImages[categoryId] || null;

export const getLocationImage = (locationSlug) => locationImages[locationSlug] || null;

export const getPageImage = (imageKey) => pageImages[imageKey] || null;
