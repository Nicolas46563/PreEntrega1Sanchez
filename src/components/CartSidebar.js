// src/components/CartSidebar.js
import React from 'react';
import './css/CartSidebar.css';

const CartSidebar = ({ isOpen, onClose, cart, onRemove, onClear, onIncrement, onDecrement, total }) => {
  return (
    <div className={`cart-sidebar ${isOpen ? 'open' : ''}`}>
      <button className="cart-sidebar-close" onClick={onClose}>x</button>
      <h2>Carrito de Compras</h2>
      <ul className="cart-items">
        {cart.length > 0 ? (
          cart.map(item => (
            <li key={item.id} className="cart-item">
              <span>{item.name}</span>
              <div className="quantity-controls">
                <button onClick={() => onDecrement(item.id)} className="quantity-btn">-</button>
                <span>{item.quantity}</span>
                <button onClick={() => onIncrement(item.id)} className="quantity-btn">+</button>
              </div>
              <span>${(item.quantity * item.price).toFixed(2)}</span>
              <button onClick={() => onRemove(item.id)} className="remove-btn">X</button>
            </li>
          ))
        ) : (
          <li>No hay productos en el carrito.</li>
        )}
      </ul>
      {cart.length > 0 && (
        <>
          <div className="cart-total">
            <strong>Total a pagar:</strong> ${total}
          </div>
          <button className="clear-cart-btn" onClick={onClear}>Limpiar Carrito</button>
        </>
      )}
    </div>
  );
};

export default CartSidebar;
