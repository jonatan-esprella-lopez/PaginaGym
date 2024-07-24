import React from 'react';
import PropTypes from 'prop-types';

const PlanCard = ({ planHeader, imageSrc, altText, title, description, proteins, carbs, fats, calories }) => (
  <article className="plan structure-card-1">
    <div className='contenedor-1-nutri'>
      <div className="plan-header">{planHeader}</div>
      <img src={imageSrc} alt={altText} />
      <h3>{title}</h3>
    </div>
    <div className='contenedor-2-nutri'>
      <p className="plan-descripcion">{description}</p>
      <div className="cont-valor-nuttricional">
        <div className="plan-details">
          <p><strong>Proteínas:</strong> {proteins}</p>
          <p><strong>Carbohidratos:</strong> {carbs}</p>
          <p><strong>Grasas:</strong> {fats}</p>
          <p><strong>Calorías:</strong> {calories}</p>
        </div>
        <button className='button-nutricion'>Más Información</button>
      </div>
    </div>
  </article>
);

PlanCard.propTypes = {
  planHeader: PropTypes.string.isRequired,
  imageSrc: PropTypes.string.isRequired,
  altText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  proteins: PropTypes.string.isRequired,
  carbs: PropTypes.string.isRequired,
  fats: PropTypes.string.isRequired,
  calories: PropTypes.string.isRequired,
};

export default PlanCard;
