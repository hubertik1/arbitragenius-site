import React from 'react';
import styles from './Calculator.module.css';
import Screenshot from '../components/Screenshot';

const ArbitrageCalculator = () => {
  return (
    <div className={styles.container}>
      <h1>Arbitrage Calculator</h1>
      <p>Spot sure bets on two-way or three-way markets and see ROI before you place a single wager.</p>
      <Screenshot src="/assets/screenshot-arbitrage-calculator.txt" />
    </div>
  );
};

export default ArbitrageCalculator;
