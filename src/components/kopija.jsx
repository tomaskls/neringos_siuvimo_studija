import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
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
            <Route path="/product" element={<Navigate to="/flisiniai-dzemperiai" replace state={{from: '/product'}} />} />
            <Route path="/flisiniai-dzemperiai" element={<Product />} />
            <Route path="/repair" element={<Navigate to="/drabuziu-taisymas" replace state={{from: '/repair'}} />} />
            <Route path="/drabuziu-taisymas" element={<Repairing />} />
            <Route path="/sewing" element={<Navigate to="/siuvykla" replace state={{from: '/sewing'}} />} />
            <Route path="/siuvykla" element={<Sew />} />
            <Route path="/design" element={<Designing />} />
            <Route path="/prices" element={<Navigate to="/drabuziu-taisymo-kainos" replace state={{from: '/prices'}} />} />
            <Route path="/drabuziu-taisymo-kainos" element={<Pricing />} />
            <Route path="/contacts" element={<Navigate to="/kontaktai" replace state={{from: '/contacts'}} />} />
            <Route path="/kontaktai" element={<Contacting />} />
            <Route path="/gallery" element={<Gallery />
            } />
          </Routes>
        </Router>
      </HelmetProvider>
    </>
  );
}

