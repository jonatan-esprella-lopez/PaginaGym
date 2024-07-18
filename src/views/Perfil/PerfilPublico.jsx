import Header from "../../componets/Header_Main"
import Footer from "../../componets/Footer_Main"
import "../../styles/PerfilUsuarios.css"

function PerfilPublico(){
    return(
        <div>
            <Header/>
            <div className="ContenedorPerfilUser">
                <div className="FondoNavIzquierda">
                    <div className="NavIPerfil1">
                        <img src="" alt="" />
                        <button className="IconosNavIzquierdo">Inicio</button>
                        <button className="IconosNavIzquierdo">Vida</button>
                        <button className="IconosNavIzquierdo">Acciones</button>
                    </div>
                    <div className="NavIPerfil1">
                        <button>A</button>
                        <p>Descripcion</p>
                        <button>V</button>
                    </div>
                </div>

                <div className="contenedorPerfil">
                    <div >
                        <div className="contendorImagenPerfil">
                            <p className="PosicionNombrePerfil">Jonatan</p>
                        </div>
                        <div className="contendorImagenPerfil">
                            <p className="PosicionNombrePerfil">Julieta</p>
                        </div>
                        <div className="contendorImagenPerfil">
                            <p className="PosicionNombrePerfil">Pedro</p>
                        </div>
                        <div className="contendorImagenPerfil">
                            <p className="PosicionNombrePerfil">Anderson</p>
                        </div>
                        <div className="contendorImagenPerfil">
                            <p className="PosicionNombrePerfil">Carlos</p>
                        </div>
                    </div>
                    <div className="Contenedor-Imagen">
                        <div className="contenedorSection">
                            <div className="contenedeorSectionPerfil">
                                <div className="contenedorDatosPortada">
                                <div className="contenedorNombre">
                                    <p><strong>Jonatan</strong> Esprella</p>
                                </div>
                                <div className="contenedorDescripcion">
                                    <p>
                                    La vida es un viaje lleno de experiencias, emociones y aprendizajes. Es un camino que nos lleva a través de altibajos, desafíos y momentos de alegría. Cada individuo tiene su propia historia que contar, con sus propias victorias y derrotas, sus sueños y aspiraciones.
                                    La vida está llena de oportunidades para crecer, para amar, para aprender y para explorar. Nos enfrentamos a decisiones difíciles, pero también a momentos de felicidad y realización. A medida que avanzamos, descubrimos más sobre nosotros mismos, sobre los demás y sobre el mundo que nos rodea.       
                                    </p>
                                    <p>
                                    La vida es un viaje lleno de experiencias, emociones y aprendizajes. Es un camino que nos lleva a través de altibajos, desafíos y momentos de alegría. Cada individuo tiene su propia historia que contar, con sus propias victorias y derrotas, sus sueños y aspiraciones.
                                    La vida está llena de oportunidades para crecer, para amar, para aprender y para explorar. Nos enfrentamos a decisiones difíciles, pero también a momentos de felicidad y realización. A medida que avanzamos, descubrimos más sobre nosotros mismos, sobre los demás y sobre el mundo que nos rodea.       
                                    </p>
                                </div>
                                <div className="contenedorLinksperfil">
                                    <button className="BotonRedes">Facebook</button>
                                    <button className="BotonRedes">Instagram</button>
                                </div>
                                </div>
                            </div>
                            <div className="contenedorLateralDerecho">
                                <button className="textoExtremos">///</button>
                                <button className="textoExtremos">Portada</button>
                                <button className="textoVertical">Historia</button>
                                <button className="textoVertical">Poster</button>
                                <button className="textoVertical">Diseno</button>
                                <button className="textoExtremos">---</button>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </div>
            <Footer/>
        </div>
    )
} 
export default PerfilPublico;