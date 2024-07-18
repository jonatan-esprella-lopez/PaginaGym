import React from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import '../../styles/Instalaciones/Areas.css';

import Funcional from '../../assets/images/CEC/ambienteFuncional.jpg';
import Aerobicos from '../../assets/images/CEC/ambienteAerobicos.jpg';
import Lacteos from '../../assets/images/CEC/ambienteLacteos.jpg';
import FindCenter from '../../assets/images/findCenter.jpg';

const TitleSection = ({ title, highlight, subtitle, linkText, linkHref }) => (
  <div className="container-head-section">
    <div>
      <h5>
        {title} <span>{highlight}</span>
        <div className="underline"></div>
      </h5>
      <p>{subtitle}</p>
    </div>
    <Link to={linkHref}>{linkText}</Link>
  </div>
);

const Card = ({ image, text, link }) => (
  <Link to={link}>
    <article className="estructura-card-3">
      <img src={image} alt={text} className="imagen-instalacion" />
      <p className="Text_instalaciones">{text}</p>
    </article>
  </Link>
);

const Instalaciones = () => (
  <section className="estructura-principal-cards">
    <TitleSection
      title="Experimenta la calidad de entrenamiento en"
      highlight="CEC - FGI"
      linkText="Mas..."
      linkHref="/paginaExtra"
    />
    <div className="container-cards">
      <Card
        image={Funcional}
        text="Zona Entrena y Fortalece"
        link="/Aerobicos"
      />
      <Card image={Lacteos} text="Zona hidrate tu cuerpo" link="/Aerobicos" />
      <Card image={Aerobicos} text="Zona Aeróbica" link="/Aerobicos" />
      <Card image={FindCenter} text="Zona de full kombat" link="/Aerobicos" />
    </div>
  </section>
);

export default Instalaciones;
