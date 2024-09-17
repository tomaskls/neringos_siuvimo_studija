import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Gallery } from "../pages/gallery"
import { Home } from "../pages/home"

export function App() {
  return (


    <>
      <Router>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/gallery" element={<Gallery />} />
        </Routes>
      </Router>
    </>
  )
}

