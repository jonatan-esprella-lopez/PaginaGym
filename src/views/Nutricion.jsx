import React from 'react';
import '../styles/Nutricion.css';

import {Link} from 'react-router-dom'

import Header from "../componets/Header_Main"
import Footer from "../componets/Footer_Main"

import image from "../assets/images/Nutricion/NutricionHipertrofia.webp"
import ImagenHipertrofia from "../assets/images/Nutricion/NutricionHipertrofia.webp"
import Proteina from "../assets/images/Nutricion/Proteina.svg"
import Carbohidrato from "../assets/images/Nutricion/Carbohidrato.svg"
import Grasas from "../assets/images/Nutricion/Grasa.svg"


import planImage from '../assets/images/Nutricion/Proteina.svg'; // Asegúrate de tener la imagen en la ruta correcta
import checkIcon from '../assets/images/Nutricion/Proteina.svg'; // Asegúrate de tener el icono en la ruta correcta
import whatsappIcon from '../assets/images/Nutricion/Proteina.svg'; // Asegúrate de tener el icono en la ruta correcta



 
function NutricionPage() {
  return (
    <div>
      <Header/>
      <h1 className='Titulo_Principal'>Planes Pre-armados</h1>
      <section className='cont-general-Nutricion'>

        <article class="plan">
          <p class="plan-header">Plan proteico</p>
          <img src={ImagenHipertrofia} alt="Aumenta tu masa muscular"/>
          <h3>Aumenta tu masa muscular</h3>
          <p className="plan-descripcion">Un plan nutricional diseñado para personas que buscan aumentar su masa muscular a través de una dieta rica en proteínas y calorías controladas.</p>
          <div className="cont-valor-nuttricional">
            <div class="plan-details">
                <p> <strong>Proteínas:</strong> 150g por día</p>
                <p> <strong>Carbohidratos:</strong> 300g por día</p>
                <p> <strong>Grasas:</strong> 80g por día</p>
                <p> <strong>Calorías:</strong> 3000 kcal por día</p>
            </div>
            <button>Más Información</button>
          </div>
        </article>

        <article class="plan">
            <div class="plan-header">Plan bajo en grasa</div>
            <img src={ImagenHipertrofia} alt="Pérdida de grasa"/>
            <h3>Pérdida de grasa</h3>
            <p className="plan-descripcion">Un plan nutricional enfocado en la reducción de grasa corporal mediante un déficit calórico y la ingesta de alimentos saludables.</p>
            <div className="cont-valor-nuttricional">
              <div class="plan-details">
                  <p> <strong>Proteínas:</strong> 120g por día</p>
                  <p> <strong>Carbohidratos:</strong> 200g por día</p>
                  <p> <strong>Grasas:</strong> 60g por día</p>
                  <p> <strong>Calorías:</strong> 2000 kcal por día</p>
              </div>
            
            <button>Más Información</button>
            </div>
        </article>

        <article class="plan">
            <div class="plan-header">Plan de tonificación</div>
            <img src={ImagenHipertrofia} alt="Tonificación"/>
            <h3>Tonificación</h3>
            <p className="plan-descripcion">Un plan equilibrado que ayuda a mejorar la definición muscular y mantener una buena salud general.</p>
            <div className="cont-valor-nuttricional">
              <div class="plan-details">
                  <p> <strong>Proteínas:</strong> 130g por día</p>
                  <p> <strong>Carbohidratos:</strong> 250g por día</p>
                  <p> <strong>Grasas:</strong> 70g por día</p>
                  <p> <strong>Calorías:</strong> 2500 kcal por día</p>
              </div>
              <button>Más Información</button>
              </div>
        </article>

        <article class="plan">
            <div class="plan-header">Plan saludable</div>
            <img src={ImagenHipertrofia} alt="Salud normal"/>
            <h3>Nutricion Tradicional</h3>
            <p className="plan-descripcion">Un plan nutricional para mantener un estilo de vida saludable y una dieta balanceada.</p>
            <div className="cont-valor-nuttricional">
              <div class="plan-details">
                  <p> <strong>Proteínas:</strong> 100g por día</p>
                  <p> <strong>Carbohidratos:</strong> 300g por día</p>
                  <p> <strong>Grasas:</strong> 70g por día</p>
                  <p> <strong>Calorías:</strong> 2200 kcal por día</p>
              </div>
              <button>Más Información</button>
              </div>
        </article>
          </section>
          <section>
        
        <div className="group-plan">
            <h2>Consigue tus objetivos nutricionales en grupo</h2>
            <div className="plan-container">
                <img src={planImage} alt="Reto de 30 Días" className="plan-image" />
                <div className="plan-details-v1">
                  <div className='cont-head-plan'>
                    <h3>Reto de <strong>30 Días</strong></h3> 
                    <div className="plan-type">GRUPAL</div>                
                  </div>
                  <p>4 semanas</p>
                    <p>Consigue todos tus objetivos nutricionales <strong>en grupo</strong> y adopta la vida saludable que buscas en solo un mes. Consigue todos tus objetivos nutricionales en grupo y adopta la vida saludable que buscas en solo un mes.</p>
                    <ul>
                        <li><img src={checkIcon} alt="check" /> Plan nutricional y lista de la compra quincenal</li>
                        <li><img src={checkIcon} alt="check" /> Menú adaptado a intolerantes y alérgicos</li>
                        <li><img src={checkIcon} alt="check" /> Foto de platos especiales</li>
                        <li><img src={checkIcon} alt="check" /> Guía y descuentos de suplementación</li>
                        <li><img src={checkIcon} alt="check" /> Recetas fáciles de hacer</li>
                    </ul>
                    <div className="plan-price">
                        <div className="whatsapp-group">
                            <img src={whatsappIcon} alt="WhatsApp" /> Ingreso al grupo de WhatsApp
                        </div>
                        <div className="price">340 Bs</div>
                    </div>
                    <button className="start-now">Empezar Ahora</button>
                </div>
            </div>
        </div>
          </section>
        <Footer/>
    </div>
  );
}

export default NutricionPage;
