import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home } from '../pages/home';

const Gallery = React.lazy(() => import('../pages/gallery').then(module => ({ default: module.Gallery })));

export function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/gallery"
            element={
              <Suspense fallback={<div>Įkeliama...</div>}>
                <Gallery />
              </Suspense>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

