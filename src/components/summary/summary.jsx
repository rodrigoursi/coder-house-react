import React from 'react';
import Button from '@mui/material/Button';
import {useNavigate} from "react-router-dom"; 
import "./summary.css";

const Summary = (props) => {
    
    const totalFinal = () => props.subtotal + props.cargo;
    const navigate = useNavigate();
    const handleClickProcesar = () => {
        navigate('../../comprar');
    }
    return (
        <div className='container-summary px-2'>
            <h5 className='mt-2' style={{textAlign:'center'}}>Sumario</h5>
            <ul className='my-2' style={{listStyle:'none', padding:'3%' }}>
                <li className='my-1'>subtotal: ${props.subtotal}</li>
                <li className='my-1' >cargo por servicio: ${props.cargo}</li>
                <li className='my-1' >TOTAL: ${totalFinal()}</li>
            </ul>
            <hr className='my-4' />
            <Button variant="contained" className='buton' onClick={handleClickProcesar} >Procesar compra</Button>
        </div>
    )
}

export default Summary;