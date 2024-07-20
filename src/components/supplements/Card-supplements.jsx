import { Link } from "react-router-dom";

const Card = ({ icon, title, description, benefit, price, buttonText, link, special }) => (
    <article className={`estructure-card-1 ${special ? "estructure-card-especial" : ""}`} >
        <div className="contenedor-iconos-type-1">
            <img src={icon} alt={title} className="Iconos-detalle" />
        </div>
        <p className="title-component">{title}</p>
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

export default Card;
