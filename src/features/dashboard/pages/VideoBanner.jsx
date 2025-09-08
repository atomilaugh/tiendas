// src/features/dashboard/components/VideoBanner.jsx
import React from 'react';
import styles from './Dashboard.module.css';
import videoSrc from '../../../assets/WhatsApp Video 2025-08-12 at 10.35.21 AM.mp4';

export function VideoBanner() {
  return (
    <div className={styles.videoBannerContainer}>
      <video
        className={styles.videoBanner}
        autoPlay
        loop
        muted
        playsInline
      >
        <source src={videoSrc} type="video/mp4" />
        Tu navegador no soporta el elemento de video.
      </video>
      <div className={styles.bannerContent}>
        <h2 className={styles.bannerTitle}>SURTI</h2>
        <p className={styles.bannerSubtitle}>CAMISETAS</p>
      </div>
    </div>
  );
}