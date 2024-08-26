import React from 'react';
import { FaBars } from 'react-icons/fa';
import CartWidget from './CartWidget';
import './NavBar.css';

const NavBar = ({ onMenuClick, onCartClick, cartItemCount }) => {
  return (
    <div className="navbar">
      <button className="menu-btn" onClick={onMenuClick}>
        <FaBars />
      </button>
      <h1 className="logo">Mate & Tea - Experiencias</h1>
      <CartWidget onClick={onCartClick} itemCount={cartItemCount} />
    </div>
  );
};

export default NavBar;
