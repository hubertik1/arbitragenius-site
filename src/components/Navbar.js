import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const linkClass = ({ isActive }) =>
  isActive ? `${styles.active}` : undefined;

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((o) => !o);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img
          src="/assets/logo_transparent.png"
          alt="Logo"
          className={styles.logo}
        />
      </div>
      <button className={styles.menuButton} onClick={handleToggle} aria-label="Toggle navigation">
        &#9776;
      </button>
      <ul className={`${styles.links} ${menuOpen ? styles.show : ""}`}>
        <li>
          <NavLink to="/" end className={linkClass} onClick={handleLinkClick}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/bonus-optimizer" className={linkClass} onClick={handleLinkClick}>
            Bonus Optimizer
          </NavLink>
        </li>
        <li>
          <NavLink to="/arbitrage-calculator" className={linkClass} onClick={handleLinkClick}>
            Arbitrage Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/margin-monitor" className={linkClass} onClick={handleLinkClick}>
            Margin Monitor
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass} onClick={handleLinkClick}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/privacy-policy" className={linkClass} onClick={handleLinkClick}>
            Privacy Policy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}