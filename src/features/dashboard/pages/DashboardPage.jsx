// src/features/dashboard/components/DashboardPage.jsx

import React, { useState } from 'react';
import { Header } from '../../shared/components/Header/Header';
import { Footer } from '../../shared/components/Footer/Footer';
import styles from './Dashboard.module.css';
import { VideoBanner } from './VideoBanner'; // Importamos el componente VideoBanner

// --- Sub-componentes ---
// No hay cambios en estos componentes, pero los he incluido para que el código sea completo y funcional.
function ShoppingCart({ items, onRemoveItem }) {
 const total = items.reduce((sum, item) => sum + item.price, 0);

return (
<div className={styles.cartContainer}>
 <h2 className={styles.sectionTitle}>Carrito de Compras ({items.length})</h2>
 {items.length === 0 ? (
 <p>Tu carrito está vacío.</p>
) : (
<ul className={styles.cartList}>
{items.map((item) => (
<li key={item.id} className={styles.cartItem}>
 <span>{item.name} - ${item.price.toFixed(2)}</span>
 <button onClick={() => onRemoveItem(item.id)} className={styles.removeButton}>
 Eliminar
 </button>
 </li>
 ))}
</ul>
 )}
 <div className={styles.cartTotal}>
 <strong>Total: ${total.toFixed(2)}</strong>
</div>
 </div>
);
}

function ProductHighlight({ product, onAddToCart }) {
 return (
 <div className={styles.productCard}>
 <img src={product.image} alt={product.name} className={styles.productImage} />
 <h3>{product.name}</h3>
 <p className={styles.productPrice}>${product.price.toFixed(2)}</p>
 <p className={styles.productDescription}>{product.description}</p>
 <button onClick={() => onAddToCart(product)} className={styles.addButton}>
 Añadir al Carrito
 </button>
 </div>
);
}

function RecentActivity({ activity }) {
 return (
 <ul className={styles.activityList}>
 {activity.map((item, index) => (
 <li key={index} className={styles.activityItem}>
 <span className={styles.activityType}>{item.type}:</span> {item.description}
 </li>
 ))}
 </ul>
 );
}

// --- Componente Principal ---

export function DashboardPage() {
  const featuredProducts = [
    { 
      id: 1, 
      name: 'Camiseta', 
      price: 20.99, 
      description: 'Camiseta de manga corta con un diseño moderno y minimalista, ideal para cualquier ocasión.', 
      image: 'https://martinpescador.co/cdn/shop/files/Dusk-Blue-Sailing-b.png?v=1700748777&width=2048' 
    },
    { 
      id: 2, 
      name: 'Camiseta de algodón', 
      price: 89.50, 
      description: 'Camiseta 100% de algodón, suave, cómoda y perfecta para el uso diario.', 
      image: 'https://images.squarespace-cdn.com/content/v1/520dc4c1e4b0a5dd07f73169/1433451709981-GZURXYMAT3GXJM223JLF/uniformes-corp-blusa-blanca-clasica.png' 
    },
    { 
      id: 3, 
      name: 'Pantalón', 
      price: 40.00, 
      description: 'Pantalón cómodo y resistente, ideal para un estilo casual o de trabajo. Un básico versátil.', 
      image: 'https://sampysafety.com/wp-content/uploads/2024/04/16.1.1-PANTALON-EMPRESARIAL-EN-JEAN-DOTACIONES-INDUSTRIALES-TEXTIL-PRODUCTOS-ECOMMERCE-SAMPY-SAS.png' 
    },
    { 
      id: 4, 
      name: 'Buzo Ducati', 
      price: 120.00, 
      description: 'Buzo con capucha que presenta un diseño exclusivo de la marca Ducati. Perfecto para los amantes del motociclismo.', 
      image: 'https://mottza.com/wp-content/uploads/2023/07/456456456-10.png' 
    },
    { 
      id: 5, 
      name: 'Buzo', 
      price: 65.00, 
      description: 'Buzo con diseño sencillo, versátil y perfecto para el entretiempo.', 
      image: 'https://milanelo.com/cdn/shop/files/WPS25-JTP-120-01-1.png?v=1754406751&width=3000' 
    },
    { 
      id: 6, 
      name: 'Zapatos', 
      price: 120.99, 
      description: 'Zapatos de cuero elegantes y duraderos, ideales para un look formal o de oficina. Ofrecen estilo y comodidad.', 
      image: 'https://acdn-us.mitiendanube.com/stores/001/374/566/products/arturo-calle-zapatos-color-hombre-colombia-tienda-onlineshoppingcenterg-centro-de-compras-en-linea1-498ad5f075007bc22a16576417924329-480-0.png' 
    },
    { 
      id: 7, 
      name: 'Camiseta para dama', 
      price: 89.50, 
      description: 'Camiseta de corte femenino, suave y transpirable, ideal para el uso diario y de gran confort.', 
      image: 'https://images.squarespace-cdn.com/content/v1/520dc4c1e4b0a5dd07f73169/1433451709981-GZURXYMAT3GXJM223JLF/uniformes-corp-blusa-blanca-clasica.png' 
    },
    { 
      id: 8, 
      name: 'gorra', 
      price: 40.00, 
      description: 'Gorra deportiva de diseño moderno. Es un accesorio cómodo y perfecto para protegerse del sol.', 
      image: 'https://neweraco.vtexassets.com/assets/vtex.file-manager-graphql/images/2b1bd9b3-b3f7-4d20-88b7-7744913f6c15___2e8b692c52586628d725cb541fc6c7a4.pnggit init' 
    },
    { 
      id: 9, 
      name: 'Zapatos para dama', 
      price: 120.00, 
      description: 'Zapatos elegantes de tacón para mujer. Un calzado perfecto para ocasiones especiales o un estilo sofisticado.', 
      image: 'https://mottza.com/wp-content/uploads/2023/07/456456456-10.png' 
    },
    { 
      id: 10, 
      name: 'Pantalon para dama', 
      price: 65.00, 
      description: 'Pantalón de corte estilizado para dama, diseñado para ofrecer comodidad y un look impecable. Ideal para cualquier actividad.', 
      image: 'https://milanelo.com/cdn/shop/files/WPS25-JTP-120-01-1.png?v=1754406751&width=3000' 
    },
  ];

 const recentActivities = [
 { type: 'Pedido', description: 'Tu pedido #123456 ha sido enviado.' },
 { type: 'Oferta', description: 'Nuevas ofertas disponibles en la categoría de electrónica.' },
 { type: 'Actualización', description: 'Se ha agregado un nuevo producto a tu lista de deseos.' },
 { type: 'Pedido', description: 'Tu pedido #123457 ha sido confirmado.' },
 ];

 const [cartItems, setCartItems] = useState([]);

 const handleAddToCart = (product) => {
 // Si el producto ya está en el carrito, no lo agregues de nuevo
 const productExists = cartItems.find(item => item.id === product.id);
 if (!productExists) {
 setCartItems(prevItems => [...prevItems, product]);
 }
 };

 const handleRemoveFromCart = (productId) => {
 setCartItems(prevItems => prevItems.filter(item => item.id !== productId));
};

 return (
 <div className={styles.dashboardContainer}>
 <Header />
 <main className={styles.mainContent}>
 {/* Usamos el nuevo componente VideoBanner en lugar del HeroBanner estático */}
 <VideoBanner /> 

 <h1 className={styles.title}>Bienvenido a nuestra Tienda</h1>
 <p className={styles.subtitle}>Aquí encontrarás un resumen rápido de la actividad de tu cuenta.</p>

 <section className={styles.section}>
 <h2 className={styles.sectionTitle}>Productos Destacados</h2>
 <div className={styles.productsGrid}>
 {featuredProducts.map(product => (
 <ProductHighlight key={product.id} product={product} onAddToCart={handleAddToCart} />
 ))}
 </div>
 </section>

 <section className={styles.section}>
 <ShoppingCart items={cartItems} onRemoveItem={handleRemoveFromCart} />
 </section>

 <section className={styles.section}>
<h2 className={styles.sectionTitle}>Actividad Reciente</h2>
 <RecentActivity activity={recentActivities} />
 </section>
 </main>
 <Footer />
 </div>
 );
}