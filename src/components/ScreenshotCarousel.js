import React from 'react';
import styles from './ScreenshotCarousel.module.css';
import { Link } from 'react-router-dom';

const ScreenshotCarousel = ({ items }) => (
  <div className={styles.carousel}>
    {items.map((item, idx) => (
      <div key={idx} className={styles.card}>
        <Link to={item.link} className={styles.cardTitle}>
          {item.title}
        </Link>
        <img src={item.image} alt={item.alt} className={styles.screenshot} />
      </div>
    ))}
  </div>
);

export default ScreenshotCarousel;