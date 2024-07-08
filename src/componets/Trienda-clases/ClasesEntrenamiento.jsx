// src/components/TiendaClases.js
import React from 'react';
import '../../styles/Tienda-clases/tienda.css';

import Icon1 from "../../assets/images/Tienda-clases/Icono-1-Entrenamiento.svg";

const TiendaClases = () => {
  return (
    <div className="training-search-container">
      <header className="header">
        <h1>TIENDA DE ENTRENAMIENTOS <strong>PRE - PROGRAMADOS</strong></h1>
        <h4>Buscar un tipo de entrenamiento</h4>
        <div className="search-bar">
          <input type="text" placeholder="Escribe aqui" />
          <select>
            <option value="all">Todos</option>
          </select>
          <button>Buscar</button>
        </div>
      </header>
      
      <main>
        <aside className="filters">
          <h2>Mostrar solamente</h2>
          <label><input type="checkbox" checked readOnly /> Presencial</label>
          <label><input type="checkbox" checked readOnly /> Livestream</label>
          <label><input type="checkbox" checked readOnly /> Entrenamiento con licencia</label>
          
          <h2>Rangos de un Alumno</h2>
          <div className="qualifications">
            <div className="qualification">B1</div>
            <div className="qualification">K</div>
            <div className="qualification">G</div>
            <div className="qualification">Ü</div>
          </div>
        </aside>
        
        <section className="training-list">
          <h2>Programas de entrenamiento <strong>Basico</strong></h2>
          <p>Inicia tus rutinas y obten tus objetivos ya!!</p>
          
          <div className="training">
            <img src={Icon1} alt=" Basic 1" />
            <div className="training-info">
              <h3> Basico 1 - Entrenamiento de adaptación</h3>
              <p>Este entrenamiento esta dedicado a descubrir todo lo que necesitas saber sobre su cuerpo, su funcionamiento y el dominio de cada parte, entenderas las rutinas de entrenamiento en este PROGRAMA.</p>
              <div className="tags">
                <span>Presencial</span>
                <span>Livestream</span>
              </div>
            </div>
            <button className="more-info">{">"}</button>
          </div>
          
          <div className="training">
            <img src={Icon1} alt="Jump Start Kids + Kids Jr." />
            <div className="training-info">
              <h3>Basico 2 - Entrenamiento de Fuerza nivel 1</h3>
              <p>Aprende sobre como ganar mas fuerza, Aprenderas los principios basicos de una rutina pre-programada para el maximo rendimiento en la fuerza.</p>
              <div className="tags">
                <span>Presencial</span>
                <span>Livestream</span>
                <span>Licencia de </span>
              </div>
            </div>
            <button className="more-info">{">"}</button>
          </div>
          
        </section>
      </main>
    </div>
  );
};

export default TiendaClases;
