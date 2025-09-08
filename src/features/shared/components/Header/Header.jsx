// src/shared/components/Header/Header.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

// Componente para el icono del carrito con contador
function CartIcon({ count }) {
  return (
    <div className={styles.cartIconContainer}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className={styles.cartIcon}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.708.707 1.708H17.5M17.5 17.5a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z"
        />
      </svg>
      {count > 0 && <span className={styles.cartCount}>{count}</span>}
    </div>
  );
}

export function Header({ cartItemCount = 0 }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <NavLink to="/" className={styles.logo}>
          Mi Tienda
        </NavLink>
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            onClick={() => setIsMenuOpen(false)}
          >
            Tienda
          </NavLink>
          <NavLink
            to="/productos"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            onClick={() => setIsMenuOpen(false)}
          >
          </NavLink>
          <NavLink
            to="/ofertas"
            className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
            onClick={() => setIsMenuOpen(false)}
          >
           
          </NavLink>
          <div className={styles.cartLinkMobile}>
            <NavLink to="/carrito" className={styles.cartLink} onClick={() => setIsMenuOpen(false)}>
              <CartIcon count={cartItemCount} />
              <span className={styles.cartLinkText}>Carrito</span>
            </NavLink>
          </div>
        </nav>
        <div className={styles.headerActions}>
          <NavLink to="/carrito" className={`${styles.cartLink} ${styles.cartLinkDesktop}`}>
            <CartIcon count={cartItemCount} />
          </NavLink>
          <button className={styles.menuToggle} onClick={toggleMenu}>
            ☰
          </button>
        </div>
      </div>
    </header>
  );
}