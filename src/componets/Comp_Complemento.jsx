import React from "react";
import "../styles/home_styles.css";
import "../styles/Complementos/complementos.css";

import App from "../assets/images/Complementos/app.svg";
import Energy from "../assets/images/Complementos/Energy.svg";
import NutriComp from "../assets/images/Complementos/Nutricion.svg";

const Card = ({ icon, title, description, benefit, price, buttonText, special }) => (
    <article className={`estructure-card-1 ${special ? "estructure-card-especial" : ""}`}>
        <div className="contenedor-iconos-type-1">
            <img src={icon} alt={title} className="Iconos_detalle" />
        </div>
        <h4>{title}</h4>
        <div className="contenedor-texto-1">
            <p className="Text_programas">{description}</p>
        </div>
        <div className="contenido_inferior_complemento">
            <p className="descripcion_App">{benefit}</p>
            {price && (
                <div className="container_price">
                    <p>Bs</p>
                    <h2>{price.amount}</h2>
                    <h5>{price.cents}</h5>
                    <p>/{price.period}</p>
                </div>
            )}
            <button className="estructure-size estructure-button-1 button-type-4">
                {buttonText}
            </button>
        </div>
    </article>
);

const Complementos = () => (
    <section className="estructura-principal-cards">
        <div className="container-head-section">
            <div>            
                <h4>
                    Complementa tu <span>Entrenamiento</span>
                    <div className="underline"></div>
                </h4>
            </div>
            <a href="">Encuentra todos los complementos...</a>
        </div>
        <section className="container-cards">
            <Card
                icon={App}
                title="CEC-RX55"
                description="Lleva tu entrenamiento a donde quieras y cuando quieras con nuestra plataforma virtual de clases y contenido fitness."
                benefit="Beneficio gratuito para los clientes."
                buttonText="Tienda"
            />
            <Card
                icon={NutriComp}
                title="Nutri-Fit by CEC"
                description="Si quieres resultados rápidos, también debes cuidar la alimentación. Prueba de nuestras comidas, con los macronutrientes necesarios para progresar."
                benefit="Come saludable"
                price={{ amount: 150, cents: '.99', period: 'Mes' }}
                buttonText="Más información"
                special
            />
            <Card
                icon={Energy}
                title="Lacto Bar Energy"
                description="Disfruta de bebidas especiales, mantente hidratado y mejora tu rendimiento al entrenar."
                benefit="Sientente muy bien al entrenar."
                price={{ amount: 150, cents: '.99', period: 'Mes' }}
                buttonText="Conoce más"
            />
        </section>
    </section>
);

export default Complementos;
