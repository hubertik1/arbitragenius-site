import React from 'react';
import styles from './Calculator.module.css';
import Screenshot from '../components/Screenshot';

const MarginMonitor = () => {
  return (
    <div className={styles.container}>
      <div className={styles.layout}>
        <div className={styles.text}>
          <h1>Margin Checker</h1>
          <p>Expose a bookmaker margin, or a rare negative margin, at a glance to know when odds are truly in your favor.</p>
        </div>
        <div className={styles.image}>
          <Screenshot className={styles.scaledImage} src="/assets/margin_ss.png" />
        </div>
      </div>
    </div>
  );
};

export default MarginMonitor;