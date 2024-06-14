import React from 'react';
import '../styles/Rutinas.css';

import Header from "../componets/Header_Main"
import Footer from "../componets/Footer_Main"

import Imagen_C1 from "../assets/images/Rutinas/ImagenC1.png"
import Imagen_Intensidad from "../assets/images/Rutinas/Intensidad.png"
import Imagen_C2 from "../assets/images/Rutinas/ImagenC2.png"
import Imagen_IntensidadC1 from "../assets/images/Rutinas/IntensidadC1.png"

import MetHipertrofia from "../assets/images/Rutinas/Metodologia.png"

function RutinasPage() {
  return (
    <div>
      <Header/>
        <section className='main'>

          <div className='contenedor_Text_Prin_Rutinas'>
            <p>En CEC-FGI queremos ayudarte con tus entrenamientos. Te ofrecemos varios ejemplos de programas que puedes seguir para alcanzar tus objetivos.</p>
            <p>Es importante tener en cuenta que estos programas son solo sugerencias. Cada persona tiene condiciones físicas y mentales distintas, por lo que algunos programas pueden no ajustarse a tus necesidades. Asegúrate de conocer y respetar tus límites para evitar lesiones y otros daños.</p>
          </div>
          <h3 className='Titulo_Lista_Rutinas'>Entrenamiento del dia</h3>
          <div className='contenedor_de_tabla'>

              <td className='Contenido_Table'>
                <ul className='contenido_Colum'>
                  <li className='Fila_Principal_img'>Imagen</li>
                  <li className='Fila_Imagen1'><img src={Imagen_C1} alt="" /></li>
                  <li className='Fila_Secundaria'><img src={Imagen_C2} alt="" className='imagen_Circuitos' /></li>
                  <li className='Fila_Imagen1'><img src={Imagen_C1} alt="" /></li>
                  <li className='Fila_Secundaria'><img src={Imagen_C2} alt="" className='imagen_Circuitos'/></li>
                </ul>
                <ul className='contenido_Colum'>
                  <li className='Fila_Principal'>Nombre</li>
                  <li className='Fila_Secundaria1'>Circuito 1</li>
                  <li className='Fila_Secundaria'>Circuito 2</li>
                  <li className='Fila_Secundaria1'>Circuito 1</li>
                  <li className='Fila_Secundaria'>Circuito 3</li>
                </ul>
                <ul className='contenido_Colum'>
                  <li className='Fila_Principal'>Objetivo</li>
                  <li className='Fila_Secundaria1'>Eliminar grasa / Perder peso</li>
                  <li className='Fila_Secundaria'>Tonificar</li>
                  <li className='Fila_Secundaria1'>Eliminar grasa / Perder peso</li>
                  <li className='Fila_Secundaria'>Tonificar</li>
                </ul>
                <ul className='contenido_Colum'>
                  <li className='Fila_Principal'>Intensidad</li>
                  <li className='Fila_Secundaria1'><img src={Imagen_Intensidad} alt="" /></li>
                  <li className='Fila_Secundaria'><img src={Imagen_IntensidadC1} alt="" /></li>
                  <li className='Fila_Secundaria1'><img src={Imagen_Intensidad} alt="" /></li>
                  <li className='Fila_Secundaria'><img src={Imagen_IntensidadC1} alt="" /></li>
                </ul>
                <ul className='contenido_Colum'>
                  <li className='Fila_Principal'>Grupos Musculares</li>
                  <li className='Fila_Secundaria1'>Piernas / Abdomen / Hombros / Trapecios</li>
                  <li className='Fila_Secundaria'>Todos los grupos musculares</li>
                  <li className='Fila_Secundaria1'>Piernas / Abdomen / Hombros / Trapecios</li>
                  <li className='Fila_Secundaria'>Todos los grupos musculares</li>
                </ul>
              </td>
          </div>
        </section>

        <section className='contenedor_tipos_entrenamiento'>
          <div className='contenedor_metodologia'>
            <div>
              <img src={MetHipertrofia} alt="" className='Imagen_Metodologia'/>
              <h2>Hipertrofia</h2>
            </div>
            <div>
              <img src={MetHipertrofia} alt="" className='Imagen_Metodologia'/>
              <h2>Metabolico</h2>
            </div>
            <div>
              <img src={MetHipertrofia} alt="" className='Imagen_Metodologia'/>
              <h2>Hipertrofia</h2>
            </div>
            <div>
              <img src={MetHipertrofia} alt="" className='Imagen_Metodologia'/>
              <h2>Hipertrofia</h2>
            </div>
            <div>
              <img src={MetHipertrofia} alt="" className='Imagen_Metodologia'/>
              <h2>Hipertrofia</h2>
            </div>
          </div>
        </section>

        <section className='Container_footer_Rutinas'>
          <div>
            <h3>Entrenadores</h3>
            <div>
              <p>¿Quien es el entrenador?</p>
              <p>Lista de Staff</p>
              <p>Personal Trainning</p>
              <p>Rutinas</p>
            </div>
          </div>

          <div>
            <h3>Informacón</h3>
            <div>
              <p>Sobre Nutrición</p>
              <p>Dieta y suplementación</p>
              <p>Informe de condicón Fisica</p>
              <p>Contactanos</p>
            </div>
          </div>

          <div>
            <h3>Preguntas Frecuentes</h3>
            <div>
              <p>¿Tienes dudas?</p>
              <p>No sabes que tomar</p>
              <p>Como realizo mi reserva</p>
            </div>
          </div>

          <div>
            <div>
              <h3>¿Quieres reservar?</h3>
              <input type="text" />
            </div>
            <div>
              <h3>Siguenos</h3>
            </div>

          </div>
        </section>
        <Footer/>
    </div>
  );
}

export default RutinasPage;
