import React from 'react';
import styles from './Calculator.module.css';
import Screenshot from '../components/Screenshot';

const BonusOptimizer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.text}>
          <h1>Bonus Optimizer</h1>
          <p>Instantly convert free bets and sign-up promos into guaranteed profit by balancing stakes across all outcomes.</p>
        </div>
        <div className={styles.image}>
          <Screenshot className={styles.scaledImage} src="/assets/bonus_ss.png" />
        </div>
      </div>
    </div>
  );
};

export default BonusOptimizer;