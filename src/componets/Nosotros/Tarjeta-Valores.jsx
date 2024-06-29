import React from "react";
import "../../styles/Nosotros/Tarjeta-Valores.css";
import value1Icon from '../../assets/images/Nosotros/respeto.png'; // Asegúrate de ajustar la ruta del icono
import value2Icon from '../../assets/images/Nosotros/integridad.png';
import value3Icon from '../../assets/images/Nosotros/amor.png';
import value4Icon from '../../assets/images/Nosotros/compromiso.png';
import value5Icon from '../../assets/images/Nosotros/humildad.png';

function ValoresCEC() {
    return(
    <section className="gym-values-section">
        <div className="overlay1">
            <div className="value">
                <img src={value1Icon} alt="Value 1" />
                <h3>Disciplina</h3>
                <p>###########</p>
            </div>
            <div className="value">
                <img src={value2Icon} alt="Value 2" />
                <h3>Esfuerzo</h3>
                <p>###########</p>
            </div>
            <div className="value">
                <img src={value3Icon} alt="Value 3" />
                <h3>Pasión</h3>
                <p>###########</p>
            </div>
            <div className="value">
                <img src={value4Icon} alt="Value 4" />
                <h3>Compromiso</h3>
                <p>###########</p>
            </div>
            <div className="value">
                <img src={value5Icon} alt="Value 5" />
                <h3>Superación</h3>
                <p>###########</p>
            </div>
        </div>
    </section>
    )
}

export default ValoresCEC;