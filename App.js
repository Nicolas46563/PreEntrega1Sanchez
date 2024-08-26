import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import Sidebar from './components/Sidebar';
import CartSidebar from './components/CartSidebar';
import ProductList from './components/ProductList';
import products from './components/products';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleCartSidebar = () => {
    setIsCartSidebarOpen(!isCartSidebarOpen);
  };

  const addToCart = (product) => {
    setCart(prevCart => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const clearCart = () => {
    setCart([]);
  };

  const getCartCount = () => {
    return cart.length;
  };

  const getCartTotal = () => {
    return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
  };

  return (
    <div className="App">
      <NavBar 
        onMenuClick={toggleSidebar} 
        onCartClick={toggleCartSidebar} 
        cartItemCount={getCartCount()} // Pasa la cantidad de items en el carrito al NavBar
      />
      <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
      <CartSidebar
        isOpen={isCartSidebarOpen}
        onClose={toggleCartSidebar}
        cart={cart}
        onRemove={removeFromCart}
        onClear={clearCart}
        total={getCartTotal()}
      />
      <ItemListContainer greeting="Bienvenidos a nuestra tienda!" />
      <ProductList products={products} onAddToCart={addToCart} />
    </div>
  );
}

export default App;
