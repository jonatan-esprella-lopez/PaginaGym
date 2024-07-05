import React from 'react';
import '../../styles/Instalaciones/Areas.css';

const Aerobico = () => {
  return (
    <div className="gym-details-container">
      <h1>Gimnasio</h1>
      <h2>Cuernavaca Centro</h2>
      <img 
        src="path-to-your-image.jpg" 
        alt="Gym Cuernavaca Centro" 
        className="gym-image"
      />
      <div className="info-container">
        <div className="info-card">
          <h3>Horario</h3>
          <p>Lun a Vie 6h - 23h</p>
          <p>Sáb/Feriados 8h - 18h</p>
          <p>Dom 8h - 16h</p>
          <a href="#">Ver gráfico de asistencia</a>
        </div>
        <div className="info-card">
          <h3>Dirección</h3>
          <p>Boulevard Benito Juarez No. 32-A Antes 604 - Miguel Hidalgo Cuernavaca, MOR - 62040</p>
          <a href="#">Ver mapa</a>
        </div>
      </div>
      <button className="cta-button">¡Quiero entrenar aquí!</button>
    </div>
  );
};

export default Aerobico;
