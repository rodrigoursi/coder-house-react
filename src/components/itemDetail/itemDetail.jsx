import React from "react";
import "./itemDetail.css";
import ItemCount from "../itemCount/itemCount.jsx";

const Detail = (props) => {
    console.log(props.title);
    return (
        <>
            <h1>{props.title}</h1>
            <div className="detalle">
                <div className="poster"><img src={props.src} alt="banner" /></div>
                <div className="descripcion">
                    <h4 className="mb-5">{props.tagline}</h4>
                    <h4 className="mb-4" style={{fontWeight:'bold'}}>Descripcion:</h4>
                    <p>{props.overview}</p>
                    <ItemCount />
                </div>
            </div>
        </>
    )
}

export default Detail;