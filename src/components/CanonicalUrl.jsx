import { Helmet } from "react-helmet-async"; 

const CanonicalUrl = () => {
 const canonicalUrl = 'https://www.neringos-siuvimo-studija.lt';

 return (
   <Helmet>
     <link rel="canonical" href={canonicalUrl} />
     {[
       'http://neringos-siuvimo-studija.lt',
       'https://neringos-siuvimo-studija.lt',
       'http://www.neringos-siuvimo-studija.lt',
       'http://neringossiuvimostudija.lt',
       'https://neringossiuvimostudija.lt',
       'http://www.neringossiuvimostudija.lt',
       'https://www.neringossiuvimostudija.lt',
       'https://siuvimo-studija-3.vercel.app'
     ].map((url) => (
       <link key={url} rel="alternate" href={url} />
     ))}
   </Helmet>
 );
};

export default CanonicalUrl;