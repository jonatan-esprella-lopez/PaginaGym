import React from "react";
import "../App.css"
import "../styles/home_styles.css"


function Novedades(){

    
    return( 
        <section className="contenedor_Registro_Main">
                
                <div className="container-head-section1">    
                    <div>   
                        <h4>
                            Recibie las novedades y promociones exclusivas de <span>CEC-FGI.</span>
                            <div className="underline"></div>
                        </h4>
                    </div>
                </div>

                <div className="contenedor_Registro_Home">
                    <input type="search" placeholder="Ingresá tu correo electrónico" id="input_correo" className="input_correo_home"/>
                    

                    <button className="button-type-4 estructura-size2">
                        Registrate
                    </button>
                </div>
            </section>
    )
}
export default Novedades