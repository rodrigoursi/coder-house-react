import React, { useContext } from 'react';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {CartContext} from '../../contexts/cartContext.jsx'

const Cart = () => {
    const {cartQuantity} = useContext(CartContext);
    return (
        <div><ShoppingCartIcon sx={{color: "white"}} /> <span style={{color:"white"}} >{cartQuantity()}</span> </div>
    );
};

export default Cart;