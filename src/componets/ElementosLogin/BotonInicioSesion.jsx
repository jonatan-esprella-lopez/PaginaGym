import React from "react";
import { Link } from 'react-router-dom';

import "../../App.css"
function LoginRegister(){
    const links = [
        { path: "/login", label: "Iniciar sesion", specialClass: "button-type-1 estructure-button-1 estructure-size" },
        { path: "/registro", label: "Registro", specialClass: "button-type-2 estructure-button-1 estructure-size" }
      ];

    
    return( 
        <> 
        {links.map(link => (
            <p >
            <Link key={link.path} to={link.path} className={`${link.specialClass || ''}`}>
                {link.label} 
            </Link>
          </p>
        ))}
        </>
    )
}
export default LoginRegister