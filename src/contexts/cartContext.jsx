import React, { createContext, useContext, useState, useEffect } from 'react';
import { db } from "./../firebase/firebaseConfig.js";
import { collection, query, getDocs, where } from "firebase/firestore";

export const CartContext = createContext();
export const CartProvider = (props) => {

  const [cargoServicio, setCargo] = useState(0);
  useEffect(() => {
    const q = query(collection(db, "miCine"), where('tagline', '==', 'codservicio'));
    const getCargoServicio = async (cargo) => {
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      //console.log(doc.id, " => ", doc.data());
      setCargo(doc.data().precio);
    });
  }
  getCargoServicio();
  }, []);
  

  //const cargoServicio = getCargoServicio(cargo);
  const [cart, setCart] = useState([]);
  const addItem = (detalle, cantidad) => {
    let indice = cart.findIndex(producto => producto.id === detalle.id);
    if(indice !== -1) {
      console.log(cart[indice])
      cart[indice].cantidad += cantidad;
      cart[indice].total = (cart[indice].cantidad) * (cart[indice].precio);
      setCart([...cart]);
    } else setCart([...cart,{...detalle,cantidad: cantidad}]);
  }
  

  const cartQuantity = () => {
    return cart.reduce((contador, carrito) => (contador += carrito.cantidad),0);
  }

  const calcSubTotal = () => {
    return cart.reduce((contador, carrito) => (contador += carrito.total),0);
    /*cart.forEach((item) => {
      subtotal += item.total;
  });
  return subtotal;*/
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
  console.log(calcSubTotal())
  return (
      <CartContext.Provider
        value={{
          addItem,
          cartQuantity,
          cart,
          cargoServicio,
          clearCart,
          calcSubTotal,
          removeItem,
        }}
      >
        {props.children}
      </CartContext.Provider>
    );
}

export const useCart = () => useContext(CartContext);

