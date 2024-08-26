import React from 'react';
import './ItemListContainer.css'; // Archivo de estilos para ItemListContainer

const ItemListContainer = ({ greeting }) => {
  return (
    <div className="item-list-container">
      <h2>{greeting}</h2>
    </div>
  );
};

export default ItemListContainer;
