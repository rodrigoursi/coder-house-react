import React, { useContext, useState } from 'react';
import {CartContext} from '../../contexts/cartContext.jsx'
import DataGrid from '../dataGrid/dataGrid.jsx';
import "./cart.css";
import Summary from "../summary/summary.jsx";


const Cart = () => {
    const [id,setId] = useState(0);
    const {cart} = useContext(CartContext);
    const {cargoServicio, calcSubTotal} = useContext(CartContext);
    const {clearCart} = useContext(CartContext);
    const {removeItem} = useContext(CartContext);
    const enviarId = (id) => {setId(id);}

    return (
        <>
        <h1 style={{color:'white', textAlign:'center'}}>MI CARRITO</h1>
        {
            cart.length > 0 ? (
                <div className='container-cart'>
                    <div className='container-grid'>
                        <DataGrid array={cart} enviarId={enviarId}/>
                        <div className='buttons'>
                        <button type="button" className="btn btn-warning" onClick={()=>removeItem(id) }>Eliminar item</button>
                        <button type="button" className="btn btn-danger" onClick={clearCart} >Vaciar carrito</button>
                        </div>
                    </div>
                    < Summary array={cart} cargo={cargoServicio} subtotal={calcSubTotal()} />
                </div>
            ) : (<h2 style={{color:'white', textAlign:'center'}}>Vacio</h2>)
        }
        </>
    )
}

export default Cart;