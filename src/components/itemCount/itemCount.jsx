import {useState} from "react";
import Button from '@mui/material/Button';
import "./itemCount.css"

const ItemCount = () => {
    let count = 0;
    const [number,setNumber] = useState(0);
    return (
        <div className="containerCount" id="containerCount">
            <div className="">
                <Button variant="contained" className="buttoon">-</Button>
                <h6>{number}</h6>
                <Button variant="contained">+</Button>
            </div>
            <Button variant="contained">Agregar</Button>
        </div>
    )
}

export default ItemCount;