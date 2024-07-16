import React from "react";
import "../../styles/home_styles.css";
import "../../styles/Complementos/complementos.css";

import App from "../../assets/images/Complementos/app.svg";
import Energy from "../../assets/images/Complementos/Energy.svg";
import NutriComp from "../../assets/images/Complementos/Nutricion.svg";
import { Link } from "react-router-dom";

const Card = ({ icon, title, description, benefit, price, buttonText, link, special }) => (
    <article className={`estructure-card-1 ${special ? "estructure-card-especial" : ""}`} >
        <div className="contenedor-iconos-type-1">
            <img src={icon} alt={title} className="Iconos-detalle" />
        </div>
        <h4>{title}</h4>
        <div className="contenedor-texto-1">
            <p className="Text-complemento">{description}</p>
        </div>
        <div className="contenido-inferior-complemento">
            <p className="descripcion-App">{benefit}</p>
            {price && (
                <div className="container-price">
                    <p>Bs</p>
                    <h2>{price.amount}</h2>
                    <p>{price.cents}</p>
                    <p>/{price.period}</p>
                </div>
            )}
            <Link to={link}>
                <button className="estructure-size estructure-button-1 button-type-4">
                    {buttonText}
                </button>
            </Link>
        </div>
    </article>
);

const Complementos = () => (
    <section className="estructura-principal-cards"  >
        <div className="container-head-section">
            <div>            
                <h4>
                    Complementa tu <span>Entrenamiento</span>
                    <div className="underline"></div>
                </h4>
            </div>
            <Link to="/paginaExtra">
                    Mas...
            </Link>
        </div>
        <section className="container-cards">
            <Card
                icon={App}
                title="CEC-RX55"
                description="Lleva tu entrenamiento a donde quieras y cuando quieras con nuestra plataforma virtual de clases y contenido fitness."
                benefit="Beneficio gratuito para los clientes."
                buttonText="Tienda"
                link="/Tienda de entrenamientos"
            />
            <Card
                icon={NutriComp}
                title="Nutri-Fit by CEC"
                description="Si quieres resultados rápidos, también debes cuidar la alimentación. Prueba de nuestras comidas."
                benefit="Come saludable"
                price={{ amount: 150, cents: '.99', period: 'Mes' }}
                buttonText="Tienda"
                link="/Tienda de entrenamientos"
                special
            />
            <Card
                icon={Energy}
                title="Lacto Bar Energy"
                description="Disfruta de bebidas especiales, mantente hidratado y mejora tu rendimiento al entrenar."
                benefit="Sientete muy bien al entrenar."
                price={{ amount: 150, cents: '.99', period: 'Mes' }}
                buttonText="Conoce más"
                link="/Tienda de entrenamientos"
            />
        </section>
    </section>
);

export default Complementos;
