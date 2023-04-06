import React, {useEffect, useState} from "react";
import img4 from "../../image/4.png";
import "./cardMovie.css";



const TarjetaPeli = () => {
    const [cartelera, setCartelera] = useState([]);
    useEffect(() => {
        //let url = 'https://api.themoviedb.org/3/movie/upcoming?api_key=178dfc782364cd132ca835f83b10ebf8&language=es&page=1';
        let url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=178dfc782364cd132ca835f83b10ebf8&language=es&page=2'
        fetch(url)
        .then(response => response.json())
        .then(data => {
            setCartelera(data.results);
        });
    },[]);
    let path = 'https://www.themoviedb.org/t/p/w220_and_h330_face';
    console.log(cartelera)
    return (
        <section className="allMovies">
           {
                cartelera.map(cartel => {
                    return (
                    <div className="card-movie" key={cartel.id}>
                        <img src={path+cartel.poster_path} alt="poster" />
                        <h6>{cartel.title}</h6>
                    </div>
                    );
                })
           }
            <div className="card-movie">
                <img src={img4} alt="pelicula" />
                <h5>Jurassic Park</h5>
            </div>
        </section>
    );
} 

export default TarjetaPeli;