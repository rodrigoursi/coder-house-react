import "./formSesion.css";
import { Formik } from "formik";
import { useState, useEffect, useRef } from "react";

const fuSubmit = (values,resetForm) => {
  console.log(values);
  resetForm();
}

const Formulario = (props) => {console.log('PRIMER',props.campos)
const formikRef = useRef();
  //const campos = { mail: "", contrasenia: "", nombre: "", fecNacimiento: "", };
  //const campos = props.initialValues;
  const [campos,setCampos] = useState({});
  useEffect(() => {
    setCampos(props.campos);
    formikRef.current.resetForm({ values: props.campos });
  }, [props.campos]);

  return (
    <>
      <Formik initialValues={campos}
        onSubmit={(values, {resetForm})=> fuSubmit(values, resetForm)}
        innerRef={formikRef}
        validationSchema={props.Schema}
      >
        {({values, handleChange, handleSubmit, errors}) => (
          <form className="form" onSubmit={handleSubmit}>
            {props.dataForm.map((data, index) => {
              return (
                <div className="mb-3" key={index}>
                  <label htmlFor={data.htmlFor} className="form-label">
                    {data.contenido}
                  </label>
                  <input
                    name={data.name}
                    type={data.type}
                    className="form-control"
                    id={data.id}
                    value={values[data.name]}
                    onChange={handleChange}
                  />
                  {errors[data.name] && <small style={{color:'red', fontSize:'0.5em'}}>{errors[data.name]}</small> }
                </div>
              );
            })}
            <button type="submit" className="btn btn-primary my-3">
              {props.buton}
            </button>
          </form>
        )}
      </Formik>
    </>
  );
};

export default Formulario;
