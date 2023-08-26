import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Badge from "react-bootstrap/Badge";
const Alert = ({children, color}) => {
  
  return (
    <>
     
        
       {/* <div className={`alert alert-${color}`}>{mensaje}</div>*/}
       <Badge bg={color}>{children}
      </Badge>
    </>
  );
};

export default Alert;
