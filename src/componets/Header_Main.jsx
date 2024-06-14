import React, { useState, ReactNode} from "react";
import { Link } from 'react-router-dom';
import "../App.css"
import Logo from "../assets/images/Logotipo-cec/Entrenamiento-Funcional.png"
import Credenciales from "../componets/ElementosLogin/BotonInicioSesion"
import "../styles/Navegacion/Menu_Nav.css"




function HeaderMain(){
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const links = [
        { path: "/", label: "Inicio" },
        { path: "/Nuestras rutinas", label: "Rutinas" },
        { path: "/Nutricion", label: "Nutricion" },
        { path: "/Nuestros Gimnasios", label: "Gimnasios" },
        { path: "/Evaluaciones", label: "Evaluaciones" },
        { path: "/Nosotros", label: "Nosotros" },
        { path: "/Soporte", label: "Soporte" }
      ];

    const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
    return( 
    <header className="conteiner_header">
        <div className="Contenedor_credenciales"><Credenciales/></div>
            <a href="/">
                <img src={Logo} alt="" className="logo_header"/>
            </a>
        <div className="contenedorNav">
        {/* <button className="menu_toggle" onClick={toggleMenu}>
            &#9776;
        </button> */}
            <nav className={`contenedor_Link_Paginas ${isMenuOpen ? 'open' : ''}`}>
                        
            {links.map(link => (
                <p >
                <Link key={link.path} to={link.path} className={`Link_Paginas`}>
                    {link.label} 
                </Link>
            </p>
            ))}
            </nav>
        </div>
    </header>
    )
}
export default HeaderMain