import React from 'react';
import styles from './Calculator.module.css';
import Screenshot from '../components/Screenshot';

const MarginChecker = () => {
  return (
    <div className={styles.container}>
      <h1>Margin Checker</h1>
      <p>Expose a bookmaker margin, or a rare negative margin, at a glance to know when odds are truly in your favor.</p>
      <Screenshot src="/assets/screenshot-margin-checker.txt" />
    </div>
  );
};

export default MarginChecker;
