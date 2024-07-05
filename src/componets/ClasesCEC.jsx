import React from "react";
import "../styles/Clases/Programas.css"
import Entrenamiento from "../assets/images/Clases/Entrenamiento.jpg"
import FullKombat from "../assets/images/Clases/FullKombat.jpg"
import Fexibilidad from "../assets/images/Clases/Fexibilidad.jpg"
import Duracion from "../assets/images/duracion-clases.svg";
import Intensidad from "../assets/images/intensidad.svg"

function ProgramaMain(){

    
    return( 
    <section className="estructura-principal-cards">
        <div className="container-head-section">
            <div>            
                <h4>
                    Conoce los tipos de entrenamiento en <span>CEC - FGI</span>
                    <div className="underline"></div>
                </h4>
                
            </div>

            <a href="/paginaExtra">
                Encuentra mas Programas de entrenamiento...
            </a>
        </div>

        <section className="container-cards">
            <article className="estructura-card-2">
                <img src={Entrenamiento} alt="" className="imagen_Instalacion"/>
                <div className="Clases_titulo_Container">
                    <a>Entrenamiento Funcional</a>
                </div>
                <div className="contenido_clases_detalle">
                    <div className="detalle_clase">
                        <img src={Duracion} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Duración</p>
                        <p className="detalle_descripcion">30/40/50 min</p>
                    </div>
                    <div className="detalle_clase">
                        <img src={Intensidad} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Intensidad</p>
                        <p className="detalle_descripcion">Alta</p>
                    </div>
                </div>
                <div className="contenedor_Apartador">
                    <hr className="Apartador"/>
                </div>
                <div className="contenedor_Texto">
                    <p className="Text_programas">
                        Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                    </p>
                </div>
            </article>
            <article className="estructura-card-2">
                <img src={FullKombat} alt="" className="imagen_Instalacion"/>
                <div className="Clases_titulo_Container">
                    <a>Aeróbicos</a>
                </div><div className="contenido_clases_detalle">
                    <div className="detalle_clase">
                        <img src={Duracion} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Duración</p>
                        <p className="detalle_descripcion">30/40/50 min</p>
                    </div>
                    <div className="detalle_clase">
                        <img src={Intensidad} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Intensidad</p>
                        <p className="detalle_descripcion">Alta</p>
                    </div>
                </div>
                <div className="contenedor_Apartador">
                    <hr className="Apartador"/>
                </div>
                <div className="contenedor_Texto">
                    <p className="Text_programas">
                        Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                    </p>
                </div>
            </article>
            <article className="estructura-card-2">
                <img src={Fexibilidad} alt="" className="imagen_Instalacion"/>
                <div className="Clases_titulo_Container">
                    <a>Flexibilidad</a>
                </div>
                <div className="contenido_clases_detalle">
                    <div className="detalle_clase">
                        <img src={Duracion} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Duración</p>
                        <p className="detalle_descripcion">30/40/50 min</p>
                    </div>
                    <div className="detalle_clase">
                        <img src={Intensidad} alt="" className="Iconos_detalle"/>
                        <p className="detalle_title">Intensidad</p>
                        <p className="detalle_descripcion">Alta</p>
                    </div>
                </div>
                <div className="contenedor_Apartador">
                    <hr className="Apartador"/>
                </div>
                <div className="contenedor_Texto">
                    <p className="Text_programas">
                        Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                    </p>
                </div>
            </article>
        </section>
    </section>
    )
}
export default ProgramaMain