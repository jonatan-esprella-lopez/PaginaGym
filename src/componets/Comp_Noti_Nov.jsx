import React from 'react';
import '../App.css';
import '../styles/home_styles.css';

const TitleSection = ({ title, highlight }) => (
  <div className="container-head-section1">
    <div className="head-section-underline">
      <p>
        {title} <span>{highlight}</span>
      </p>
      <div className="underline"></div>
    </div>
  </div>
);

const SubscriptionForm = () => (
  <div className="contenedor-Registro-Home">
    <input
      type="serch"
      placeholder="Ingresá tu correo electrónico"
      id="input-correo"
      className="input-correo-home"
    />
    <button className="button-type-4 estructura-size2">Registrate</button>
  </div>
);

const Novedades = () => (
  <section className="contenedor-Registro-Main">
    <TitleSection
      title="Recibe las novedades y promociones exclusivas de"
      highlight="CEC-FGI."
    />
    <SubscriptionForm />
  </section>
);

export default Novedades;
