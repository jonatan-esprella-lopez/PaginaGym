import React, { useState, useRef } from 'react';
import '../styles/Navegacion/menu-principal.css';
import { Link } from 'react-router-dom';
import Logo from '../assets/images/Logotipo-cec/logotipo.svg';
import Credenciales from './Elements-login/Boton-inicio-sesion';

function HeaderMain() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const links = [
    { path: '/', label: 'Inicio' },
    { path: '/Nuestras rutinas', label: 'Rutinas' },
    { path: '/Nutricion', label: 'Nutricion' },
    { path: '/Nuestros Gimnasios', label: 'Gimnasios' },
    { path: '/Evaluaciones', label: 'Evaluaciones' },
    { path: '/Nosotros', label: 'Nosotros' },
    { path: '/Soporte', label: 'Soporte' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event) => {
    setIsMenuOpen(false);
  };

  return (
    <header className="conteiner_header">
      <div className="Contenedor_credenciales">
        <Credenciales />
        <button className="menu-button" onClick={toggleMenu}>
          ☰
        </button>
      </div>
      <Link to="/" aria-label="Ir a la página de inicio">
        <img
          src={Logo}
          alt="Logotipo CEC-FGI"
          className="logo_header"
          loading="eager"
        />
      </Link>
      <div className="contenedorNav">
        <nav
          className={`contenedor_Link_Paginas ${isMenuOpen ? 'open' : ''}`}
          onClick={handleClickOutside}
        >
          {links.map((link) => (
            <p key={link.path}>
              <Link to={link.path} className="Link_Paginas">
                {link.label}
              </Link>
            </p>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default HeaderMain;
