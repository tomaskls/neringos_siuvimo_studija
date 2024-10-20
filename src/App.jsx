import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';
import { Product } from '../pages/products';
import { Repairing } from '../pages/repair';
import { Sew } from '../pages/sewing';
import { Designing } from '../pages/design';
import { Pricing } from '../pages/prices';
import { Contacting } from '../pages/contacts';
import { Gallery } from '../pages/gallery';

export function App() {
  return (
    <>
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
    </>
  );
}

