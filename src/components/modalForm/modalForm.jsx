import { Link, useNavigate } from "react-router-dom";
import IniciarSesion from "../formSesion/formSesion.jsx";
const ModalForm = () => {
  const objeto = [
    {
      htmlFor: "loginInputEmail",
      contenido: "Direccion de email",
      type: "email",
      id: "loginInputEmail",
    },
    {
      htmlFor: "loginInputPassword",
      contenido: "Contraseña",
      type: "password",
      id: "loginInputPassword",
    },
  ];

  const navigate = useNavigate();

  const handleClickRegistrarse = () => {
    navigate("./registro");
  };

  return (
    <>
      <Link className="nav-link active" data-bs-toggle="modal" to="#modalForm">
        Mi cuenta
      </Link>

      <div
        className="modal fade"
        id="modalForm"
        tabIndex="-1"
        aria-labelledby="modalFormLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="modalFormLabel">
                INICIO DE SESION
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              {" "}
              <IniciarSesion dataForm={objeto} buton={"Iniciar sesion"} />{" "}
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Cerrar
              </button>
              <Link
                className="btn btn-primary"
                data-bs-dismiss="modal"
                onClick={handleClickRegistrarse}
              >
                Registrarte
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalForm;
