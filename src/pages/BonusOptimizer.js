import React from 'react';
import styles from './Calculator.module.css';
import Screenshot from '../components/Screenshot';

const BonusOptimizer = () => (
  <div className={styles.container}>
    <div className={styles.layout}>
      <div className={styles.text}>
        <h1>Bonus Optimizer</h1>
        <p className={styles.intro}>
          Do you ever get those “free bet” bonuses only to watch your stake quietly vanish from your winnings? Stop letting valuable freebets go to waste, our Bonus Optimizer is built just for you. It’s the risk-free way to turn every dollar of freebet credit into real profit or supercharge your potential payout.
        </p>
        <ul className={styles.features}>
          <li>
            <strong>Maximize your cash-in.</strong> Automatically allocate your freebet credit across the highest-value odds so every dollar works harder, turning every freebet into the largest possible real-cash return.
          </li>
          <li>
            <strong>Lock in risk-free profit.</strong> Split your stake intelligently so that, win or lose, you walk away with guaranteed earnings, no more watching your bonus evaporate.
          </li>
          <li>
            <strong>Boost your ROI.</strong> Our real-time preview shows exactly how much money you can gain by using the Bonus Optimizer.
          </li>
        </ul>
        <p className={styles.cta}>
          Best of all, you could pocket <strong>up to an extra $80 for every $100 freebet</strong> you play. Ready to make the most of your bonuses? <a href="https://appstore.com">Download the App now</a> and start winning smarter.
        </p>
      </div>
      <div className={styles.image}>
        <Screenshot className={styles.screenshot} src="/assets/bonus_ss.png" />
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

export default BonusOptimizer;