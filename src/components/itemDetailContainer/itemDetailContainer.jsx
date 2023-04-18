import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";  
import Detail from "../itemDetail/itemDetail.jsx";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
    let {id} = useParams();
    const [array, setArray] = useState([]);
    useEffect(()=> {
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=178dfc782364cd132ca835f83b10ebf8&language=es`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setArray(data);
        });
    },[id])
    let url = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    console.log(array);
    return (
        <section className="peliDetalle">
            <Detail title={array.title} src={url + array.poster_path} tagline={array.tagline} overview={array.overview} id={id} />
        </section>
    )
}

export default ItemDetailContainer;