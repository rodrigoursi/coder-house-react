import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";  
import ItemList from "../itemList/itemList.jsx";
import "./itemListContainer.css";

const ItemListContainer = () => {
    let {categoria} = useParams(); 
    const [array, setArray] = useState([]);
    useEffect(() => {
        let urlApi;
        categoria ?  urlApi = `https://api.themoviedb.org/3/movie/${categoria}?api_key=178dfc782364cd132ca835f83b10ebf8&language=es&page=1`
        :  urlApi = 'https://api.themoviedb.org/3/movie/now_playing?api_key=178dfc782364cd132ca835f83b10ebf8&language=es&page=1'
        console.log(urlApi);
        fetch(urlApi)
        .then(response => response.json())
        .then(data => {
            setArray(data.results);
        });
    },[categoria]);
    let url = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    return (
        <article className="allMovies">
            <ItemList array={array} url={url} />
        </article>
    )
}

export default ItemListContainer;