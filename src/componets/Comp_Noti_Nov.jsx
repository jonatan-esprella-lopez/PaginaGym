import React from "react";
import "../App.css"
import "../styles/home_styles.css"


function Novedades(){

    
    return( 
        <section className="contenedor_Registro_Main">
                <h3>
                Recibie las novedades y promociones exclusivas de CEC-FGI.
                </h3>
                <div className="contenedor_Registro_Home">
                    <input type="text" placeholder="Ingresá tu correo electrónico" id="input_correo" className="input_correo_home"/>
                    <input type="submit"  className="Boton_Prices" value="Registrate"/>
                </div>
            </section>
    )
}
export default Novedades