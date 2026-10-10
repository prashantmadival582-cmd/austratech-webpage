import { Helmet } from 'react-helmet-async';

const Breadcrumbs = ({ items }) => {
  if (!items || items.length === 0) return null;

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': items.map((item, index) => ({
      '@type': 'ListItem',
      'position': index + 1,
      'name': item.label,
      'item': item.path ? `https://austratech.com.au${item.path}` : undefined
    }))
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
    </Helmet>
  );
};

export default Breadcrumbs;
