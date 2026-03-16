import React from 'react';
import { Link } from 'react-router-dom';
import Seo from '../components/Seo';
import styles from './NotFound.module.css';

const NotFound = () => (
  <>
    <Seo routePath="/404" />
    <div className={styles.container}>
      <div className={styles.card}>
        <span className={styles.eyebrow}>404</span>
        <h1>Page not found</h1>
        <p>
          The page you requested does not exist or has moved. Use one of the links below to get back to a valid page.
        </p>
        <div className={styles.actions}>
          <Link to="/" className={styles.primaryAction}>Back to home</Link>
          <Link to="/contact" className={styles.secondaryAction}>Contact support</Link>
        </div>
      </div>
    </div>
  </>
);

export default NotFound;
