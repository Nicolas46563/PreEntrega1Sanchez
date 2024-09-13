// src/components/Sidebar.js
import React from 'react';
import { Link } from 'react-router-dom';
import './css/Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-close" onClick={onClose}>x</button>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">Sobre nosotros</Link></li>
          <li><Link to="/contact">Contacto</Link></li>
          <li><Link to="/catalog">Catálogo</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
