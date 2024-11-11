import { Helmet } from 'react-helmet';

const CanonicalUrl = () => {
  const canonicalUrl = 'https://www.neringos-siuvimo-studija.lt';
  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      {[
        'http://www.neringos-siuvimo-studija.lt',
        'http://www.neringossiuvimostudija.lt',
        'https://www.neringossiuvimostudija.lt'
      ].map((url) => (
        <link key={url} rel="alternate" href={url} />
      ))}
    </Helmet>
  );
};

export default CanonicalUrl;