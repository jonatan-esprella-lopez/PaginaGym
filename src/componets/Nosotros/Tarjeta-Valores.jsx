import React from "react";
import "../../styles/Nosotros/Tarjeta-Valores.css";
import Compromiso from "../../assets/icons/Nosotros/compromiso.png";
import Integridad from "../../assets/icons/Nosotros/el-respeto.png";
import Respeto from "../../assets/icons/Nosotros/entrenamiento.png";
import Innovación from "../../assets/icons/Nosotros/honestidad.png";
import Trabajo from "../../assets/icons/Nosotros/Innovación.png";

function ValoresCEC() {
    return(
    <section className="cont-valores-nos">
        <h2>Nuestros Valores</h2>
        <div>
            <div className="cont-valores-ind">
                <img src={Compromiso} alt="" className="Iconos_detalle" />
                <p>Compromiso con la excelencia</p>
            </div>
            <div className="cont-valores-ind">
                <img src={Integridad} alt="" className="Iconos_detalle" />
                <p>Integridad y ética profesional</p>
            </div>
            <div className="cont-valores-ind">
                <img src={Respeto} alt="" className="Iconos_detalle" />
                <p>Respeto y empatía hacia nuestros miembros</p>
            </div>
            <div className="cont-valores-ind">
                <img src={Innovación} alt="" className="Iconos_detalle" />
                <p>Innovación y mejora continua</p>
            </div>
            <div className="cont-valores-ind">
                <img src={Trabajo} alt="" className="Iconos_detalle" />
                <p>Trabajo en equipo y colaboración</p>
            </div>
        </div>
    </section>
    )
}

export default ValoresCEC;