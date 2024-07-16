import React from 'react';

const TrainingCard = ({ title, text }) => (
  <div className="card">
    <div className="titulo-card">
      <h3>{title}</h3>
    </div>
    <p>{text}</p>
  </div>
);

export default TrainingCard;
