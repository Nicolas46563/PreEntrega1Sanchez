import React from 'react';
import { useParams, Link } from 'react-router-dom';
import catalog from './catalog';
import './css/ProductDetail.css';

const ProductDetail = ({ onAddToCart }) => {
  const { productId } = useParams();
  const product = catalog.find(p => p.id === parseInt(productId));

  if (!product) {
    return <p>Producto no encontrado</p>;
  }

  return (
    <div className="product-detail">
      <Link to="/catalog" className="back-button">Volver al Catálogo</Link>
      <div className="product-detail-content">
        <img src={product.image} alt={product.name} className="detail-image" />
        <div className="detail-info">
          <h1 className="detail-name">{product.name}</h1>
          <p className="detail-description">{product.description}</p>
          <span className="detail-price">${product.price.toFixed(2)}</span>
          <button className="add-to-cart-btn" onClick={() => onAddToCart(product)}>Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
