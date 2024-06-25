import React from 'react';
import '../styles/Nutricion.css';

import {Link} from 'react-router-dom'

import Header from "../componets/Header_Main"
import Footer from "../componets/Footer_Main"


import ImagenHipertrofia from "../assets/images/Nutricion/NutricionHipertrofia.webp"
import Proteina from "../assets/images/Nutricion/Proteina.svg"
import Carbohidrato from "../assets/images/Nutricion/Carbohidrato.svg"
import Grasas from "../assets/images/Nutricion/Grasa.svg"



 
function NutricionPage() {
  return (
    <div>
      <Header/>
      
      <section className='contenedor_prin_Nutricion'>
        <h1 className='Titulo_Principal'>Planes Pre-armados</h1>
        
    <article class="plan">
      <div class="plan-header">Plan proteico</div>
        <img src={ImagenHipertrofia} alt="Aumenta tu masa muscular"/>
        <h3>Aumenta tu masa muscular</h3>
        <p>Un plan nutricional diseñado para personas que buscan aumentar su masa muscular a través de una dieta rica en proteínas y calorías controladas.</p>
        <div class="plan-details">
            <div><i class="fas fa-drumstick-bite"></i> <strong>Proteínas:</strong> 150g por día</div>
            <div><i class="fas fa-bread-slice"></i> <strong>Carbohidratos:</strong> 300g por día</div>
            <div><i class="fas fa-cheese"></i> <strong>Grasas:</strong> 80g por día</div>
            <div><i class="fas fa-fire"></i> <strong>Calorías:</strong> 3000 kcal por día</div>
        </div>
        <button>Más Información</button>
    </article>

    <article class="plan">
        <div class="plan-header">Plan bajo en grasa</div>
        <img src={ImagenHipertrofia} alt="Pérdida de grasa"/>
        <h3>Pérdida de grasa</h3>
        <p>Un plan nutricional enfocado en la reducción de grasa corporal mediante un déficit calórico y la ingesta de alimentos saludables.</p>
        <div class="plan-details">
            <div><i class="fas fa-drumstick-bite"></i> <strong>Proteínas:</strong> 120g por día</div>
            <div><i class="fas fa-bread-slice"></i> <strong>Carbohidratos:</strong> 200g por día</div>
            <div><i class="fas fa-cheese"></i> <strong>Grasas:</strong> 60g por día</div>
            <div><i class="fas fa-fire"></i> <strong>Calorías:</strong> 2000 kcal por día</div>
        </div>
        <button>Más Información</button>
    </article>

    <article class="plan">
        <div class="plan-header">Plan de tonificación</div>
        <img src={ImagenHipertrofia} alt="Tonificación"/>
        <h3>Tonificación</h3>
        <p>Un plan equilibrado que ayuda a mejorar la definición muscular y mantener una buena salud general.</p>
        <div class="plan-details">
            <div><i class="fas fa-drumstick-bite"></i> <strong>Proteínas:</strong> 130g por día</div>
            <div><i class="fas fa-bread-slice"></i> <strong>Carbohidratos:</strong> 250g por día</div>
            <div><i class="fas fa-cheese"></i> <strong>Grasas:</strong> 70g por día</div>
            <div><i class="fas fa-fire"></i> <strong>Calorías:</strong> 2500 kcal por día</div>
        </div>
        <button>Más Información</button>
    </article>

    <article class="plan">
        <div class="plan-header">Plan saludable</div>
        <img src={ImagenHipertrofia} alt="Salud normal"/>
        <h3>Salud normal (Alimentación cotidiana)</h3>
        <p>Un plan nutricional para mantener un estilo de vida saludable y una dieta balanceada.</p>
        <div class="plan-details">
            <div><i class="fas fa-drumstick-bite"></i> <strong>Proteínas:</strong> 100g por día</div>
            <div><i class="fas fa-bread-slice"></i> <strong>Carbohidratos:</strong> 300g por día</div>
            <div><i class="fas fa-cheese"></i> <strong>Grasas:</strong> 70g por día</div>
            <div><i class="fas fa-fire"></i> <strong>Calorías:</strong> 2200 kcal por día</div>
        </div>
        <button>Más Información</button>
    </article>
      </section>
      <section>
        <div>
          
        </div>
      </section>
        <Footer/>
    </div>
  );
}

export default NutricionPage;
