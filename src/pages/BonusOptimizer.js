import React from 'react';
import styles from './Calculator.module.css';
import Seo from '../components/Seo';
import Screenshot from '../components/Screenshot';

const BonusOptimizer = () => (
  <>
    <Seo routePath="/bonus-optimizer" />
    <div className={styles.container}>
      <div className={styles.layout}>
        <section className={styles.textPanel}>
          <span className={styles.eyebrow}>Free bets</span>
          <h1 className={styles.title}>Bonus Optimizer</h1>
          <p className={styles.intro}>
            Do you ever get those “free bet” bonuses only to watch your stake quietly vanish from your winnings? Stop letting valuable free bets go to waste. Our Bonus Optimizer is built to turn every dollar of free-bet credit into real profit or a stronger payout.
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
            Best of all, you could pocket <strong>up to an extra $80 for every $100 freebet</strong> you play. Ready to make the most of your bonuses? <a href="https://apps.apple.com/pl/app/arbitragenius/id6747199263">Download the App now</a> and start winning smarter.
          </p>
        </section>
        <aside className={styles.imagePanel}>
          <div className={styles.previewFrame}>
            <Screenshot className={styles.screenshot} src="/assets/bonus_ss.webp" alt="Bonus Optimizer screenshot" />
          </div>
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
        </aside>
      </div>
    </div>
  </>
);

export default BonusOptimizer;
