import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>ArbitraGenius Calculators</h1>
      <ul>
        <li>
          <h2>Bonus Optimizer</h2>
          <p>Instantly convert free bets and sign-up promos into guaranteed profit by balancing stakes across all outcomes.</p>
          <Link to="/bonus-optimizer">Learn More</Link>
        </li>
        <li>
          <h2>Arbitrage Calculator</h2>
          <p>Spot sure bets on two-way or three-way markets and see ROI before you place a single wager.</p>
          <Link to="/arbitrage-calculator">Learn More</Link>
        </li>
        <li>
          <h2>Margin Checker</h2>
          <p>Expose a bookmaker margin, or a rare negative margin, at a glance to know when odds are truly in your favor.</p>
          <Link to="/margin-checker">Learn More</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
