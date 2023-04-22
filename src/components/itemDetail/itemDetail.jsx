import React, { useState, useContext } from 'react';
import { CartContext } from '../../contexts/cartContext.jsx';
import "./itemDetail.css";
import ItemCount from "../itemCount/itemCount.jsx";

const Detail = (props) => {
    const { addItem } = useContext(CartContext);
    const [compra, setCompra] = useState(false); 
    const precio = props.precio ? props.precio : 400;  
    const onAdd = (cantidad) => {
        
        //const precio = props.precio ? props.precio : 400;
        const total = precio * cantidad;
        const detalle = {id:props.id, titulo:props.title, precio:precio, total:total};
        addItem(detalle, cantidad);
        setCompra(true);
    }
    return (
        <>
            <h1>{props.title}</h1>
            <div className="detalle">
                <div className="poster"><img src={props.src} alt="banner" /></div>
                <div className="descripcion">
                    <h4 className="mb-1">{props.tagline}</h4>
                    <h4 className="mb-1" style={{fontWeight:'bold'}}>Descripcion:</h4>
                    <p>{props.overview}</p>
                    <ItemCount onAdd={onAdd} titulo={props.title} precio={precio} />
                </div>
            </div>
        </>
    )
}

export default Detail;