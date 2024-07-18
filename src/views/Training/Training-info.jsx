import React from 'react';
import '../../styles/Rutinas/TrainingInfo.css';
import Entrenamiento from "../../assets/images/Rutinas/Entrenamiento1.jpeg"; 
import FooterMain from '../../componets/Footer_Main';
import HeaderMain from '../../componets/Header_Main';

const TrainingInfo = () => {
  return (
    <>
      <HeaderMain/>
      <div className="training-info-container">
        <h2>Detalles del Entrenamiento</h2>
        <div className="training-details">
          <img src={Entrenamiento} alt="Entrenamiento" className="training-image" />
          <div className="training-text">
            <h3>CHIPPER</h3>
            <p>
              El entrenamiento CHIPPER es una secuencia de ejercicios que se realizan en un orden específico, 
              completando una serie de repeticiones antes de pasar al siguiente ejercicio.
            </p>
            <h4>Duración:</h4>
            <p>30/40 minutos</p>
            <h4>Intensidad:</h4>
            <p>Moderada</p>
            <h4>Beneficios:</h4>
            <ul>
              <li>Mejora la resistencia cardiovascular</li>
              <li>Incrementa la fuerza y la resistencia muscular</li>
              <li>Quema calorías de manera efectiva</li>
            </ul>
            <h4>Recomendaciones:</h4>
            <p>
              Asegúrate de calentar adecuadamente antes de comenzar el entrenamiento y enfriar después de finalizar.
              Mantén una hidratación adecuada durante toda la sesión.
            </p>
          </div>
        </div>
        <button className="estructure-size estructure-button-1 button-type-4" onClick={() => window.history.back()}>Regresar</button>
      </div>
      <FooterMain/>
    </>
  );
};

export default TrainingInfo;
