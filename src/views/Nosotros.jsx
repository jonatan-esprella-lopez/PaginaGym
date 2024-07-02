// AboutUsPage.js

import React from "react";
import HeaderMain from "../componets/Header_Main";
import FooterMain from "../componets/Footer_Main";
import InstructorCard from "../componets/Nosotros/Card_InstructorNosotros"; // Importamos el componente de la tarjeta del instructor
import "../styles/Nosotros.css";
import "../App.css"
import Tarjeta from "../componets/Nosotros/Tarjeta-coach";
import Mision from "../componets/Nosotros/Tarjeta-Mision";
import Vision from "../componets/Nosotros/Tarjeta-Vision";
import ValoresCEC from "../componets/Nosotros/Tarjeta-Valores";




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
            <p>Bienvenido a CEC-FGI</p>
            <h1>¿Quienes somos?</h1>
            <div className="underline-central"></div>
            <p>
                Nuestra historia comenzó en 2020 con una misión clara: proporcionar un espacio donde las personas pudieran
                transformar sus vidas a través del fitness. Desde nuestros humildes comienzos, hemos crecido para convertirnos
                en un referente en la comunidad de Cochabamba, gracias a nuestro compromiso con la salud y el bienestar.
            </p>
          </div>
        </div>


        <div className="cont-valores">            
            <h4>
              Conoce de nuestros valores
              <div className="underline-central"></div>
            </h4>
            <p>
            Somos un equipo de colaboradores trabajando juntos con emociones compartidas, buscando transformar el mundo, a través de la cultura fisica y haciendo la diferencia en cada uno de nosotros y de nuestros clientes.
            </p>
        </div>

        <div className="cont-Mis-Vis">
          <Mision/>
          <Vision/>
        </div>
        
        <ValoresCEC/>





       
        
        <h2>Nuestros Instructores</h2>

      
        <Tarjeta/>
      </div>

      <FooterMain />
    </div>
  );
}

export default AboutUsPage;




// <div className="instructor-cards-container">
//           {instructors.map((instructor) => (
//             <InstructorCard
//               key={instructor.id}
//               name={instructor.name}
//               photo={instructor.photo}
//               specialization={instructor.specialization}
//             />
//           ))}
//         </div>