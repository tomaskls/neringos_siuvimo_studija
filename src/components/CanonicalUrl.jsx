import { Helmet } from "react-helmet-async";
import { useLocation } from 'react-router-dom';

const CanonicalUrl = () => {
  const location = useLocation();
  let canonicalUrl = `https://www.neringos-siuvimo-studija.lt`; 

  if (location.pathname !== '/') { 
    canonicalUrl += location.pathname;
  }

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
    </Helmet>
  );
};

export default CanonicalUrl;