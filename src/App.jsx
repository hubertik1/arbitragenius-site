import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Home from './routes/Home';
import BonusOptimizer from './routes/BonusOptimizer';
import ArbitrageCalculator from './routes/ArbitrageCalculator';
import MarginChecker from './routes/MarginChecker';
import Contact from './routes/Contact';
import Legal from './routes/Legal';
import NotFound from './routes/NotFound';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <HelmetProvider>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bonus-optimizer" element={<BonusOptimizer />} />
        <Route path="/arbitrage-calculator" element={<ArbitrageCalculator />} />
        <Route path="/margin-checker" element={<MarginChecker />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/legal" element={<Legal />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </HelmetProvider>
  );
}
