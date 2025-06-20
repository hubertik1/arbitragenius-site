import React from 'react';
import styles from './Calculator.module.css';
import Screenshot from '../components/Screenshot';

const MarginMonitor = () => (
  <div className={styles.container}>
    <div className={styles.layout}>
      <div className={styles.text}>
        <h1>Margin Monitor</h1>
        <p className={styles.intro}>
          Instantly reveal the bookmaker’s built-in margin and spot rare negative margins, so you always know when the odds are stacked in your favor.
        </p>
        <ul className={styles.features}>
          <li>
            <strong>Calculate market edge.</strong> Enter any number of odds and see the implied margin computed in real time, no manual formulas required.
          </li>
          <li>
            <strong>View implied probabilities.</strong> Instantly convert your entered odds into percentage chances so you know exactly how likely each outcome is.
          </li>
          <li>
            <strong>Select your market format.</strong> Toggle between 2-way and 3-way scenarios to analyze the exact market you want.
          </li>
        </ul>
        <p className={styles.cta}>
          Ready to find favorable odds on the fly? <a href="https://appstore.com">Download the App now</a> and start spotting margins in your favor.
        </p>
      </div>
      <div className={styles.image}>
        <Screenshot className={styles.screenshot} src="/assets/margin_ss.png" />
        <a
          href="https://appstore.com"
          target="_blank"
          rel="noopener noreferrer"
          className={styles.storeBadge}
        >
          <img
            src="/assets/App_Store.svg"
            alt="Download on the App Store"
          />
        </a>
      </div>
    </div>
  </div>
);

export default MarginMonitor;