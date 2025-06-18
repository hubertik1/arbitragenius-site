import React from 'react';
import styles from './Calculator.module.css';

const ArbitrageCalculator = () => {
  return (
    <div className={styles.container}>
      <h1>Arbitrage Calculator</h1>
      <p>Spot sure bets on two-way or three-way markets and see ROI before you place a single wager.</p>
      <a href="/assets/arbitrage_ss.png" target="_blank" rel="noopener noreferrer">View Screenshot</a>
    </div>
  );
};

export default ArbitrageCalculator;
