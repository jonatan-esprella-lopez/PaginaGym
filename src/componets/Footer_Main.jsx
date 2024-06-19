import React from "react";
import { ReactComponent as Fb } from "../assets/images/facebook.svg";
import { ReactComponent as IG } from "../assets/images/instagram.svg";
import { ReactComponent as Spotify } from "../assets/images/instagram.svg";
import { ReactComponent as Twitter } from "../assets/images/instagram.svg";
import { ReactComponent as YouTube } from "../assets/images/instagram.svg";
import "../styles/home_styles.css"
function FooterMain() {
    return (
        <footer className="footer">
            <div className="footer-top">
                <h3 className="footer-title">Síguenos</h3>
                <div className="footer-social-links">
                    <a href="#" className="social-link"><Fb className="social-icon" /> FACEBOOK</a>
                    <a href="#" className="social-link"><IG className="social-icon" /> INSTAGRAM</a>
                    <a href="#" className="social-link"><Spotify className="social-icon" /> SPOTIFY</a>
                    <a href="#" className="social-link"><Twitter className="social-icon" /> TWITTER</a>
                    <a href="#" className="social-link"><YouTube className="social-icon" /> YOUTUBE</a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-column">
                    <h4>CEC - FGI</h4>
                    <a href="#">Quienes somos</a>
                    <a href="#">Hable con nosotros</a>
                    <a href="#">Aviso de Privacidad</a>
                </div>
                <div className="footer-column">
                    <h4>Planes</h4>
                    <a href="#">Planes</a>
                    <a href="#">Documentos</a>
                </div>
                <div className="footer-column">
                    <h4>Nuestra Compañía</h4>
                    <a href="#">Quiero ser franquiciatario</a>
                    <a href="#">Promociona tu marca</a>
                    <a href="#">Indica un local</a>
                    <a href="#">Trabaja con nosotros</a>
                </div>
            </div>
        </footer>
    );
}

export default FooterMain;
