import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [dark, setDark] = useState(() =>
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  useEffect(() => {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
  }, [dark]);

  return (
    <header>
      <nav>
        <Link to="/">Home</Link> |{' '}
        <Link to="/bonus-optimizer">Bonus Optimizer</Link> |{' '}
        <Link to="/arbitrage-calculator">Arbitrage Calculator</Link> |{' '}
        <Link to="/margin-checker">Margin Checker</Link> |{' '}
        <Link to="/contact">Contact</Link> |{' '}
        <Link to="/legal">Legal</Link>
      </nav>
      <button aria-label="Toggle dark mode" onClick={() => setDark(!dark)}>
        {dark ? 'Light' : 'Dark'} Mode
      </button>
    </header>
  );
}
