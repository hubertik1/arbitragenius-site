import React from 'react';
import { Helmet } from 'react-helmet-async';
import Hero from '../components/Hero';
import Card from '../components/Card';

export default function Home() {
  return (
    <main>
      <Helmet>
        <title>ArbitraGenius</title>
        <meta name="description" content="Turn every free bet into cash." />
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <div className="cards">
        <Card title="Bonus Optimizer" to="/bonus-optimizer">
          Maximize sign-up offers.
        </Card>
        <Card title="Arbitrage Calculator" to="/arbitrage-calculator">
          Find sure bets instantly.
        </Card>
        <Card title="Margin Checker" to="/margin-checker">
          Always know the real odds.
        </Card>
      </div>
    </main>
  );
}
