import React from 'react';
import styles from './Calculator.module.css';
import Screenshot from '../components/Screenshot';

const BonusOptimizer = () => {
  return (
    <div className={styles.container}>
      <h1>Bonus Optimizer</h1>
      <p>Instantly convert free bets and sign-up promos into guaranteed profit by balancing stakes across all outcomes.</p>
      <Screenshot src="/assets/screenshot-bonus-optimizer.txt" />
    </div>
  );
};

export default BonusOptimizer;
