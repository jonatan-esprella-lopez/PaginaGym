// InstructorCard.js
import React from "react";
import "../../../styles/Nosotros.css";

function InstructorCard({ name, specialization, rating, experience }) {
  return (
    <div className="instructor-card">
      <div className="img-tarjeta-coach">
        <h3>A-33</h3>
      </div>
      <article className="text-tarjeta-coach">
        <h5>
          {name} <p>{rating} ✩</p>
        </h5>
        <p>
          {name}, instructora de {specialization} con {experience} años de experiencia y capacitadora en varios países de Bolivia
        </p>
        <div className="icons-tarjeta-coach">
          <img src="" alt="" />
          <p>Entrenador de : {specialization}</p>
        </div>
      </article>
    </div>
  );
}

export default InstructorCard;
