import React from 'react';
import TrainerImage from '../../assets/images/Rutinas/trainer.png';

const TrainerSection = () => (
  <div className="card-header highlighted-card">
    <img src={TrainerImage} alt="Entrenador" className="trainer-image" />
    <h3>Encuentra un entrenador</h3>
    <div className="contend-card-text">
      <p>
        Un entrenador personal te podrá ayudar a llegar mucho más rápido a tu
        objetivo.
      </p>
      <button className="highlighted-button">Encontrar Entrenador</button>
    </div>
  </div>
);

export default TrainerSection;
