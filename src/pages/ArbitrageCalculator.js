import React from 'react';
import styles from './Calculator.module.css';
import Screenshot from '../components/Screenshot';

const ArbitrageCalculator = () => (
  <div className={styles.container}>
    <div className={styles.layout}>
      <div className={styles.text}>
        <h1>Arbitrage Calculator</h1>
        <p className={styles.intro}>
          Discover guaranteed profit opportunities across any number of betting outcomes. Our Arbitrage Calculator instantly shows you exactly how to split your stake so you lock in the same payout regardless of which option wins.
        </p>
        <ul className={styles.features}>
          <li>
            <strong>Identify guaranteed wins.</strong> Enter the odds and total stake, and we’ll split your bets perfectly-so every outcome returns the same payout.
          </li>
          <li>
            <strong>Maximize your ROI.</strong> See your total payout, profit, and ROI update in real time, so you know exactly how much you’re making on every arb.
          </li>
          <li>
            <strong>Support for unlimited outcomes.</strong> Whether there are two options or ten, our calculator handles every scenario-no manual math, no mistakes.
          </li>
        </ul>
        <p className={styles.cta}>
          Ready to start winning with confidence? <a href="https://apps.apple.com/pl/app/arbitragenius/id6747199263">Download the App now</a> and turn every opportunity into guaranteed profit.
        </p>
      </div>
      <div className={styles.image}>
        <Screenshot className={styles.screenshot} src="/assets/arbitrage_ss.png" />
        <a
          href="https://apps.apple.com/pl/app/arbitragenius/id6747199263"
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

export default ArbitrageCalculator;