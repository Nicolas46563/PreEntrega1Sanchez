import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar';
import CartSidebar from './components/CartSidebar';
import ItemListContainer from './components/ItemListContainer';
import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import About from './components/About';
import Contact from './components/Contact';
import catalog from './components/catalog';
import './components/css/styles.css'; // Asegúrate de importar el archivo CSS

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCartSidebarOpen, setIsCartSidebarOpen] = useState(false);
  const [cart, setCart] = useState([]);

  const toggleSidebar = () => setIsSidebarOpen(prev => !prev);
  const toggleCartSidebar = () => setIsCartSidebarOpen(prev => !prev);

  const addToCart = (product) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(item => item.id === product.id);
      return existingProduct
        ? prevCart.map(item =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const incrementQuantity = (productId) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    ));
  };

  const decrementQuantity = (productId) => {
    setCart(prevCart => prevCart.map(item =>
      item.id === productId
        ? { ...item, quantity: Math.max(item.quantity - 1, 1) }
        : item
    ));
  };

  const clearCart = () => setCart([]);

  const getCartTotal = () => cart.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);

  return (
    <Router>
      <div className="App">
        <NavBar
          onMenuClick={toggleSidebar}
          onCartClick={toggleCartSidebar}
          cart={cart}
        />
        <Sidebar isOpen={isSidebarOpen} onClose={toggleSidebar} />
        <CartSidebar
          isOpen={isCartSidebarOpen}
          onClose={toggleCartSidebar}
          cart={cart}
          onRemove={removeFromCart}
          onClear={clearCart}
          onIncrement={incrementQuantity}
          onDecrement={decrementQuantity}
          total={getCartTotal()}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<ItemListContainer greeting="Bienvenidos a nuestra tienda!" />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/catalog"
              element={<ProductList products={catalog} onAddToCart={addToCart} />}
            />
            <Route
              path="/catalog/:productId"
              element={<ProductDetail onAddToCart={addToCart} />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
