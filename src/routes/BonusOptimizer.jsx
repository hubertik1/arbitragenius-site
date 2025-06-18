import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Button from '../components/Button';

export default function BonusOptimizer() {
  return (
    <main>
      <Helmet>
        <title>Bonus Optimizer - ArbitraGenius</title>
        <meta name="description" content="Optimize bonuses." />
        <link rel="canonical" href="/bonus-optimizer" />
      </Helmet>
      <Section title="Bonus Optimizer">
        <ul>
          <li>Automates bonus conversions</li>
          <li>Saves time</li>
          <li>Maximizes profits</li>
        </ul>
        <img src="/assets/screenshot-bonus.png" alt="Bonus optimizer" />
        <Button>Download on the App Store</Button>
      </Section>
    </main>
  );
}
