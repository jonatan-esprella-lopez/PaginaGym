// InstructorCard.js

import React from "react";
import "../../styles/Nosotros.css";

function InstructorCard({ name, photo, specialization }) {
  return (
    <div className="instructor-card">
      <img src={photo} alt={name} className="instructor-photo" />
      <div className="instructor-info">
        <h3>{name}</h3>
        <p>{specialization}</p>
      </div>
    </div>
  );
}

export default InstructorCard;
