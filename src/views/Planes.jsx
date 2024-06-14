import React from "react";
import "../App.css"
import "../styles/Planes.css"

import Header from "../componets/Header_Main"
import Footer from "../componets/Footer_Main"

import Correcto from "../assets/images/Planes/Correcto.png"
import Centro from '../assets/images/Servicios/centro.jpg';



function Planes(){

    
    return( 
        <section>
            <Header/>
            <section>
                <div className="Contenedor_Header_Planes">
                    <div className="Contenedor_h1_plan_Header">
                        <h1>
                            <span>
                                PLANES
                            </span>
                        </h1>
                    </div>
                    <div className="contenedor_h5_plan_Header">
                        <h5>
                            ¡Descubre un entrenamiento efectivo, Inscribete ya! Todo en un click
                        </h5>
                    </div>
                </div>
                
            
                <div className="contenedor_Principal_Planes">
                    <h3 className="titulo_Principal_Planes">
                        Elige tu plan y empieza ahora!  
                    </h3>
                    <div className="contenedor_cards_Planes">
                    <div className="contenedor_Card_Precios">
                            <div className="contenedor_1_card_Precios">

                                <h4 className="titulo_4_Planes">
                                    3 Veces por semana
                                </h4>
                                <p className="texto_1_Planes">
                                    Entrena En cualquiera de nuestros Centros
                                </p>

                                <div className="contenedor_texto_2_Planes">
                                    <p>
                                        Desde
                                    </p>
                                </div>
                                
                                <h2 className="titulo_5_Planes">
                                    200 Bs
                                </h2>

                                <button className="Boton_seleccion_Precio">
                                    Seleccionar 
                                </button>
                            </div>
                            <div className="contenedor_2_card_Precios">
                                <h5 className="titulo_5_2_Planes">
                                    Beneficios
                                </h5>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Área de peso libre y peso integrado</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Sillon de Masajes</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso a nuestras clases Exclusivas CEC-FGI</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso ilimitado a todas las areas</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Ropa de entrenamiento diario incluida</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Invitar a un amigo</p>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor_Card_Precios">
                            <div className="contenedor_1_card_Precios">

                                <h4 className="titulo_4_Planes">
                                    3 Veces por semana
                                </h4>
                                <p className="texto_1_Planes">
                                    Entrena En cualquiera de nuestros Centros
                                </p>

                                <div className="contenedor_texto_2_Planes">
                                    <p>
                                        Desde
                                    </p>
                                </div>
                                
                                <h2 className="titulo_5_Planes">
                                    200 Bs
                                </h2>

                                <button className="Boton_seleccion_Precio">
                                    Seleccionar 
                                </button>
                            </div>
                            <div className="contenedor_2_card_Precios">
                                <h5 className="titulo_5_2_Planes">
                                    Beneficios
                                </h5>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Área de peso libre y peso integrado</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Sillon de Masajes</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso a nuestras clases Exclusivas CEC-FGI</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso ilimitado a todas las areas</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Ropa de entrenamiento diario incluida</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Invitar a un amigo</p>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor_Card_Precios">
                            <div className="contenedor_1_card_Precios">

                                <h4 className="titulo_4_Planes">
                                    3 Veces por semana
                                </h4>
                                <p className="texto_1_Planes">
                                    Entrena En cualquiera de nuestros Centros
                                </p>

                                <div className="contenedor_texto_2_Planes">
                                    <p>
                                        Desde
                                    </p>
                                </div>
                                
                                <h2 className="titulo_5_Planes">
                                    200 Bs
                                </h2>

                                <button className="Boton_seleccion_Precio">
                                    Seleccionar 
                                </button>
                            </div>
                            <div className="contenedor_2_card_Precios">
                                <h5 className="titulo_5_2_Planes">
                                    Beneficios
                                </h5>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Área de peso libre y peso integrado</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Sillon de Masajes</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso a nuestras clases Exclusivas CEC-FGI</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso ilimitado a todas las areas</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Ropa de entrenamiento diario incluida</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Invitar a un amigo</p>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor_Card_Precios">
                            <div className="contenedor_1_card_Precios">

                                <h4 className="titulo_4_Planes">
                                    3 Veces por semana
                                </h4>
                                <p className="texto_1_Planes">
                                    Entrena En cualquiera de nuestros Centros
                                </p>

                                <div className="contenedor_texto_2_Planes">
                                    <p>
                                        Desde
                                    </p>
                                </div>
                                
                                <h2 className="titulo_5_Planes">
                                    200 Bs
                                </h2>

                                <button className="Boton_seleccion_Precio">
                                    Seleccionar 
                                </button>
                            </div>
                            <div className="contenedor_2_card_Precios">
                                <h5 className="titulo_5_2_Planes">
                                    Beneficios
                                </h5>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Área de peso libre y peso integrado</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Sillon de Masajes</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso a nuestras clases Exclusivas CEC-FGI</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso ilimitado a todas las areas</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Ropa de entrenamiento diario incluida</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Invitar a un amigo</p>
                                </div>
                            </div>
                        </div>
                        <div className="contenedor_Card_Precios">
                            <div className="contenedor_1_card_Precios">

                                <h4 className="titulo_4_Planes">
                                    3 Veces por semana
                                </h4>
                                <p className="texto_1_Planes">
                                    Entrena En cualquiera de nuestros Centros
                                </p>

                                <div className="contenedor_texto_2_Planes">
                                    <p>
                                        Desde
                                    </p>
                                </div>
                                
                                <h2 className="titulo_5_Planes">
                                    200 Bs
                                </h2>

                                <button className="Boton_seleccion_Precio">
                                    Seleccionar 
                                </button>
                            </div>
                            <div className="contenedor_2_card_Precios">
                                <h5 className="titulo_5_2_Planes">
                                    Beneficios
                                </h5>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Área de peso libre y peso integrado</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Sillon de Masajes</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso a nuestras clases Exclusivas CEC-FGI</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Acceso ilimitado a todas las areas</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Ropa de entrenamiento diario incluida</p>
                                </div>
                                <div className="contenido_Card_Beneficios">
                                    <img src={Correcto} alt="" />
                                    <p>Invitar a un amigo</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="contenedor_consulta_Planes">
                    <p>*Consulte las tarifas de fidelidad, inscripción y anualidad en cada gimnasio.</p>
                </div>

                <div className="contenedor_servicios_Planes">
                    <div className="contenedor_Texto_Servicios">
                        <h2><span>PRODUCTOS Y SERVICIOS </span></h2>
                        <p>Conoce los cervicios especiales para complementar tu experiencia</p>
                    </div>
                </div>

                <div>
                    <div>
                        <div>
                            <img src="" alt="" />
                        </div>
                        <div>
                            <h5>Entrenamiento inteligente</h5>
                            <p>¡Sigue la revolucion de lo mas nuevo en el entrenamiento, y no te quedes atras, prueba nuestros entrenamientos guiados por inteliguencia artificial. </p>
                        </div>

                        <a href="">
                            Consulte si esta disponible el servicio en su centro
                        </a>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
            <Footer/>
        </section>
    )
}
export default Planes