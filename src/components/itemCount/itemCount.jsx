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
            <div className="">
                <Button variant="contained" onClick={restar} className="buttoon">-</Button>
                <h6>{count}</h6>
                <Button variant="contained" onClick={sumar}>+</Button>
            </div>
            <Button variant="contained" onClick={() => props.onAdd(count)}>Agregar</Button>
        </div>
    )
}

export default ItemCount;