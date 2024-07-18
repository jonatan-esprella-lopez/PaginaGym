import React from 'react';
import '../../styles/Nosotros/Tarjeta-mision.css';
import Visione from '../../assets/images/Nosotros/Vision.jpg';

const visionText = `
  Queremos ser reconocidos como el gimnasio líder en nuestra comunidad,
  ofreciendo programas de entrenamiento innovadores, servicios de alta
  calidad y un ambiente acogedor que inspire a nuestros miembros a vivir
  vidas más saludables y activas.
`;

function Vision() {
  return (
    <section className="estructure-card-1 cont-Mision-Nos">
      <div className="cont-Img-Mis">
        <img src={Visione} alt="Imagen de la visión" />
      </div>
      <h2>Nuestra Visión</h2>
      <div className="cont-Mision-text">
        <p>{visionText}</p>
      </div>
    </section>
  );
}

export default Vision;
