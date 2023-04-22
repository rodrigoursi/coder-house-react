import {useState} from "react";
import Button from '@mui/material/Button';
import "./itemCount.css"


const ItemCount = (props) => {
    const [count,setCount] = useState(0);
    const sumar = () => {
        setCount(count+1);
    }

    const restar = () => {
        count > 0 && setCount(count-1);    
    }


    return (
        <div className="containerCount mx-3" id="containerCount">
            <div className="precio">
                <h6>Precio: $ {props.precio}</h6>
            </div>
            <div className="count">
                <div className="mx-2">
                    <Button variant="contained" onClick={restar} >-</Button>
                    <h6>{count}</h6>
                    <Button variant="contained" onClick={sumar}>+</Button>
                </div>
                <Button variant="contained" className="buttoon mx-2" onClick={() => props.onAdd(count)}>Agregar</Button>
            </div>
        </div>
    )
}

export default ItemCount;