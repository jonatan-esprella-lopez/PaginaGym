// AboutUsPage.js

import React from "react";
import HeaderMain from "../componets/Header_Main";
import FooterMain from "../componets/Footer_Main";
import InstructorCard from "../componets/Nosotros/Card_InstructorNosotros"; // Importamos el componente de la tarjeta del instructor
import "../styles/Nosotros.css";
import Tarjeta from "../componets/Nosotros/Tarjeta-coach";
import Mision from "../componets/Nosotros/Tarjeta-Mision";
import Vision from "../componets/Nosotros/Tarjeta-Vision";
import ValoresCEC from "../componets/Nosotros/Tarjeta-Valores";


import value1Icon from '../assets/images/Nosotros/amor.png'; // Asegúrate de ajustar la ruta del icono
import value2Icon from '../assets/images/Nosotros/amor.png';
import value3Icon from '../assets/images/Nosotros/amor.png';
import value4Icon from '../assets/images/Nosotros/amor.png';
import value5Icon from '../assets/images/Nosotros/amor.png';

function AboutUsPage() {
  // Datos de ejemplo de los instructores
  const instructors = [
    {
      id: 1,
      name: "María González",
      photo: "url_de_la_foto",
      specialization: "Entrenamiento de fuerza",
    },
    {
      id: 2,
      name: "Juan Pérez",
      photo: "url_de_la_foto",
      specialization: "Yoga y meditación",
    },
    // Agrega más instructores según sea necesario
  ];

  return (
    <div>
      <HeaderMain />
      <div className="about-us-container">
        <div className="about-us-section">
          <div className="overlay">
              <h1>¿Quienes somos?</h1>
              <p>Bienvenido a CEC-FGI</p>
              <p>
                  Nuestra historia comenzó en 2020 con una misión clara: proporcionar un espacio donde las personas pudieran
                  transformar sus vidas a través del fitness. Desde nuestros humildes comienzos, hemos crecido para convertirnos
                  en un referente en la comunidad de Cochabamba, gracias a nuestro compromiso con la salud y el bienestar.
              </p>
          </div>
        </div>


        <div className="gym-values-section">
            <div className="overlay">
                <div className="value">
                    <img src={value1Icon} alt="Value 1" />
                    <h3>2020</h3>
                    <p>Compromiso</p>
                </div>
                <div className="value">
                    <img src={value2Icon} alt="Value 2" />
                    <h3>2019</h3>
                    <p>Disciplina</p>
                </div>
                <div className="value">
                    <img src={value3Icon} alt="Value 3" />
                    <h3>2018</h3>
                    <p>Innovación</p>
                </div>
                <div className="value">
                    <img src={value4Icon} alt="Value 4" />
                    <h3>2016</h3>
                    <p>Pasión</p>
                </div>
                <div className="value">
                    <img src={value5Icon} alt="Value 5" />
                    <h3>2014</h3>
                    <p>Excelencia</p>
                </div>
            </div>
        </div>


        
        <div className="about-us-container">
        <div className="cont-Mis-Vis">
          <Mision/>
          <Vision/>
        </div>
        <ValoresCEC/>
  



  

  <div className="about-us-content">
    <h2>Nuestros Instructores</h2>
    <Tarjeta/>
    <Tarjeta/>
    <Tarjeta/>
    <Tarjeta/>
    <div className="instructor-cards-container">
      {instructors.map((instructor) => (
        <InstructorCard
          key={instructor.id}
          name={instructor.name}
          photo={instructor.photo}
          specialization={instructor.specialization}
        />
      ))}
    </div>
  </div>
</div>

      </div>
      <FooterMain />
    </div>
  );
}

export default AboutUsPage;