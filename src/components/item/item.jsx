import React from "react";
import {Link} from "react-router-dom"; 

const Item = (props) => {
    const ruta =  `../../${props.cat}/${props.id}`;
    return (
        <div className="card-movie" key={props.id}>
            {/* <Link to={`../../peliculas/${props.id}`}> */}
            <Link to={ruta}>
                <img src={props.poster} alt="poster" />
                <h6>{props.title}</h6>
            </Link>
        </div>
    )
}

export default Item;