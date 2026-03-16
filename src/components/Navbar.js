import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

const linkClass = ({ isActive }) =>
  [styles.link, isActive ? styles.active : ""].filter(Boolean).join(" ");

const navigationItems = [
  { to: "/", label: "Home", end: true },
  { to: "/bonus-optimizer", label: "Bonus Optimizer" },
  { to: "/arbitrage-calculator", label: "Arbitrage Calculator" },
  { to: "/margin-monitor", label: "Margin Monitor" },
  { to: "/contact", label: "Contact" },
  { to: "/privacy-policy", label: "Privacy Policy" }
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleToggle = () => setMenuOpen((o) => !o);
  const handleLinkClick = () => setMenuOpen(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.navInner}>
        <Link to="/" className={styles.brand} onClick={handleLinkClick}>
          <span className={styles.logoContainer}>
            <img
              src="/assets/logo_transparent.png"
              alt="ArbitraGenius logo"
              className={styles.logo}
            />
          </span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>ArbitraGenius</span>
            <span className={styles.brandTag}>Smart tools for betting edges</span>
          </span>
        </Link>

        <button
          className={`${styles.menuButton} ${menuOpen ? styles.menuOpen : ""}`}
          onClick={handleToggle}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="site-navigation"
        >
          <span />
          <span />
          <span />
        </button>

        <div
          id="site-navigation"
          className={`${styles.navPanel} ${menuOpen ? styles.show : ""}`}
        >
          <ul className={styles.links}>
            {navigationItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  end={item.end}
                  className={linkClass}
                  onClick={handleLinkClick}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <a
            href="https://apps.apple.com/pl/app/arbitragenius/id6747199263"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.downloadLink}
          >
            Download App
          </a>
        </div>
      </div>
    </nav>
  );
}
