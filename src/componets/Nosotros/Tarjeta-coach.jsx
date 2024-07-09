// TarjetaCoach.js
import React from "react";
import "../../styles/Nosotros/Tarjeta-coach.css";
import InstructorCard from "./components-generic/card-instructor";

function TarjetaCoach() {
  const coaches = [
    { name: "Veronica Salinas", specialization: "Funcional", rating: 5, experience: 2 },
    { name: "Veronica Salinas", specialization: "Funcional", rating: 5, experience: 2 },
    { name: "Veronica Salinas", specialization: "Funcional", rating: 5, experience: 2 },
    { name: "Veronica Salinas", specialization: "Funcional", rating: 5, experience: 2 }
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
