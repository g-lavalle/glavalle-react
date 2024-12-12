// src/components/CartWidget.js
import React from 'react';

const CartWidget = () => {
  return (
    <div>
      <img src="carrito.png" alt="Carrito de compras" />
      <span>3</span> {/* Aquí puedes agregar la lógica para mostrar la cantidad de artículos en el carrito */}
    </div>
  );
}

export default CartWidget;
