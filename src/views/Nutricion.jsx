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
        <h1 className='Titulo_Principal'>TIPOS DE NUTRICIÓN</h1>
        <div className='contenedor_Tarjetas'>

          <div className='Listado_Tarjeta'>
              <div>
                  <img src={ImagenHipertrofia} alt="" className='Imagen_Tarjeta_Nutricion'/>    
              </div>
              <div className='Titulo_Tarjeta_Tipo_Nut'>
                <h3 >Hipertrofia</h3>
              </div>
              <div className='Detalle_Tarjeta_Tipo_Nut'>
                <p>Es una nutricion rica en proteinas para el crecimiento muscular</p>
              </div>
              <div className='contenedor_Porcion_Nutricional'>
                  <div className='contenedor_tarjeta'>
                      <img src={Proteina} alt="" className='Iconos_Nutricion'/>
                      <h5>Proteina</h5>
                      <p>300 gr</p>
                      <p>600 gr</p>
                  </div>
                  <div className='contenedor_tarjeta'>
                      <img src={Carbohidrato} alt="" className='Iconos_Nutricion'/>
                      <h5>Carbohidrato</h5>
                      <p>100 gr</p>
                      <p>200 gr</p>
                  </div>
                  <div className='contenedor_tarjeta'>
                      <img src={Grasas} alt="" className='Iconos_Nutricion'/>
                      <h5>Grasas</h5>
                      <p>30 gr</p>
                      <p>60 gr</p>
                  </div>
                  
              </div> 
              <div >
                <Link to="/Plan Nutricional">
                  <button className="Boton_seleccion_Precio">
                    
                      Ver Tipo de nutricion
                  </button>
                </Link>
              </div>
          </div>
        <div className='Listado_Tarjeta'>
            <div>
                <img src={ImagenHipertrofia} alt="" className='Imagen_Tarjeta_Nutricion'/>    
            </div>
            <div className='Titulo_Tarjeta_Tipo_Nut'>
              <h3 >Hipertrofia</h3>
            </div>
            <div className='Detalle_Tarjeta_Tipo_Nut'>
              <p>Es una nutricion rica en proteinas para el crecimiento muscular</p>
            </div>
            <div className='contenedor_Porcion_Nutricional'>
                <div className='contenedor_tarjeta'>
                    <img src={Proteina} alt="" className='Iconos_Nutricion'/>
                    <h5>Proteina</h5>
                    <p>300 gr</p>
                    <p>600 gr</p>
                </div>
                <div className='contenedor_tarjeta'>
                    <img src={Carbohidrato} alt="" className='Iconos_Nutricion'/>
                    <h5>Carbohidrato</h5>
                    <p>100 gr</p>
                    <p>200 gr</p>
                </div>
                <div className='contenedor_tarjeta'>
                    <img src={Grasas} alt="" className='Iconos_Nutricion'/>
                    <h5>Grasas</h5>
                    <p>30 gr</p>
                    <p>60 gr</p>
                </div>
            </div>    
        </div>
        <div className='Listado_Tarjeta'>
            <div>
                <img src={ImagenHipertrofia} alt="" className='Imagen_Tarjeta_Nutricion'/>    
            </div>
            <div className='Titulo_Tarjeta_Tipo_Nut'>
              <h3 >Hipertrofia</h3>
            </div>
            <div className='Detalle_Tarjeta_Tipo_Nut'>
              <p>Es una nutricion rica en proteinas para el crecimiento muscular</p>
            </div>
            <div className='contenedor_Porcion_Nutricional'>
                <div className='contenedor_tarjeta'>
                    <img src={Proteina} alt="" className='Iconos_Nutricion'/>
                    <h5>Proteina</h5>
                    <p>300 gr</p>
                    <p>600 gr</p>
                </div>
                <div className='contenedor_tarjeta'>
                    <img src={Carbohidrato} alt="" className='Iconos_Nutricion'/>
                    <h5>Carbohidrato</h5>
                    <p>100 gr</p>
                    <p>200 gr</p>
                </div>
                <div className='contenedor_tarjeta'>
                    <img src={Grasas} alt="" className='Iconos_Nutricion'/>
                    <h5>Grasas</h5>
                    <p>30 gr</p>
                    <p>60 gr</p>
                </div>
            </div>    
        </div>
        
        </div>

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
