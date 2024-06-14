import React from "react";
import "../App.css"
import "../styles/home_styles.css"
import Fb from "../assets/images/facebook.svg"
import IG from "../assets/images/instagram.svg"


function FooterMain(){

    
    return( 
        <footer>
            
            <div className="footer-section about">
                <h3>Acerca de CEC-FGI</h3>
                <p>En Mundo Nutrición queremos ayudarte con tus entrenamientos, para ello te ofrecemos varios ejemplos de programas que puedes seguir para poder alcanzar tus objetivos. Es importante que tengas en cuenta que en Mundo Nutrición creamos estos programas a modo de sugerencia, para que tengas una guía de cómo puedes entrenar. Cada persona tiene condiciones físicas y mentales distintas, por lo que puede que algunos de estos programas no se ajusten a tus necesidades, intenta conocer y respetar tus límites para evitar lesiones y otro tipo de daños.</p>
            </div>
            <img src="" alt="" />
            <div className="conteiner_footer">
                <div>
                    <div className="columna_Nuestras_Clases">
                        <h3>Clases</h3>
                        <a href="" className="Texto_Footer_n_c">Acerca de nuestras clases</a>
                        
                        <a href="" className="Texto_Footer_n_c">Programas</a>
                        <a href="" className="Texto_Footer_n_c">Horarios</a>
                        <a href="" className="Texto_Footer_n_c">Instructores</a>
                        <a href="" className="Texto_Footer_n_c">Precios</a>
                    </div>
                </div>
                <div className="container_redesSociales">
                    <img src={Fb} alt="" className="Icono_Redes_Sociales"/>
                    <img src={IG} alt="" className="Icono_Redes_Sociales"/>
                    <img src={Fb} alt="" className="Icono_Redes_Sociales"/>
                    <img src={IG} alt="" className="Icono_Redes_Sociales"/>
                </div>
            </div>
        </footer>
    )
}
export default FooterMain