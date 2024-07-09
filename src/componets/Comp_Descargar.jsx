import React from "react";
import "../styles/home_styles.css";
import QR from "../assets/images/qr.png";
import AppMockup from "../assets/images/app.webp";

const Title = ({ text, highlight }) => (
    <h3 className="texto-titulo-App">
        {text} <span>{highlight}</span>
    </h3>
);

const Description = ({ text }) => <p className="texto-descripcion-App">{text}</p>;

const QRCode = ({ src, alt }) => <img src={src} alt={alt} className="imagen-qr" />;

const AppLink = ({ href, src, alt, className }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
        <img src={src} alt={alt} />
    </a>
);

const AppImage = ({ src, alt, className }) => <img src={src} alt={alt} className={className} />;

const AppMobil = () => (
    <section className="contenedor-App-Mobil">
        <article>
            <Title text="En" highlight="CEC-FGI App" />
            <Description text="Nos preocupamos porque entrenes siempre, descarga la App" />
            <Description text="No importa si ya tienes experiencia o si recién estás comenzando en el Entrenamiento Funcional, descargar gratis la aplicación del centro de entrenamiento CEC, obtien al mejor aliado para tus rutinas de entrenamiento. Exclusivo para miembros." />
            <Description text="Escanea el código para descargar gratis." />
            <article className="contenedor-Links-App">
                <QRCode src={QR} alt="Código QR" />
                <div className="contenido-App">
                    <AppLink
                        href="https://play.google.com/store/apps/details?id=com.eokoe.smartfitcoach"
                        src="https://assets.smartfit.com.br/production/newHome/google-play-badge-es.png"
                        alt="Icono Google Play"
                        className="GooplePlay"
                    />
                    <AppLink
                        href="https://apps.apple.com/app/smart-fit-app/id1308265270"
                        src="https://assets.smartfit.com.br/production/newHome/apple-badge-es.png"
                        alt="Icono Apple Store"
                    />
                </div>
            </article>
        </article>
        <div className="contenedor-imagen-App">
            <AppImage src={AppMockup} alt="Mockup de la App" className="imagen-mockup-App" />
        </div>
    </section>
);

export default AppMobil;
