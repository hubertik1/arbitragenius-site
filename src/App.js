import React from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BonusOptimizer from './pages/BonusOptimizer';
import ArbitrageCalculator from './pages/ArbitrageCalculator';
import MarginMonitor from './pages/MarginMonitor';
import Contact from './pages/Contact';
import PrivacyPolicy from './pages/PrivacyPolicy';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <main className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bonus-optimizer" element={<BonusOptimizer />} />
            <Route path="/arbitrage-calculator" element={<ArbitrageCalculator />} />
            <Route path="/margin-monitor" element={<MarginMonitor />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<Navigate to="/404" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
