import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";  
import Detail from "../itemDetail/itemDetail.jsx";
import { db } from "../../firebase/firebaseConfig.js";
import { collection, query, getDocs, where, documentId } from "firebase/firestore";
import "./itemDetailContainer.css";

const ItemDetailContainer = () => {
    let {id, categoria} = useParams();
    const [array, setArray] = useState([]);

    const q = query(collection(db, "miCine"), where(documentId(), '==', id));

    useEffect(()=> {
        if(categoria === 'upcoming') {
            let url = `https://api.themoviedb.org/3/movie/${id}?api_key=178dfc782364cd132ca835f83b10ebf8&language=es`;
            fetch(url)
            .then(response => response.json())
            .then(data => {
                setArray(data);
            });
        } else {
            const getArticulo = async () => {
                let objConId = {};
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    objConId = {...doc.data(), id: doc.id};
                });
                setArray(objConId);
            }
            getArticulo();
        }
        
    },[id, categoria])

    /*
    useEffect(()=> {
        let url = `https://api.themoviedb.org/3/movie/${id}?api_key=178dfc782364cd132ca835f83b10ebf8&language=es`;
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setArray(data);
        });
    },[id])*/

    const url = categoria === 'upcoming' ? 'https://www.themoviedb.org/t/p/w220_and_h330_face' : '';
    
    return (
        <section className="peliDetalle">
            <Detail title={array.title} precio={array.precio} src={url + array.poster_path} tagline={array.tagline} overview={array.overview} id={id} />
        </section>
    )
}

export default ItemDetailContainer;