import React from "react";
import { Link } from "react-router-dom";
import Cart from "../cartWidget/cartWidget";
import ModalForm from "../modalForm/modalForm.jsx";

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="./">
            MiCine
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav" style={{alignItems:"center"}} >
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to='./upcoming' className="nav-link active">
                  Proximamente
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="./candy">
                  Candy
                </Link>
              </li>
              <li className="nav-item">
                <ModalForm />
              </li>
              <li className="nav-item">
                <Link style={{textDecoration:'none'}} to='./carrito'>
                  <Cart />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
