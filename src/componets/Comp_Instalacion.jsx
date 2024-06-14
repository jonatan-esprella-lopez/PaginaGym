import React from "react";
import "../App.css"
import "../styles/Instalaciones/Areas.css"

import FindCenter from "../assets/images/findCenter.jpg"

function Instalaciones(){

    
    return( 
        <section className="estructura-principal-cards">
            <div className="container-head-section">
                <div>            
                    <h4>
                        Experimenta la calidad de entrenamiento en <span>CEC - FGI</span>, junto a profesionales en el área.
                        <div className="underline"></div>
                    </h4>
                    
                </div>
                <a href="/Instalaciones">
                    Encuentra mas ambientes...
                </a>
            </div>

                <div className="container-cards">
                    <article className="estructure-card-1 Cont-areas-Tarjeta">
                        <img src={FindCenter} alt="" className="imagen_Instalacion"/>
                        <p className="Text_instalaciones">Instalacion de Entrenamiento Funcional</p>
                    </article>
                    <article className="estructure-card-1 Cont-areas-Tarjeta">
                        <img src={FindCenter} alt="" className="imagen_Instalacion"/>
                        <p className="Text_instalaciones">Instalacion de Hidratacion y evaluación</p>
                    </article>
                    <article className="estructure-card-1 Cont-areas-Tarjeta">
                        <img src={FindCenter} alt="" className="imagen_Instalacion"/>
                        <p className="Text_instalaciones">Instalación de Aerobicos</p>
                    </article>
                    <article className="estructure-card-1 Cont-areas-Tarjeta">
                        <img src={FindCenter} alt="" className="imagen_Instalacion"/>
                        <p className="Text_instalaciones">Instalación de Aerobicos</p>
                    </article>
                </div>
            </section>
    )
}
export default Instalaciones