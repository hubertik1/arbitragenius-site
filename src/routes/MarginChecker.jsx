import React from 'react';
import { Helmet } from 'react-helmet-async';
import Section from '../components/Section';
import Button from '../components/Button';

export default function MarginChecker() {
  return (
    <main>
      <Helmet>
        <title>Margin Checker - ArbitraGenius</title>
        <meta name="description" content="Check bookmaker margins." />
        <link rel="canonical" href="/margin-checker" />
      </Helmet>
      <Section title="Margin Checker">
        <ul>
          <li>See true odds</li>
          <li>Beat bookmaker margin</li>
          <li>Works offline</li>
        </ul>
        <img src="/assets/screenshot-margin.png" alt="Margin checker" />
        <Button>Download on the App Store</Button>
      </Section>
    </main>
  );
}
