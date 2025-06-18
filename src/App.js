import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import styles from './App.module.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BonusOptimizer from './pages/BonusOptimizer';
import ArbitrageCalculator from './pages/ArbitrageCalculator';
import MarginChecker from './pages/MarginChecker';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className={styles.app}>
        <Navbar />
        <div className={styles.content}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/bonus-optimizer" element={<BonusOptimizer />} />
            <Route path="/arbitrage-calculator" element={<ArbitrageCalculator />} />
            <Route path="/margin-checker" element={<MarginChecker />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
