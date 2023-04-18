import React, { createContext, useContext, useState, useEffect } from 'react';

export const CartContext = createContext();
export const CartProvider = (props) => {

  const cargoServicio = 120;
  const [cart, setCart] = useState([]);
  const addItem = (detalle, cantidad) => {
    let indice = cart.findIndex(producto => producto.id === detalle.id);
    if(indice !== -1) {
      cart[indice].cantidad += cantidad;
      setCart([...cart]);
    } else setCart([...cart,{...detalle,cantidad: cantidad}]);
  }
  

  const cartQuantity = () => {
    return cart.reduce((contador, carrito) => (contador += carrito.cantidad),0);
  }

  const clearCart = () => {
    setCart([]);
  }

  const removeItem = (id) => {
    const index = cart.findIndex(item => item.id === id);
    const newCart = [...cart];
    newCart.splice(index, 1);
    setCart([...newCart]);
  }


  return (
      <CartContext.Provider
        value={{
          addItem,
          cartQuantity,
          cart,
          cargoServicio,
          clearCart,
          removeItem,
        }}
      >
        {props.children}
      </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);

