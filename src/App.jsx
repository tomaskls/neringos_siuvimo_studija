import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Home } from '../pages/home';
import { Product } from '../pages/products';
import { Repairing } from '../pages/repair';
import { Sew } from '../pages/sewing';
import { Designing } from '../pages/design';
import { Pricing } from '../pages/prices';
import { Contacting } from '../pages/contacts';
import { Gallery } from '../pages/gallery';
import GoogleAnalytics from './googleAnalytics';
import CanonicalUrl from './components/CanonicalUrl';

export function App() {
  return (
    <>
      <HelmetProvider>
        <GoogleAnalytics />
        <CanonicalUrl />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/repair" element={<Repairing />} />
            <Route path="/sewing" element={<Sew />} />
            <Route path="/design" element={<Designing />} />
            <Route path="/prices" element={<Pricing />} />
            <Route path="/contacts" element={<Contacting />} />
            <Route path="/gallery" element={<Gallery />
            } />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

