import React from "react";
import Item from "../item/item.jsx";

const ItemList = (props) => {
    return (
        props.array.map( arr => <Item key={arr.id} id={arr.id} url={props.url} poster={arr.poster_path} title={arr.title} />)
    )
}

export default ItemList;