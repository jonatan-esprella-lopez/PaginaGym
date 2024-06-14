import React from "react";
import "../App.css"
import "../styles/home_styles.css"

import QR from "../assets/images/qr.png"
import AppMockup from "../assets/images/app.webp"


function AppMobil(){

    
    return( 
        <section className="contenedor_App_Mobil">
                <div className="contenedor_titulo_App">
                    <h3 className="texto_titulo_App">En <span>CEC-FGI App</span> Nos preocupamos porque entrenes siempre, descarga la App</h3>
                    <p className="texto_descripcion_App">No importa si ya tienes experiencia o si recién estás comenzando en el Entrenamiento Funcional, descargar gratis la aplicación del centro de entrenamiento CEC, obtien al mejor aliado para tus rutinas de entrenamiento. Exclusivo para miembros.</p>
                    <p className="texto_descripcion_App">Escanea el código para descargar gratis.</p>
                    <div className="contenedor_Links_App">
                        <img src={QR} alt=""  className="imagen_qr"/>
                        <div className="contenido_App">
                            <a href="https://play.google.com/store/apps/details?id=com.eokoe.smartfitcoach"  className="GooplePlay">
                                <img src="https://assets.smartfit.com.br/production/newHome/google-play-badge-es.png" alt="Icone Google Play" ></img>
                            </a>
                            <a href="https://apps.apple.com/app/smart-fit-app/id1308265270" target="_blank">
                                <img src="https://assets.smartfit.com.br/production/newHome/apple-badge-es.png" alt="Icone Apple Store"></img>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="contenedor_imagen_App">
                    <img src={AppMockup} alt=""  className="imagen_mockup_App"/>
                </div>
            </section>
    )
}
export default AppMobil