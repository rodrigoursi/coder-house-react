import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";  
import ItemList from "../itemList/itemList.jsx";
import "./itemListContainer.css";
import { db } from "../../firebase/firebaseConfig.js";
import { collection, query, getDocs, where } from "firebase/firestore";



const ItemListContainer = () => {
    let {categoria} = useParams(); 
    console.log(categoria)
    let proximamente = categoria === 'upcoming' ? true : false;
    categoria = categoria ? categoria : 'peliculas';
    const [array, setArray] = useState([]);
    
    /*
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
    },[categoria]);*/

    useEffect(() => {
        let urlApi;
        if(proximamente) {
            urlApi = `https://api.themoviedb.org/3/movie/${categoria}?api_key=178dfc782364cd132ca835f83b10ebf8&language=es&page=1`
            fetch(urlApi)
            .then(response => response.json())
            .then(data => {
            setArray(data.results);
            });
        } else {
            /**
             * esta funcion me muestra todos mis articulos.
             */
            /*const getTodosArticulos = async () => {
                let arrayConId = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    arrayConId.push({...doc.data(), id: doc.id})
                });
                setArray(arrayConId);
            }*/
            const getCatArticulos = async () => { 
                //categoria = categoria ? categoria : 'peliculas';
                const q = query(collection(db, "miCine"), where('category', '==', categoria));
                let arrayConId = [];
                const querySnapshot = await getDocs(q);
                querySnapshot.forEach((doc) => {
                    // doc.data() is never undefined for query doc snapshots
                    //console.log(doc.id, " => ", doc.data());
                    arrayConId.push({...doc.data(), id: doc.id})
                });
                setArray(arrayConId);

            }
            getCatArticulos();
        }    
        console.log(categoria)     
    },[categoria, proximamente]);
    return (
        <article className="allMovies">
            <ItemList array={array} proximamente={proximamente} cat={categoria} />
        </article>
    )
}

export default ItemListContainer;