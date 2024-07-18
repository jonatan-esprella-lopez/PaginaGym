import React from 'react';
import '../../styles/PaginasExtra/UnderConstruction.css';

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="content">
        <h1>Esta página está en construcción</h1>
        <p>
          Estamos trabajando arduamente para traerte el mejor contenido. ¡Vuelve
          pronto!
        </p>
        <div className="loader"></div>
      </div>
    </div>
  );
};

export default UnderConstruction;
