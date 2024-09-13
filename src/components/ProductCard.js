import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProductCard.css'; // Asegúrate de tener estilos

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-image" />
      <h2 className="product-name">{product.name}</h2>
      <p className="product-price">${product.price.toFixed(2)}</p>
      <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">Añadir al Carrito</button>
      <Link to={`/catalog/${product.id}`} className="view-detail-link">Ver Detalle</Link>
    </div>
  );
};

export default ProductCard;
