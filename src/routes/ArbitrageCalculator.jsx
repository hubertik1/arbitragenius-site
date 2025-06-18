import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Button from '../components/Button';

export default function ArbitrageCalculator() {
  return (
    <main>
      <Helmet>
        <title>Arbitrage Calculator - ArbitraGenius</title>
        <meta name="description" content="Calculate sure bets." />
        <link rel="canonical" href="/arbitrage-calculator" />
      </Helmet>
      <Section title="Arbitrage Calculator">
        <ul>
          <li>Instant sure-bet detection</li>
          <li>Real-time odds</li>
          <li>Easy staking</li>
        </ul>
        <img src="/assets/screenshot-arb.png" alt="Arbitrage calculator" />
        <Button>Download on the App Store</Button>
      </Section>
    </main>
  );
}
