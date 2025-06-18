import React from 'react';
import styles from './Calculator.module.css';

const MarginChecker = () => {
  return (
    <div className={styles.container}>
      <h1>Margin Checker</h1>
      <p>Expose a bookmaker margin, or a rare negative margin, at a glance to know when odds are truly in your favor.</p>
      <a href="/assets/margin_ss.png" target="_blank" rel="noopener noreferrer">View Screenshot</a>
    </div>
  );
};

export default MarginChecker;
