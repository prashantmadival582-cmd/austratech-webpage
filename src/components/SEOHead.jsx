import { Helmet } from 'react-helmet-async';

const SEOHead = ({
  title,
  description,
  canonical,
  keywords,
  ogType = 'website',
  ogImage,
  noindex = false
}) => {
  const siteUrl = 'https://austratech.com.au';
  const fullCanonical = canonical ? `${siteUrl}${canonical}` : undefined;
  const fullTitle = title ? `${title}` : 'Austratech | Technology & Digital Marketing Company Australia';

  return (
    <Helmet>
      <title>{fullTitle}</title>
      {description && <meta name="description" content={description} />}
      {keywords && <meta name="keywords" content={keywords.join(', ')} />}
      {fullCanonical && <link rel="canonical" href={fullCanonical} />}
      {noindex && <meta name="robots" content="noindex, nofollow" />}

      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      {description && <meta property="og:description" content={description} />}
      <meta property="og:type" content={ogType} />
      {fullCanonical && <meta property="og:url" content={fullCanonical} />}
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta property="og:site_name" content="Austratech" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      {description && <meta name="twitter:description" content={description} />}
    </Helmet>
  );
};

export default SEOHead;
