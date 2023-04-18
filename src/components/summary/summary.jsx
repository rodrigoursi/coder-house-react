import React from 'react';
import Button from '@mui/material/Button';
import "./summary.css";

const Summary = (props) => {
    let subtotal=0;
    console.log(props.array)
    props.array.forEach((item) => {
        subtotal += item.total;
    })
    return (
        <div className='container-summary'>
            <h5 style={{textAlign:'center'}}>Sumario</h5>
            <ul className='my-2' style={{listStyle:'none', padding:'3%' }}>
                <li className='my-1'>subtotal: ${subtotal}</li>
                <li className='my-1' >cargo por servicio: ${props.cargo}</li>
                <li className='my-1' >TOTAL: ${subtotal + props.cargo}</li>
            </ul>
            <hr className='my-4' />
            <Button variant="contained" className='buton' >Procesar compra</Button>
        </div>
    )
}

export default Summary;