import React from "react";
import "../../styles/Nosotros/Tarjeta-mision.css";
import Visione from "../../assets/images/Nosotros/Vision.jpg"


function Vision(params) {
    return(
        <section className="Diseno-tarjetas-1 cont-Mision-Nos">
            <div className="cont-Img-Mis">   
                <img src={Visione} alt="" />        
            </div>
            <h2>Nuestra Visión</h2>
            <div className="cont-Mision-text">
                <p>
                    Queremos ser reconocidos como el gimnasio líder en nuestra comunidad,
                    ofreciendo programas de entrenamiento innovadores, servicios de alta
                    calidad y un ambiente acogedor que inspire a nuestros miembros a vivir
                    vidas más saludables y activas.    
                </p>
            </div>
        </section>
    )
}

export default Vision;