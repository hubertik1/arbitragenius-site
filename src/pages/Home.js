import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';

const Home = () => {
  return (
    <div className={styles.container}>
      <h1>ArbitraGenius Toolkit</h1>
      <ul>
        <li>
          <h2>Bonus Optimizer</h2>
          <p>Earn extra money from free bets and bonuses without the guesswork. Increase your winnings or withdraw your bonuses risk-free by instantly balancing stakes across all outcomes with a single tap.</p>
          <Link to="/bonus-optimizer">Learn More</Link>
        </li>
        <li>
          <h2>Arbitrage Calculator</h2>
          <p>Lock in risk-free profits from bookmaker odds gaps in seconds. Enter odds from two or more sportsbooks and let our engine balance stakes across all outcomes—turn every price discrepancy into guaranteed extra cash with zero exposure.</p>
          <Link to="/arbitrage-calculator">Learn More</Link>
        </li>
        <li>
          <h2>Margin Monitor</h2>
          <p>Discover hidden bookmaker markups and rare negative margins in seconds to know exactly when the odds tilt in your favor.</p>
          <Link to="/margin-checker">Learn More</Link>
        </li>
      </ul>
    </div>
  );
};

export default Home;
