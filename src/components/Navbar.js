import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li><NavLink to="/" end>Home</NavLink></li>
        <li><NavLink to="/bonus-optimizer">Bonus Optimizer</NavLink></li>
        <li><NavLink to="/arbitrage-calculator">Arbitrage Calculator</NavLink></li>
        <li><NavLink to="/margin-checker">Margin Checker</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
    </nav>
  );
};

export default Navbar;
