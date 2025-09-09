// src/shared/components/CartModal/CartModal.jsx

import React, { useEffect, useRef } from 'react';
import styles from './CartModal.module.css'; 
import { NavLink } from 'react-router-dom';

export function CartModal({
  cartItems,
  onClose,
  onDecreaseQuantity,
  onIncreaseQuantity,
  onRemoveItem,
  onClearCart
}) {
  const modalRef = useRef();
  
  // Calcula el total de la compra
  const total = cartItems.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

  // Cierra el modal si se hace clic fuera de él
  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent} ref={modalRef}>
        <div className={styles.modalHeader}>
          <h2 className={styles.modalTitle}>Tu Carrito ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})</h2>
          <button className={styles.closeButton} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.modalBody}>
          {cartItems.length === 0 ? (
            <p className={styles.emptyCartMessage}>Tu carrito está vacío.</p>
          ) : (
            <ul className={styles.cartList}>
              {cartItems.map((item) => (
                <li key={item.product.id} className={styles.cartItem}>
                  <div className={styles.itemDetails}>
                    <span className={styles.itemName}>{item.product.name}</span>
                    <span className={styles.itemPrice}>${item.product.price.toFixed(2)} c/u</span>
                  </div>
                  <div className={styles.itemQuantityControls}>
                    <button 
                      onClick={() => onDecreaseQuantity(item.product.id)} 
                      className={`${styles.quantityButton} ${styles.decrease}`}
                    >
                      -
                    </button>
                    <span className={styles.itemQuantity}>{item.quantity}</span>
                    <button 
                      onClick={() => onIncreaseQuantity(item.product.id)} 
                      className={`${styles.quantityButton} ${styles.increase}`}
                    >
                      +
                    </button>
                    <button 
                      onClick={() => onRemoveItem(item.product.id)} 
                      className={styles.removeItemButton}
                    >
                      Eliminar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className={styles.modalFooter}>
          <div className={styles.cartTotal}>
            <strong>Total: ${total.toFixed(2)}</strong>
          </div>
          {cartItems.length > 0 && (
            <div className={styles.modalActions}>
              <button className={styles.clearCartButton} onClick={onClearCart}>
                Vaciar Carrito
              </button>
              <NavLink to="/carrito" className={styles.checkoutButton} onClick={onClose}>
                Ir al Carrito
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}