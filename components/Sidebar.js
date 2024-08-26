// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <div className={`sidebar ${isOpen ? 'open' : ''}`}>
      <button className="sidebar-close" onClick={onClose}>x</button>
      <nav className="sidebar-nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre nosotros</a></li>
          <li><a href="/contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
