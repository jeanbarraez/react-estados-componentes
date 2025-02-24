import React from "react";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
const SocialButton = ({ facebook, gitHub, LinkedinIn }) => {
  return (
    <>
      <div className="redes-sociales">
        <div className="Icons">{(facebook = <FaFacebook size={30}/>)}</div>
        <div className="Icons">{(gitHub = <FaGithub size={30}/>)}</div>
        <div className="Icons">{(LinkedinIn = <FaLinkedinIn size={30} />)}</div>
      </div>
    </>
  );
};

export default SocialButton;
