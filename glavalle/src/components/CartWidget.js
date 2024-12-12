import React from 'react';
import { useCart } from '../CartContext';

const CartWidget = () => {
  const { itemsCount } = useCart();

  return (
    <div>
      <img src="carrito.png" alt="Carrito de compras" />
      <span>{itemsCount}</span> {/* Muestra la cantidad de artículos */}
    </div>
  );
}

export default CartWidget;
