// src/components/NavBar.js
import React from 'react';
import { FaBars } from 'react-icons/fa';
import CartWidget from './CartWidget';
import './css/NavBar.css';

const NavBar = ({ onMenuClick, onCartClick, cart }) => {
  const itemCount = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div className="navbar">
      <button className="menu-btn" onClick={onMenuClick}>
        <FaBars />
      </button>
      <h1 className="logo">Mate & Tea - Experiencias</h1>
      <CartWidget onClick={onCartClick} itemCount={itemCount} />
    </div>
  );
};

export default NavBar;
