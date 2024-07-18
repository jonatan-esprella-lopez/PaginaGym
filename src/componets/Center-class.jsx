import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Clases/Programas.css';
import Entrenamiento from '../assets/images/Clases/Entrenamiento.jpg';
import FullKombat from '../assets/images/Clases/FullKombat.jpg';
import Fexibilidad from '../assets/images/Clases/Fexibilidad.jpg';
import Duracion from '../assets/images/duracion-clases.svg';
import Intensidad from '../assets/images/intensidad.svg';

const Card = ({ image, title, duration, intensity, description }) => (
  <article className="estructura-card-2">
    <div className="contenedor-imagen-1">
      <img src={image} alt={title} className="imagen-instalacion" />
    </div>

    <div>
      <div className="Clases-titulo-container">{title}</div>
      <div className="contenido-clases-detalle">
        <div className="detalle-clase">
          <img src={Duracion} alt="Duración" className="Iconos-detalle" />
          <p className="detalle-title">Duración</p>
          <p className="detalle-descripcion">{duration}</p>
        </div>
        <div className="detalle-clase">
          <img src={Intensidad} alt="Intensidad" className="Iconos-detalle" />
          <p className="detalle-title">Intensidad</p>
          <p className="detalle-descripcion">{intensity}</p>
        </div>
      </div>
      <div className="contenedor-Apartador">
        <hr className="Apartador" />
      </div>
      <div className="contenedor-Texto">
        <p className="Text-programas">{description}</p>
      </div>
    </div>
  </article>
);

const ProgramaMain = () => (
  <section className="estructura-principal-cards">
    <div className="container-head-section">
      <div>
        <h5>
          Conoce los tipos de entrenamiento en <span>CEC - FGI</span>
          <div className="underline"></div>
        </h5>
      </div>
      <Link to="/paginaExtra">Mas...</Link>
    </div>
    <section className="container-cards">
      <Card
        image={Entrenamiento}
        title="Entrenamiento Funcional"
        duration="30/40/50 min"
        intensity="Alta"
        description="Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición"
      />
      <Card
        image={FullKombat}
        title="Aeróbicos"
        duration="30/40/50 min"
        intensity="Alta"
        description="Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición"
      />
      <Card
        image={Fexibilidad}
        title="Flexibilidad"
        duration="30/40/50 min"
        intensity="Alta"
        description="Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición"
      />
    </section>
  </section>
);

export default ProgramaMain;
