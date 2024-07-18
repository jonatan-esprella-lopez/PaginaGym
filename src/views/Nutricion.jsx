import React from 'react';
import '../styles/Nutricion.css';
import { Link } from 'react-router-dom';
import Header from '../componets/Header_Main';
import Footer from '../componets/Footer_Main';
import image from '../assets/images/Nutricion/NutricionHipertrofia.jpg';
import ImagenHipertrofia from '../assets/images/Nutricion/NutricionHipertrofia.jpg';
import Proteina from '../assets/images/Nutricion/Proteina.svg';
import Carbohidrato from '../assets/images/Nutricion/Carbohidrato.svg';
import Grasas from '../assets/images/Nutricion/Grasa.svg';
import planImage from '../assets/images/Nutricion/plan-simple.png';
import checkIcon from '../assets/images/correcto.png';
import whatsappIcon from '../assets/images/WhatsApp.png';

function NutricionPage() {
  return (
    <div>
      <Header />
      <div className="nutricion-container">
        <h3>
          Planes Nutricionales
          <div className="underline"></div>
        </h3>
      </div>

      <h1 className="Titulo_Principal">Planes Pre-armados</h1>
      <section className="cont-general-Nutricion">
        <article className="plan structure-card-1">
          <div className="contenedor-1-nutri">
            <p className="plan-header">Plan proteico</p>
            <img src={ImagenHipertrofia} alt="Aumenta tu masa muscular" />
            <h3>Aumenta tu masa muscular</h3>
          </div>
          <div className="contenedor-2-nutri">
            <p className="plan-descripcion">
              Un plan nutricional diseñado para personas que buscan aumentar su
              masa muscular a través de una dieta rica en proteínas y calorías
              controladas.
            </p>
            <div className="cont-valor-nuttricional">
              <div className="plan-details">
                <p>
                  {' '}
                  <strong>Proteínas:</strong> 150g por día
                </p>
                <p>
                  {' '}
                  <strong>Carbohidratos:</strong> 300g por día
                </p>
                <p>
                  {' '}
                  <strong>Grasas:</strong> 80g por día
                </p>
                <p>
                  {' '}
                  <strong>Calorías:</strong> 3000 kcal por día
                </p>
              </div>
              <button className="button-nutricion">Más Información</button>
            </div>
          </div>
        </article>

        <article className="plan structure-card-1">
          <div className="contenedor-1-nutri">
            <div className="plan-header">Plan bajo en grasa</div>
            <img src={ImagenHipertrofia} alt="Pérdida de grasa" />
            <h3>Pérdida de grasa</h3>
          </div>
          <div className="contenedor-2-nutri">
            <p className="plan-descripcion">
              Un plan nutricional enfocado en la reducción de grasa corporal
              mediante un déficit calórico y la ingesta de alimentos saludables.
            </p>
            <div className="cont-valor-nuttricional">
              <div className="plan-details">
                <p>
                  {' '}
                  <strong>Proteínas:</strong> 120g por día
                </p>
                <p>
                  {' '}
                  <strong>Carbohidratos:</strong> 200g por día
                </p>
                <p>
                  {' '}
                  <strong>Grasas:</strong> 60g por día
                </p>
                <p>
                  {' '}
                  <strong>Calorías:</strong> 2000 kcal por día
                </p>
              </div>

              <button className="button-nutricion">Más Información</button>
            </div>
          </div>
        </article>

        <article className="plan structure-card-1">
          <div className="contenedor-1-nutri">
            <div className="plan-header">Plan de tonificación</div>
            <img src={ImagenHipertrofia} alt="Tonificación" />
            <h3>Tonificación</h3>
          </div>
          <div className="contenedor-2-nutri">
            <p className="plan-descripcion">
              Un plan equilibrado que ayuda a mejorar la definición muscular y
              mantener una buena salud general.
            </p>
            <div className="cont-valor-nuttricional">
              <div className="plan-details">
                <p>
                  {' '}
                  <strong>Proteínas:</strong> 130g por día
                </p>
                <p>
                  {' '}
                  <strong>Carbohidratos:</strong> 250g por día
                </p>
                <p>
                  {' '}
                  <strong>Grasas:</strong> 70g por día
                </p>
                <p>
                  {' '}
                  <strong>Calorías:</strong> 2500 kcal por día
                </p>
              </div>
              <button className="button-nutricion">Más Información</button>
            </div>
          </div>
        </article>

        <article className="plan structure-card-1">
          <div className="contenedor-1-nutri">
            <div className="plan-header">Plan saludable</div>
            <img src={ImagenHipertrofia} alt="Salud normal" />
            <h3>Nutricion Tradicional</h3>
          </div>
          <div className="contenedor-2-nutri">
            <p className="plan-descripcion">
              Un plan nutricional para mantener un estilo de vida saludable y
              una dieta balanceada.
            </p>
            <div className="cont-valor-nuttricional">
              <div className="plan-details">
                <p>
                  {' '}
                  <strong>Proteínas:</strong> 100g por día
                </p>
                <p>
                  {' '}
                  <strong>Carbohidratos:</strong> 300g por día
                </p>
                <p>
                  {' '}
                  <strong>Grasas:</strong> 70g por día
                </p>
                <p>
                  {' '}
                  <strong>Calorías:</strong> 2200 kcal por día
                </p>
              </div>
              <button className="button-nutricion">Más Información</button>
            </div>
          </div>
        </article>
      </section>
      <section>
        <div className="group-plan">
          <h2>Consigue tus objetivos nutricionales en grupo</h2>
          <div className="plan-container">
            <div className="cont-plan-image">
              <img
                src={planImage}
                alt="Reto de 30 Días"
                className="plan-image"
              />
            </div>
            <div className="plan-details-v1">
              <div className="cont-head-plan">
                <h3>
                  Reto de <strong>30 Días</strong>
                </h3>
                <div className="plan-type">GRUPAL</div>
              </div>
              <p>4 semanas</p>
              <p>
                Consigue todos tus objetivos nutricionales{' '}
                <strong>en grupo</strong> y adopta la vida saludable que buscas
                en solo un mes. Consigue todos tus objetivos nutricionales en
                grupo y adopta la vida saludable que buscas en solo un mes.
              </p>
              <ul>
                <li>
                  <img src={checkIcon} alt="check" /> Plan nutricional y lista
                  de la compra quincenal
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Menú adaptado a
                  intolerantes y alérgicos
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Foto de platos especiales
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Guía y descuentos de
                  suplementación
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Recetas fáciles de hacer
                </li>
              </ul>
              <p className="price">340 Bs</p>
              <div className="plan-price">
                <div className="whatsapp-group">
                  <img src={whatsappIcon} alt="WhatsApp" />
                  <p>Ingreso al grupo de WhatsApp</p>
                </div>
                <button className="estructura-size2 button-type-4">
                  Empezar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="group-plan">
          <h2>Consigue tus objetivos nutricionales en grupo</h2>
          <div className="plan-container">
            <div className="cont-plan-image">
              <img
                src={planImage}
                alt="Reto de 60 Días"
                className="plan-image"
              />
            </div>
            <div className="plan-details-v1">
              <div className="cont-head-plan">
                <h3>
                  Reto de <strong>60 Días</strong>
                </h3>
                <div className="plan-type">GRUPAL</div>
              </div>
              <p>8 semanas</p>
              <p>
                Si buscas un <strong>seguimiento a largo plazo</strong> en el
                que además de seguir un plan nutricional durante dos meses,
                disfrutes de charlas online y los mejores ejercicios para
                combinar con tu dieta, sin duda el Reto grupal de 60 días es
                para ti.
              </p>
              <ul>
                <li>
                  <img src={checkIcon} alt="check" /> Plan nutricional y lista
                  de la compra quincenal
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Menú adaptado a
                  intolerantes y alérgicos
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Foto de platos especiales
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Guía y descuentos de
                  suplementación
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Recetas fáciles de hacer
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Charla online sobre dieta
                  Keto/Ayuno intermitente
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Recomendación de
                  ejercicios
                </li>
              </ul>
              <p className="price">340 Bs</p>
              <div className="plan-price">
                <div className="whatsapp-group">
                  <img src={whatsappIcon} alt="WhatsApp" />
                  <p>Ingreso al grupo de WhatsApp</p>
                </div>
                <button className="estructura-size2 button-type-4">
                  Empezar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="header">
            <span>Un seguimiento </span>
            <span className="bold">INDIVIDUAL Y A LA MEDIDA</span>
            <span> junto a</span>
          </div>
          <div className="subheader">
            <span>Un profesional de Fitness y nutrición.</span>
          </div>
          <div className="divider"></div>
          <div className="content">
            <span>Disfruta de un </span>
            <span className="bold">plan nutricional personalizado</span>
            <span> durante dos meses a través de nuestra </span>
            <span className="bold">plataforma de nutrición.</span>
          </div>
        </div>

        <div className="group-plan">
          <h2>Consigue tus objetivos nutricionales en grupo</h2>
          <div className="plan-container">
            <div className="cont-plan-image">
              <img
                src={planImage}
                alt="Reto Personalizado"
                className="plan-image"
              />
            </div>
            <div className="plan-details-v1">
              <div className="cont-head-plan">
                <h3>
                  Reto <strong>Personalizado</strong>
                </h3>
                <div className="plan-type">PERSONAL</div>
              </div>
              <p>8 semanas</p>
              <p>
                Lograr tus objetivos puede ser más fácil de lo que siempre has
                pensado. Con nuestro{' '}
                <strong>
                  plan nutricional online individual y personalizado
                </strong>{' '}
                podrás comenzar a alimentarte mejor, bajar de peso, establecer
                un estilo de vida saludable y ver los resultados que deseas.{' '}
                <strong>
                  Todo esto a través de un plan preparado justo a la medida de
                  tus necesidades.
                </strong>
              </p>
              <ul>
                <li>
                  <img src={checkIcon} alt="check" /> 4 dietas progresivas
                  personalizadas
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Guía y descuentos de
                  suplementación
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Recetas fáciles de hacer
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Guía de mantenimiento
                  final
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Charla online sobre dieta
                  Keto/Ayuno intermitente
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Contenidos motivacionales
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Lista de la compra
                  quincenal
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Plan adaptado a
                  intolerantes y alérgicos
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Foto y videos de platos
                  especiales
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Guía de ejercicios
                  gym/casa
                </li>
                <li>
                  <img src={checkIcon} alt="check" /> Apoyo personal diario
                </li>
              </ul>
              <p className="price">800 Bs</p>
              <div className="plan-price">
                <div className="whatsapp-group">
                  <img src={whatsappIcon} alt="WhatsApp" />
                  <p>
                    Seguimiento personalizado por videollamada, email y
                    WhatsApp.
                  </p>
                </div>
                <button className="estructura-size2 button-type-4">
                  Empezar Ahora
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default NutricionPage;
