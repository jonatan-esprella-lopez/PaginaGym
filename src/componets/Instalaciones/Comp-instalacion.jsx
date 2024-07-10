import React from "react";
import { Link } from "react-router-dom";
import "../../App.css";
import "../../styles/Instalaciones/Areas.css";

import Funcional from "../../assets/images/CEC/ambienteFuncional.jpg";
import Aerobicos from "../../assets/images/CEC/ambienteAerobicos.jpg";
import Lacteos from "../../assets/images/CEC/ambienteLacteos.jpg";
import FindCenter from "../../assets/images/findCenter.jpg";

const TitleSection = ({ title, highlight, subtitle, linkText, linkHref }) => (
    <div className="container-head-section">
        <div>
            <h4>
                {title} <span>{highlight}</span>
                <div className="underline"></div>
            </h4>
            <p>{subtitle}</p>
        </div>
        <a href={linkHref}>{linkText}</a>
    </div>
);

const Card = ({ image, text, link }) => (
    <Link to={link}>
        <article className="estructure-card-1 Cont-areas-Tarjeta">
            <img src={image} alt={text} className="imagen-instalacion" />
            <p className="Text_instalaciones">{text}</p>
        </article>
    </Link>
);

const Instalaciones = () => (
    <section className="estructura-principal-cards">
        <TitleSection
            title="Experimenta la calidad de entrenamiento en"
            highlight="CEC - FGI"
            linkText="Encuentra más ambientes..."
            linkHref="/paginaExtra"
        />
        <div className="container-cards">
            <Card
                image={Funcional}
                text="Instalación de Entrenamiento Funcional"
                link="/Aerobicos"
            />
            <Card
                image={Lacteos}
                text="Instalación de Hidratación y Evaluación"
                link="/Lacteos"
            />
            <Card
                image={Aerobicos}
                text="Instalación de Aeróbicos"
                link="/Aerobicos"
            />
            <Card
                image={FindCenter}
                text="Instalación de Full Kombat"
                link="/FullKombat"
            />
        </div>
    </section>
);

export default Instalaciones;
