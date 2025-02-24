import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";

const Alert = ({color, mensaje}) => {
  console.log('mensaje', mensaje);
  console.log('color', color);
  return (
    <>   
      
       <Badge bg={color}>{mensaje}</Badge>
      
    </>
  );
};

export default Alert;

/*
<Badge bg={color} >
    {children}
</Badge>*/