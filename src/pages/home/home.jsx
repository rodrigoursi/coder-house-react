import Carrusel from "../../components/carousel/carousel.jsx";
import ItemListContainer from "../../components/itemListContainer/itemListContainer.jsx";
import carrusel1 from "../../image/1.jpg";
import carrusel2 from "../../image/2.jpg";
import carrusel3 from "../../image/3.jpg";

const Home = () => {
    return (
        <>
        <Carrusel img1={carrusel1} img2={carrusel2} img3={carrusel3} titulo1='911' titulo2='The Resident' titulo3='The Walking Dead' />
        <ItemListContainer />
        </>
    )
}

export default Home;