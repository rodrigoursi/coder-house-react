import React from "react";

const Carrusel = (props) => {
    return (
        <aside>
          <div id="carruselInicio" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carruselInicio"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carruselInicio"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carruselInicio"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div className="carousel-inner">
              <div className="carousel-item active" data-bs-interval="5000">
                <img src={props.img1} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>PROXIMAMENTE</h5>
                  <p>
                    {props.titulo1}
                  </p>
                </div>
              </div>
              <div className="carousel-item" data-bs-interval="5000">
                <img src={props.img2} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>ESTRENO</h5>
                  <p>
                  {props.titulo2}
                  </p>
                </div>
              </div>
              <div className="carousel-item">
                <img src={props.img3} className="d-block w-100" alt="..." />
                <div className="carousel-caption d-none d-md-block">
                  <h5>ESTRENO</h5>
                  <p>
                  {props.titulo3}
                  </p>
                </div>
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#carruselInicio"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#carruselInicio"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </aside>
        
    );
};

export default Carrusel;