// src/App.js
import React from 'react';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { CartProvider } from './CartContext';
import './App.css';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <NavBar />
        <ItemListContainer greeting="¡Bienvenido a nuestra tienda!" />
      </div>
    </CartProvider>
  );
}

export default App;
