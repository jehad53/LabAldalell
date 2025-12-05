import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from './components/layout/Layout';
import ScrollToTop from './components/layout/ScrollToTop';
import Home from './pages/Home';

import About from './pages/About';
import Services from './pages/Services';
import Tests from './pages/Tests';

import Book from './pages/Book';
import Results from './pages/Results';
import Contact from './pages/Contact';
import Physicians from './pages/Physicians';

// Placeholder components for other pages

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ScrollToTop />
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/tests" element={<Tests />} />
            <Route path="/book" element={<Book />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/results" element={<Results />} />
            <Route path="/physicians" element={<Physicians />} />
          </Routes>
        </Layout>
      </Router>
    </HelmetProvider>
  );
}

export default App;
