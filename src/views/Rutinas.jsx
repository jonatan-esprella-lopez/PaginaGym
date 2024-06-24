import React from 'react';
import '../styles/Rutinas.css';
import "../styles/Rutinas/Training.css"

import Header from "../componets/Header_Main"
import Footer from "../componets/Footer_Main"



import Imagen_C1 from "../assets/images/Rutinas/ImagenC1.png"
import Imagen_Intensidad from "../assets/images/Rutinas/Intensidad.png"
import Imagen_C2 from "../assets/images/Rutinas/ImagenC2.png"
import Imagen_IntensidadC1 from "../assets/images/Rutinas/IntensidadC1.png"

import TrainerImage from "../assets/images/Rutinas/trainer.png"; 

import MetHipertrofia from "../assets/images/Rutinas/Metodologia.png"

function RutinasPage() {
  return (
    <div className='container-rutinas'>
      <Header/>
      
      <div className="container-head-section">
            <div>            
                <h4>
                    Entrenamiento del día
                    <div className="underline"></div>
                </h4>
            </div>
        </div>
      
      <section className="training-section">
        <div className="training-content">
          
            <div className="training-intro">
                <p>
                    Bienvenido a la sección de entrenamientos de <strong>CEC - FGI</strong>. Aquí, encontrarás una
                    selección personalizada de planes de entrenamiento diseñados específicamente para nuestros alumnos.
                    Cada programa ha sido creado por nuestros expertos en fitness para ayudarte a alcanzar tus metas de
                    salud y rendimiento.
                </p>
            </div>
            <div className="training-cards">
                <div className="card">
                  <div className='titulo-card'>
                    <h3>Entrenamiento del día</h3>    
                  </div>
                    
                    <p>
                        Nuestros entrenamientos están adaptados a diferentes niveles de habilidad y objetivos,
                        ya sea que estés buscando mejorar tu resistencia, ganar masa muscular, perder peso o
                        simplemente mantenerte en forma.
                    </p>
                </div>
                <div className="card">
                  <div className='titulo-card'>
                    <h3>Seguimiento de Progreso</h3>
                  </div>
                    <p>
                        En cada entrenamiento, podrás registrar tu progreso y realizar un seguimiento de tus mejoras
                        a lo largo del tiempo. Esta funcionalidad te permitirá mantenerte motivado y ajustar tu rutina
                        según tus necesidades.
                    </p>
                </div>
            </div>
        </div>
        <div className="card highlighted-card">
                  <img src={TrainerImage} alt="Entrenador" className="trainer-image" />
                  <h3>Encuentra un entrenador</h3>
                  <div className="contend-card-text">
                      
                      <div className='contend-card-text'>
                        <p>
                            Un entrenador personal te podrá ayudar a llegar mucho más rápido a tu objetivo.
                        </p>
                      </div>
                      
                      <button className="highlighted-button">Encontrar Entrenador</button>
                  </div>
              </div>
        </section>

          <section>
            <div className='cont-head-table'>
              <h3>
                Entrenamiento Semanal
                <div className='underline'></div>
              </h3>
              <p>19 de Junio de 2024</p>
            </div>

            <table className='table-general'>
              <thead>
                <tr className='cond-head-column'>
                  <th> </th>
                  <th>Musculos</th>
                  <th>Tipo de entrenamiento</th>
                  <th>Duración</th>
                  <th>Intensidad</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
              <tr>
                  <th>
                    <div>
                      <p>
                        dia 1
                      </p>
                      <div className='underline-dia'></div>
                    </div>
                  </th>
                  <th>
                    <img src="" alt="" />
                  </th>
                  <th>
                    <p>CHIPPER</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>30/40 min</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>Moderada</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <button className='highlighted-button'>Mas información</button>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div>
                      <p>
                        dia 2
                      </p>
                      <div className='underline-dia'></div>
                    </div>
                  </th>
                  <th>
                    <img src="" alt="" />
                  </th>
                  <th>
                    <p>CHIPPER</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>30/40 min</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>Moderada</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <button className='highlighted-button'>Mas información</button>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div>
                      <p>
                        dia 3
                      </p>
                      <div className='underline-dia'></div>
                    </div>
                  </th>
                  <th>
                    <img src="" alt="" />
                  </th>
                  <th>
                    <p>CHIPPER</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>30/40 min</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>Moderada</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <button className='highlighted-button'>Mas información</button>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div>
                      <p>
                        dia 4
                      </p>
                      <div className='underline-dia'></div>
                    </div>
                  </th>
                  <th>
                    <img src="" alt="" />
                  </th>
                  <th>
                    <p>CHIPPER</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>30/40 min</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>Moderada</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <button className='highlighted-button'>Mas información</button>
                  </th>
                </tr>
                <tr>
                  <th>
                    <div>
                      <p>
                        dia 5
                      </p>
                      <div className='underline-dia'></div>
                    </div>
                  </th>
                  <th>
                    <img src="" alt="" />
                  </th>
                  <th>
                    <p>CHIPPER</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>30/40 min</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <p>Moderada</p>
                  </th>
                  <th>
                    <img src="" alt="" />
                    <button className='highlighted-button'>Mas información</button>
                  </th>
                </tr>
              </tbody>
            </table>
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
