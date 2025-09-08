// src/shared/components/Footer/Footer.jsx

import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.css';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Mi Tienda Online</h4>
          <p className={styles.description}>
            Tu destino para productos de alta calidad.
          </p>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Enlaces Rápidos</h4>
          <ul className={styles.linkList}>
            <li>
              <NavLink to="/nosotros" className={styles.link}>
                Nosotros
              </NavLink>
            </li>
            <li>
              <NavLink to="/contacto" className={styles.link}>
                Contacto
              </NavLink>
            </li>
            <li>
              <NavLink to="/faq" className={styles.link}>
                Preguntas Frecuentes
              </NavLink>
            </li>
            <li>
              <NavLink to="/terminos" className={styles.link}>
                Términos y Condiciones
              </NavLink>
            </li>
          </ul>
        </div>

        <div className={styles.footerSection}>
          <h4 className={styles.sectionTitle}>Síguenos</h4>
          <div className={styles.socialIcons}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>

      <div className={styles.footerBottom}>
        <p className={styles.copyright}>
          © {currentYear} Mi Tienda Online. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}