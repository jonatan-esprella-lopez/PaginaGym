import React from "react";
import "../../styles/Nosotros/Tarjeta-mision.css";
import Misione from "../../assets/images/Nosotros/Mision.jpg";


function Mision(params) {
    return(
        <section className="Diseno-tarjetas-1 cont-Mision-Nos">
            <div className="cont-Img-Mis">   
                <img src={Misione} alt="" />        
            </div>
            <h2>Nuestra Misión</h2>
            <div className="cont-Mision-text">
                <p>
                    En <strong>CEC-FGI</strong>, nos comprometemos a transformar vidas a través del fitness y el bienestar. Creemos en el poder del ejercicio para mejorar la salud física y mental, fomentar la confianza y crear una comunidad fuerte y solidaria.
                    Nuestro objetivo es ofrecer un espacio inclusivo y motivador donde cada individuo pueda alcanzar su máximo potencial. Nos dedicamos a proporcionar las mejores instalaciones, entrenadores expertos y programas personalizados para ayudar a nuestros miembros a lograr sus metas, ya sea mejorar su condición física, superar desafíos personales o adoptar un estilo de vida más saludable.
                    Juntos, nos esforzamos por inspirar y empoderar a cada persona para que se convierta en la mejor versión de sí misma. ¡Ven y únete a nuestra familia de fitness, y comienza tu viaje hacia una vida más activa, saludable y feliz!
                </p>
            </div>
        </section>
    )
}

export default Mision;