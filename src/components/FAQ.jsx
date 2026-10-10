import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const FAQ = ({ faqs, showSchema = true }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    'mainEntity': faqs.map(faq => ({
      '@type': 'Question',
      'name': faq.question,
      'acceptedAnswer': {
        '@type': 'Answer',
        'text': faq.answer
      }
    }))
  };

  return (
    <div className="faq-section">
      {showSchema && (
        <Helmet>
          <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
        </Helmet>
      )}
      {faqs.map((faq, index) => (
        <div key={index} className="faq-item">
          <button
            className="faq-question"
            onClick={() => toggle(index)}
            aria-expanded={openIndex === index}
          >
            <span>{faq.question}</span>
            <span className={`faq-icon ${openIndex === index ? 'open' : ''}`}>+</span>
          </button>
          <div className={`faq-answer ${openIndex === index ? 'open' : ''}`}>
            <p>{faq.answer}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
