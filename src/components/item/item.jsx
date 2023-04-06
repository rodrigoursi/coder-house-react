import React from "react";
import {Link} from "react-router-dom"; 

const Item = (props) => {
    return (
        <div className="card-movie" key={props.id}>
            <Link to={`../../peliculas/${props.id}`}>
                <img src={props.url + props.poster} alt="poster" />
                <h6>{props.title}</h6>
            </Link>
        </div>
    )
}

export default Item;