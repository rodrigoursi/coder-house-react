import Form from "../formSesion/formSesion.jsx";
import * as Yup from "yup";
import "./registerContainer.css";
const objeto = [
  {
    htmlFor: "registerInputEmail",
    contenido: "Direccion de email",
    type: "email",
    name: "mail",
    id: "registerInputEmail",
  },
  {
    htmlFor: "registerInputPass",
    contenido: "Contraseña",
    type: "password",
    name: "contrasenia",
    id: "registerInputPass",
  },
  {
    htmlFor: "registerInputNombre",
    contenido: "Nombre y apellido",
    type: "text",
    name: "nombre",
    id: "registerInputNombre",
  },
  {
    htmlFor: "registerInputDate",
    contenido: "Fecha de nacimiento",
    type: "date",
    name: "fecNacimiento",
    id: "registerInputDate",
  },
];
const campos = { mail: "", contrasenia: "", nombre: "", fecNacimiento: "", };
const Registro = () => {
    const schema = Yup.object({
        mail: Yup.string().email().required('Campo obligatorio'),
        contrasenia: Yup.string().min(4).max(8).required('Campo obligatorio'),
        nombre: Yup.string().min(4).max(30).required('Campo obligatorio'),
        fecNacimiento: Yup.date().required('Campo obligatorio'),
    });
    const fuSubmit = (values,resetForm) => {
      console.log(values);
      resetForm();
    }
  return (
    <div className="container-form">
      <Form dataForm={objeto} campos={campos} buton="Registrarme" Schema={schema} fuSubmit={fuSubmit} />
    </div>
  );
};
export default Registro;
