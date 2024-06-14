import React from "react";
import { Link } from 'react-router-dom';
import BannerVideoHome from "../../assets/videos/BannerHome.mp4"
import "../../styles/Home/banner-principal.css"

function Banner(){

    return( 
        <section className="Banner_Home_Main">
            <video autoPlay muted className="Banner_video">
                <source src={BannerVideoHome} type="video/mp4"/>
            </video>
    
            <div className="Banner_content">
                <h1>
                    ¿Listo Para Entrenar?
                </h1>
                <p>
                    Recuerda, entrenar por el cuerpo que deseas
                </p>
                <Link to="/Planes de inscripcion"className="content_Find_Center">
                    <button className="buton-type-3 estructure-button-1">
                        Empieza hoy !
                    </button>
                </Link>
            </div>
        </section>
    )
}export default Banner;