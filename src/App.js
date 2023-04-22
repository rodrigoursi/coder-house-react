import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/navbar/navbar.js";
import Home from "./pages/home/home.jsx";
import MiCuenta from "./pages/mi_cuenta/mi_cuenta.jsx";
import Peliculas from "./pages/peliculas/peliculas.jsx";
import Carrito from "./pages/carrito/carrito.jsx";
import Registro from "./pages/registro/registro.jsx";
import Procesar from "./pages/procesar/procesar.jsx";
import { CartProvider } from "./contexts/cartContext.jsx";
import "./App.css";

function App() {
  return (
    <div className="App bg-dark">
      <div className="container">
        <CartProvider>
          <Router>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/:categoria" element={<Home />} />
              <Route path="/miCuenta" element={<MiCuenta />} />
              <Route path="/:categoria/:id" element={<Peliculas />} />
              <Route path="/carrito/" element={<Carrito />} />
              <Route path="/registro/" element={<Registro />} />
              <Route path="/comprar/" element={<Procesar />} />
            </Routes>
          </Router>
        </CartProvider>
      </div>
    </div>
  );
}

export default App;
