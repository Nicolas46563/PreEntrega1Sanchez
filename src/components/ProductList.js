import React from 'react';
import { Link } from 'react-router-dom';
import './css/ProductList.css'; // Asegúrate de tener los estilos aplicados

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <div className="product-info">
            <h2 className="product-name">{product.name}</h2>
            <p className="product-description">{product.description}</p>
            <span className="product-price">${product.price.toFixed(2)}</span>
            <div className="product-actions">
              <button className="add-to-cart" onClick={() => onAddToCart(product)}>Agregar al Carrito</button>
              <Link to={`/catalog/${product.id}`} className="view-details">Ver Detalles</Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
