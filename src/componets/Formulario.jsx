import { useState } from "react";

const Formulario = () => {
  const [nombre, setNombre] = useState(""); //estados
  const [Correo, setCorreo] = useState(""); //estados
  const [Contrasena, setContrasena] = useState(""); //estados
  const [Confcontrasena, setConfcontrasena] = useState(" ");

  const [error, setError] = useState(false); //estados
  /*const [CorreoError, setCorreoError] = useState(false)//estados*/

  const validarInput = (e) => {
    /* verás que el navegador realiza una
petición GET y recarga el sitio. Este comportamiento por defecto del botón de tipo
submit podemos prevenirla con el método e.preventDefault().
 */
    e.preventDefault();
    // Validación input
    if (
      nombre === "" ||
      Correo === "" ||
      Contrasena === "" ||
      Confcontrasena === "" ||
      Contrasena !== Confcontrasena
    ) {
      //alert("ERROR EN SUS DATOS")
      setError(true);
      return;
    }

    // Eliminar mensaje de error
    setError(false);
  };

  return (
    <>
      <form onSubmit={validarInput}>
        {error ? <p className="error">Error al ingresar los Datos </p> : null}

        <div className="inputs">
          <input
            className="input1"
            name="Nombre"
            placeholder=" Nombre"
            onChange={(e) => setNombre(e.target.value)}
          />
          <input
            className="input2"
            name="Correo"
            type="email"
            placeholder=" Introduzca su correo"
            onChange={(e) => setCorreo(e.target.value)}
          />
          <input
            className="input3"
            type="Number"
            min="0"
            name="Contrasena"
            onChange={(e) => setContrasena(e.target.value)}
            placeholder="Introduzca contrasena"
          />
          <input
            className="input4"
            type="Number"
            min="0"
            name="confirmarContrasena"
            placeholder=" confirme contrasena"
            onChange={(e) => setConfcontrasena(e.target.value)}
          />
          <button className="btn btn-dark mt-3" type="submit">
            Registrarse
          </button>
        </div>
      </form>
    </>
  );
};

export default Formulario;
