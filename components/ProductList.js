// src/components/ProductList.js
import React from 'react';
import './ProductList.css';

const ProductList = ({ products, onAddToCart }) => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <h3 className="product-name">{product.name}</h3>
          <p className="product-price">${product.price.toFixed(2)}</p>
          <button onClick={() => onAddToCart(product)} className="add-to-cart-btn">+ Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
