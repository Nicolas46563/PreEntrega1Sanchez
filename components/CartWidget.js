import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './CartWidget.css';

const CartWidget = ({ onClick, itemCount }) => {
  return (
    <div className="cart-widget" onClick={onClick}>
      <FaShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="cart-notification">{itemCount}</span>
      )}
    </div>
  );
};

export default CartWidget;
