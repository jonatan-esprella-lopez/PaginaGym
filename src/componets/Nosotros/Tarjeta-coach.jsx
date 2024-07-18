
import React from "react";
import "../../styles/Nosotros/Tarjeta-coach.css";
import InstructorCard from "./components-generic/card-instructor";

function TarjetaCoach() {
  const coaches = [
    { name: "Jonatan Esprella", specialization: "Funcional", rating: 3.6, experience: 2 },
    { name: "Pablo Escobar", specialization: "Full kombat", rating: 4.8, experience: 2 },
    { name: "Emilia sanchez", specialization: "Flexibilidad", rating: 2.6, experience: 2 },
    { name: "Veronica Salinas", specialization: "BT-90", rating: 5, experience: 2 }
  ];

  return (
    <div className="contenedor-coach">
      {coaches.map((coach, index) => (
        <InstructorCard
          key={index}
          name={coach.name}
          specialization={coach.specialization}
          rating={coach.rating}
          experience={coach.experience}
        />
      ))}
    </div>
  );
}

export default TarjetaCoach;
