import React from "react";
import "../../styles/Instalaciones/Areas.css";
import Aerobicos from "../../assets/images/CEC/ambienteAerobicos.jpg";
import CarouselComponent from "../components-genericos/Carousel-component";
import InfoCard from "./components-aerobics/Info-cards";

const images = Array(8).fill(Aerobicos);

const Aerobico = () => {
  return (
    <div className="gym-details-container">
      <h1>Sala de aerobicos</h1>
      <h2>Entrena tu coordinación y logra una excelente condición física</h2>
      
      <CarouselComponent images={images} />

      <div className="info-container">
        <InfoCard title="Horario" link="#" linkText="Ver gráfico de asistencia">
          <p>Lun a Vie 6h - 23h</p>
          <p>Sáb/Feriados 8h - 18h</p>
          <p>Dom 8h - 16h</p>
        </InfoCard>
=
        <InfoCard title="Accesorios necesarios" link="#" linkText="Comprar en tienda">
          <p>Los materiales necesarios que usarás para llevar tu entrenamiento al siguiente nivel</p>
        </InfoCard>
      </div> 

      <button className="estructure-size estructure-button-1 button-type-4 al">¡Quiero entrenar aquí!</button>
    </div>
  );
};

export default Aerobico;
