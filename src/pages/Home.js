import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import ScreenshotCarousel from '../components/ScreenshotCarousel';

const Home = () => (
  <div className={styles.container}>
    <header className={styles.hero}>
      <h1 className={styles.title}>Unlock Risk-Free Betting Profits</h1>
      <p className={styles.subtitle}>
        Instantly optimize free bets, spot arbitrage gaps, and reveal bookmaker margins-all in one toolkit.
      </p>
      <a
        href="https://apps.apple.com/pl/app/arbitragenius/id6747199263"
        className={styles.ctaButton}
        target="_blank"
        rel="noopener noreferrer"
      >
        Download the App
      </a>
    </header>

    <section className={styles.featuresSection}>
      <div className={styles.feature}>
        <span className={styles.icon}>🎁</span>
        <h2><Link to="/bonus-optimizer" className={styles.featureLink}>Bonus Optimizer</Link></h2>
        <p>Turn your free bets into up to extra $80 per $100.</p>
      </div>
      <div className={styles.feature}>
        <span className={styles.icon}>🤝</span>
        <h2><Link to="/arbitrage-calculator" className={styles.featureLink}>Arbitrage Calculator</Link></h2>
        <p>Lock in guaranteed profit on every market gap.</p>
      </div>
      <div className={styles.feature}>
        <span className={styles.icon}>📊</span>
        <h2><Link to="/margin-monitor" className={styles.featureLink}>Margin Monitor</Link></h2>
        <p>Reveal hidden bookmaker margins in seconds.</p>
      </div>
    </section>

    <section className={styles.howItWorks}>
      <h2>How It Works</h2>
      <ol>
        <li><strong>Input.</strong> Enter odds and stake.</li>
        <li><strong>Calculate.</strong> Our engine optimizes stakes or margins.</li>
        <li><strong>Profit.</strong> View guaranteed returns.</li>
      </ol>
    </section>

    <section className={styles.screenshots}>
      <h2>App Screenshots</h2>
      <ScreenshotCarousel
        items={[
          { title: 'Bonus Optimizer', link: '/bonus-optimizer', image: '/assets/bonus_ss.png', alt: 'Bonus Optimizer' },
          { title: 'Arbitrage Calculator', link: '/arbitrage-calculator', image: '/assets/arbitrage_ss.png', alt: 'Arbitrage Calculator' },
          { title: 'Margin Monitor', link: '/margin-monitor', image: '/assets/margin_ss.png', alt: 'Margin Monitor' }
        ]}
      />
    </section>

    <section className={styles.ctaSection}>
      <h2>Ready to Win Smarter?</h2>
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
    </section>
  </div>
);

export default Home;