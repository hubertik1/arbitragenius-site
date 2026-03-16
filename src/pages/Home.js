import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import Seo from '../components/Seo';
import ScreenshotCarousel from '../components/ScreenshotCarousel';

const tools = [
  {
    icon: '🎁',
    title: 'Bonus Optimizer',
    link: '/bonus-optimizer',
    tag: 'Free bets',
    description: 'Turn your free bets into up to an extra $80 per $100 with cleaner, faster stake optimization.'
  },
  {
    icon: '🤝',
    title: 'Arbitrage Calculator',
    link: '/arbitrage-calculator',
    tag: 'Guaranteed returns',
    description: 'Lock in consistent payouts across outcomes and see profit, ROI, and stake splits instantly.'
  },
  {
    icon: '📊',
    title: 'Margin Monitor',
    link: '/margin-monitor',
    tag: 'Market clarity',
    description: 'Reveal hidden bookmaker margins in seconds and quickly spot better-value markets.'
  }
];

const steps = [
  {
    number: '01',
    title: 'Input the odds',
    description: 'Add your lines, stake, or market setup exactly as you see them at the bookmaker.'
  },
  {
    number: '02',
    title: 'Run the calculation',
    description: 'The app instantly balances stake size, payout, and margin with no manual math.'
  },
  {
    number: '03',
    title: 'Act with confidence',
    description: 'Use clearer numbers to place the bet, compare books, or decide whether the edge is worth it.'
  }
];

const heroStats = [
  { value: '3 core tools', label: 'for bonuses, arbs, and margins' },
  { value: 'Real-time', label: 'calculations while odds are live' },
  { value: 'Up to $80', label: 'extra value per $100 free bet' }
];

const Home = () => (
  <>
    <Seo routePath="/" />
    <div className={styles.container}>
      <header className={styles.hero}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <span className={styles.eyebrow}>Smart betting toolkit</span>
            <h1 className={styles.title}>Unlock Risk-Free Betting Profits</h1>
            <p className={styles.subtitle}>
              Instantly optimize free bets, spot arbitrage gaps, and reveal bookmaker margins in one polished workflow.
            </p>
            <div className={styles.heroActions}>
              <a
                href="https://apps.apple.com/pl/app/arbitragenius/id6747199263"
                className={styles.ctaButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download the App
              </a>
              <a href="#screenshots" className={styles.ctaButtonSecondary}>
                See screenshots
              </a>
            </div>
            <p className={styles.heroNote}>
              Built for bettors who want cleaner numbers, quicker decisions, and a sharper edge.
            </p>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.previewCard}>
              <span className={styles.previewEyebrow}>Inside the app</span>
              <h2>Three tools, one simple flow.</h2>
              <ul className={styles.previewList}>
                <li>
                  <strong>Bonus Optimizer</strong>
                  <span>Capture more real cash value from every free bet.</span>
                </li>
                <li>
                  <strong>Arbitrage Calculator</strong>
                  <span>Balance stake sizes and payouts across any number of outcomes.</span>
                </li>
                <li>
                  <strong>Margin Monitor</strong>
                  <span>Check implied probabilities and bookmaker overround at a glance.</span>
                </li>
              </ul>
            </div>

            <div className={styles.metrics}>
              {heroStats.map((item) => (
                <div key={item.label} className={styles.metric}>
                  <span className={styles.metricValue}>{item.value}</span>
                  <span className={styles.metricLabel}>{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </header>

      <section className={styles.featuresSection}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>Toolkit</span>
            <h2>A focused feature set for every betting scenario.</h2>
          </div>
          <p>
            Move from free bets to arbs to margin checks without switching tools or second-guessing the math.
          </p>
        </div>

        <div className={styles.featureGrid}>
          {tools.map((tool) => (
            <Link key={tool.title} to={tool.link} className={styles.featureCard}>
              <span className={styles.icon}>{tool.icon}</span>
              <span className={styles.featureTag}>{tool.tag}</span>
              <h3>{tool.title}</h3>
              <p>{tool.description}</p>
            </Link>
          ))}
        </div>
      </section>

      <section className={styles.howItWorks}>
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>How it works</span>
            <h2>Fast enough for live markets, clear enough for careful bankroll management.</h2>
          </div>
        </div>

        <ol className={styles.stepGrid}>
          {steps.map((step) => (
            <li key={step.number} className={styles.stepCard}>
              <span className={styles.stepNumber}>{step.number}</span>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className={styles.screenshots} id="screenshots">
        <div className={styles.sectionHeader}>
          <div>
            <span className={styles.sectionEyebrow}>Preview</span>
            <h2>App screenshots</h2>
          </div>
          <p>See how each calculator turns complicated betting math into a fast, touch-friendly mobile flow.</p>
        </div>

        <ScreenshotCarousel
          items={[
            { title: 'Bonus Optimizer', link: '/bonus-optimizer', image: '/assets/bonus_ss.png', alt: 'Bonus Optimizer app screenshot' },
            { title: 'Arbitrage Calculator', link: '/arbitrage-calculator', image: '/assets/arbitrage_ss.png', alt: 'Arbitrage Calculator app screenshot' },
            { title: 'Margin Monitor', link: '/margin-monitor', image: '/assets/margin_ss.png', alt: 'Margin Monitor app screenshot' }
          ]}
        />
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaCard}>
          <div className={styles.ctaCopy}>
            <span className={styles.sectionEyebrow}>Get started</span>
            <h2>Ready to win smarter?</h2>
            <p>
              Download ArbitraGenius and keep your bonus, arbitrage, and margin calculations in one clean pocket toolkit.
            </p>
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
        </div>
      </section>
    </div>
  </>
);

export default Home;
