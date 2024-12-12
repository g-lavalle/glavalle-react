import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [itemsCount, setItemsCount] = useState(0);

  return (
    <CartContext.Provider value={{ itemsCount, setItemsCount }}>
      {children}
    </CartContext.Provider>
  );
};
