import React from 'react';
import styles from './Calculator.module.css';
import Screenshot from '../components/Screenshot';

const ArbitrageCalculator = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.text}>
          <h1>Arbitrage Calculator</h1>
          <p>Spot sure bets on two-way or three-way markets and see ROI before you place a single wager.</p>
        </div>
        <div className={styles.image}>
          <Screenshot className={styles.scaledImage} src="/assets/arbitrage_ss.png" />
          <img
            src="/assets/App_Store.svg"
            alt="Download on the App Store"
            className={styles.storeBadge}
          />
        </div>
      </div>
    </div>
  );
};

export default ArbitrageCalculator;