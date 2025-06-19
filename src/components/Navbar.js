import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const linkClass = ({ isActive }) =>
  isActive ? `${styles.active}` : undefined;

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logoContainer}>
        <img 
          src="/assets/logo_transparent.png" 
          alt="Logo" 
          className={styles.logo} 
        />
      </div>
      <ul>
        <li>
          <NavLink to="/" end className={linkClass}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to="/bonus-optimizer" className={linkClass}>
            Bonus Optimizer
          </NavLink>
        </li>
        <li>
          <NavLink to="/arbitrage-calculator" className={linkClass}>
            Arbitrage Calculator
          </NavLink>
        </li>
        <li>
          <NavLink to="/margin-monitor" className={linkClass}>
            Margin Monitor
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className={linkClass}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink to="/privacy-policy" className={linkClass}>
            Privacy Policy
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}