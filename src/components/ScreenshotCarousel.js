import React from 'react';
import styles from './ScreenshotCarousel.module.css';
import { Link } from 'react-router-dom';

const ScreenshotCarousel = ({ items }) => (
  <div className={styles.carouselContainer}>
    <div className={styles.carousel}>
      {items.map((item, idx) => (
        <Link key={idx} to={item.link} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.cardEyebrow}>Explore tool</span>
            <span className={styles.cardTitle}>{item.title}</span>
          </div>
          <div className={styles.mediaFrame}>
            <img src={item.image} alt={item.alt} className={styles.screenshot} />
          </div>
          <span className={styles.cardAction}>View details</span>
        </Link>
      ))}
    </div>
  </div>
);

export default ScreenshotCarousel;
