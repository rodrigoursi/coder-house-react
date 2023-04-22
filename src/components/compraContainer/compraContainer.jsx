import React, { useState } from 'react';
import {useNavigate} from "react-router-dom"; 
import Form from "../formSesion/formSesion.jsx";
import * as Yup from "yup";
import { useCart } from '../../contexts/cartContext.jsx';
import { db } from "../../firebase/firebaseConfig.js";
import { collection, query, addDoc, serverTimestamp } from "firebase/firestore";
import swal from 'sweetalert';
import "./compraContainer.css";

const objeto = [
  {
    htmlFor: "comprarInputEmail",
    contenido: "Direccion de email",
    type: "email",
    name: "mail",
    id: "comprarInputEmail",
  },
  {
    htmlFor: "comprarInputReMail",
    contenido: "Repita la direccion de email",
    type: "email",
    name: "mail2",
    id: "comprarInputReMail",
  },
  {
    htmlFor: "comprarInputNombre",
    contenido: "Nombres",
    type: "text",
    name: "nombre",
    id: "comprarInputNombre",
  },
  {
    htmlFor: "comprarInputApe",
    contenido: "Apellido",
    type: "text",
    name: "apellido",
    id: "comprarInputApe",
  },
];
const campos = { mail: "", mail2: "", nombre: "", apellido: "", };
const CompraContainer = () => {
  const { cart, clearCart } = useCart();
  const { cargoServicio, calcSubTotal } = useCart();
  //const [orderID, setOrder] = useState('');
  
  const schema = Yup.object({
    mail: Yup.string().email().required('Campo obligatorio'),
    mail2: Yup.string().email().required('Campo obligatorio'),
    nombre: Yup.string().min(4).max(30).required('Campo obligatorio'),
    apellido: Yup.string().min(4).max(30).required('Campo obligatorio'),
  })
  const alerta = (mensaje) => {
    swal(...mensaje)
    .then(() => {
      navigate('./../carrito');
    })
  }

  const navigate = useNavigate();
  const fuSubmit = (values,resetForm) => {
    resetForm();
    if(cart.length > 0) {
      const q = query(collection(db, "miOrdenes"));
      addDoc(q, {
        cliente: values,
        productos: cart,
        total: calcSubTotal() + cargoServicio,
        fecha_alta: serverTimestamp(),
      })
      .then(res => {
        alerta(['CODIGO DE ORDEN', res.id, 'success']) 
        //setOrder(res.id);
        clearCart();
      })
      .catch(err => alerta(['ERROR DESCONOCIDO', err, 'error']));
      //!orderID ? alerta(['CODIGO DE ORDEN', orderID, 'success']) : alerta(['ERROR DESCONOCIDO', 'No se realizo el pedido', 'error']);
    } else alerta( ['CARRITO VACIO', 'Por favor agregue un producto como minimo.', 'error']);
  }

  return (
    <div className="container-form">
      <Form dataForm={objeto} campos={campos} buton="Comprar" Schema={schema} fuSubmit={fuSubmit} />
    </div>
  );
};
export default CompraContainer;
