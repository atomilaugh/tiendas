// src/shared/components/Header/Header.jsx

import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import { CartModal } from '../CartModal/CartModal'; // Importa el componente del modal

const HomeIcon = () => (
    <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const CartIcon = ({ count, onClick }) => (
    <button className={styles.cartIconContainer} onClick={onClick}>
        <svg className={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {count > 0 && <span className={styles.cartCount}>{count}</span>}
    </button>
);

export function Header({ 
    cartItems = [], 
    cartItemCount = 0, 
    onDecreaseQuantity, 
    onIncreaseQuantity, 
    onRemoveItem, 
    onClearCart 
}) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isCartModalOpen, setIsCartModalOpen] = useState(false); 

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setIsCartModalOpen(false);
    };

    const openCartModal = (e) => {
        e.stopPropagation();
        setIsCartModalOpen(true);
        setIsMenuOpen(false);
    };

    const closeCartModal = () => {
        setIsCartModalOpen(false);
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
                        <HomeIcon />
                        Inicio
                    </NavLink>
                    <NavLink
                        to="/productos"
                        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Productos
                    </NavLink>
                    <NavLink
                        to="/ofertas"
                        className={({ isActive }) => (isActive ? styles.activeLink : styles.link)}
                        onClick={() => setIsMenuOpen(false)}
                    >
                        Ofertas
                    </NavLink>
                    <button className={`${styles.link} ${styles.cartLinkMobile}`} onClick={openCartModal}>
                        <CartIcon count={cartItemCount} />
                        Carrito
                    </button>
                </nav>
                <div className={styles.headerActions}>
                    <CartIcon count={cartItemCount} onClick={openCartModal} />
                    <button className={styles.menuToggle} onClick={toggleMenu}>
                        ☰
                    </button>
                </div>
            </div>
            
            {isCartModalOpen && (
                <CartModal
                    cartItems={cartItems}
                    onClose={closeCartModal}
                    onDecreaseQuantity={onDecreaseQuantity}
                    onIncreaseQuantity={onIncreaseQuantity}
                    onRemoveItem={onRemoveItem}
                    onClearCart={onClearCart}
                />
            )}
        </header>
    );
}