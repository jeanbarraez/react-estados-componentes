import React from "react";
import { useState } from "react";

const Formularios = ({setmens}) => {
  //colocar los prons del Alert
  const [Datos, setDatos] = useState({
    Nombre: "",
    Correo: "",
    Contrasena: "",
    ConfirContrasena: "",
  });

  const confirmarInput = (e) => {
    e.preventDefault();

    const { Nombre, Correo, Contrasena, ConfirContrasena } = Datos;

    const validarInput = !Nombre || !Correo || !Contrasena || !ConfirContrasena;
    const validarContrasena = Contrasena !== ConfirContrasena;

// el Operador Ternario(validemos input si error es true o error es false."setmens" es parametro que viene de Alert)
    validarInput
      ? setmens({
          error: true,
          mensaje: "Completas los Campos por Favor",
          color: "danger",
        })
      : setmens({
          error: false,
          mensaje: "Cuenta Creada Exitasamente, Gracias",
          color: "success",
        });

    if (validarContrasena) {
      //Contrasena !== ConfirContrasena

      setmens({
        error: true,
        mensaje: "Las contrasenas No coinciden",
        color: "danger",
      });
      return;
    }
    setDatos({
      Nombre: "",
      Correo: "",
      Contrasena: "",
      ConfirContrasena: ""
    });
  };

  /* setTimeout(() => {
    setmens({
      error: false,
      mensaje: "",
      color: "",
    });
  }, 10000);//para que borre el Alert en 10segundo..no es obligatorio */

  // crear cambio de estado a traves de setDatos para actualizar el estado inicial por medio de los inputs,
  //lo que introduzca el usuario

  const CambiEstado = (e) => {
    //express operation, el copia "ALGO"
    setDatos({ ...Datos, [e.target.name]: e.target.value });
    //                      name(input) =       " "(value input)
  };

  return (
    <>
      <form className="formu" onSubmit={confirmarInput}>
        <div className=" for-group mb-3">
          <input
            className="form-control"
            name="Nombre"
            placeholder="Nombre"
            onChange={CambiEstado}
            value={Datos.Nombre}
          />
        </div>

        <div className=" for-group mb-3">
          <input
            className="form-control"
            
            name="Correo"
            type="email"
            placeholder="Ingrese el correo"
            onChange={CambiEstado}
            value={Datos.Correo}
          />
        </div>
        <div className=" for-group mb-3">
          <input
            className="form-control"
            name="Contrasena"
            type="password"
            placeholder="Ingrese la contrasena"
            onChange={CambiEstado}
            value={Datos.Contrasena}
          />
        </div>

        <div className=" for-group mb-3">
          <input
            className="form-control"
            name="ConfirContrasena"
            type="password"
            placeholder="Confirme la contrasena"
            onChange={CambiEstado}
            value={Datos.ConfirContrasena}
          />
        </div>
        <button className="btn  btn-success mt-3" type="submit">
          Registrarse
        </button>
      </form>
    </>
  );
};

export default Formularios;
