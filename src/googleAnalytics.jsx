import { useEffect } from 'react';

const GOOGLE_ANALYTICS_ID = 'G-1HRYBXDSTR';

function GoogleAnalytics() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://www.googletagmanager.com/gtag/js?id=G-1HRYBXDSTR";
    script.async = true;

    script.onload = () => { 
      window.dataLayer = window.dataLayer || [];
      function gtag(){window.dataLayer.push(arguments);} 
      gtag('js', new Date());
      gtag('config', GOOGLE_ANALYTICS_ID);
    };

    document.head.appendChild(script);
  }, []);

  return null;
}

export default GoogleAnalytics;
