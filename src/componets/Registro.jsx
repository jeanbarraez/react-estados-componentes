import React, { useState } from "react";

import SocialButton from "./SocialButton";
import Alert from "./Alert";
import Formularios from "./Formularios";

const Registro = ({ facebook, gitHub, LinkedinIn}) => {
  const [mens, setmens] = useState({
    error: "",
    mensaje: "",
    color: "",
  });

  //console.log('MENS', mens)

  return (
    <>
      <div className="padre">
        <h1>CREAR CUENTA</h1>
        <SocialButton facebook={facebook} gitHub={gitHub} linkedin={LinkedinIn} />
        <p>O Usa tu email para Registrarte</p>
        <Formularios
          setmens={setmens} //copia del estado de Alert y dentro seteo el setalert(setmens)
        />
         {mens.mensaje && <Alert color ={mens.color} mensaje={mens.mensaje}/>} 

        {/* si es true ,devuelve el componente Alert */}
      </div>
    </>
  );
};

export default Registro;
