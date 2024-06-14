import React from "react";
import "../App.css"
import "../styles/home_styles.css"


import App from "../assets/images/Complementos/app.svg"
import Energy from "../assets/images/Complementos/Energy.svg"
import NutriComp from "../assets/images/Complementos/Nutricion.svg"

function Complementos(){

    
    return( 
        <section className="estructura-principal-cards">
            <div className="container-head-section">
                <div>            
                    <h4>
                        Complementa tu  <span>Entrenamiento</span>
                        <div className="underline"></div>
                    </h4>
                    
                </div>

                <a href="">
                    Encuentra mas ambientes...
                </a>
            </div>

                <div className="container-cards" >
                    <div className="complementos_container">
                        <div className="icono_container_complemento">
                            <img src={App} alt="" className="Iconos_detalle"/>
                        </div>
                        <h4 className="Titulo_complemento">CEC-RX55</h4>
                        <p className="Text_programas">Lleva tu entrenamiento a donde quieras y cuando quieras con nuestra plataforma virtual de clases y contenido fitness.</p>
                        
                        <div className="contenido_inferior_complemento">
                            <p className="descripcion_App">Beneficio gratuito para los clientes. </p>
                            <a href="https://play.google.com/store/apps/details?id=com.eokoe.smartfitcoach"  className="GooplePlay">
                                <img src="https://assets.smartfit.com.br/production/newHome/google-play-badge-es.png" alt="Icone Google Play" ></img>
                            </a>
                            <a href="https://apps.apple.com/app/smart-fit-app/id1308265270" target="_blank">
                                <img src="https://assets.smartfit.com.br/production/newHome/apple-badge-es.png" alt="Icone Apple Store"></img>
                            </a>
                        </div>    
                    </div>
                    <div className="complementos_container">
                        <div className="icono_container_complemento">
                            <img src={NutriComp} alt="" className="Iconos_detalle" />
                        </div>
                        <h4 className="Titulo_complemento">Nutri-Fit CEC</h4>
                        <p className="Text_programas">Descarga nuestra app de nutrición, agenda consultas en línea con nutriólogos y dale seguimiento a tus resultados con nuestro analizador corporal Smart Body.</p>
                        <div className="contenido_inferior_complemento">
                            <p className="descripcion_App">Beneficio gratuito para los clientes. </p>   
                            <div className="container_price">
                                <p className="Text_programas">$</p>
                                <h2>
                                    39
                                </h2>
                                <h5>
                                    .45
                                </h5>
                                <p className="Text_programas">
                                    /Mensuales
                                </p>
                            </div>
                            <button className="Boton_Prices">
                                Conoce mas
                            </button>
                        </div> 
                    </div>
                    <div className="complementos_container">
                        <div className="icono_container_complemento">
                            <img src={Energy} alt="" />
                        </div>
                        <h4 className="Titulo_complemento">Lacto Bar Energy</h4>
                        <p className="Text_programas">Disfruta de bebidas especiales, mantente hidratado y mejora tu rendimiento al entrenar.</p>
                        <div className="contenido_inferior_complemento">
                            <p className="descripcion_App">Beneficio gratuito para los clientes. </p>   
                            <div className="container_price">
                                <p className="Text_programas">$</p>
                                <h2>
                                    39
                                </h2>
                                <h5>
                                    .45
                                </h5>
                                <p className="Text_programas">
                                    /Mensuales
                                </p>
                            </div>
                            <button className="Boton_Prices">
                                Conoce mas
                            </button>
                        </div>  
                    </div>
                </div>
            </section>
    )
}
export default Complementos