import React from "react";
import Item from "../item/item.jsx";

const ItemList = (props) => { console.log(props.proximamente)
    const poster =  props.proximamente ? 'https://www.themoviedb.org/t/p/w220_and_h330_face' : '';
    return (
        props.array.map( arr => <Item key={arr.id} id={arr.id} poster={poster + arr.poster_path} title={arr.title} proximamente={props.proximamente} cat={props.cat}  />)
    )
}

export default ItemList;