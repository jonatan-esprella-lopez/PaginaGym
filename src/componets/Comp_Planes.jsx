import { Link } from 'react-router-dom';
import "../App.css"
import "../styles/home_styles.css"
import "../styles/Planes/planes.css"


function Planes(){

    
    return( 
        <section className="table-Prices-Service">
            <div className='planes-title-container'>            
                <h3>
                    Elige alguno de nuestros<span> mejores planes</span>
                    <div className="underline"></div>
                </h3>
            </div>
                <ul className="colum-Prices-Service-up">
                    <li className="row-Prices-Services-up">
                        <div className="head-Colum-Prices">
                        </div>
                        <ul className="colum-Prices-Service">
                            <li className="row-Prices-Services-titles">Numero de Entradas</li>
                            <li className="row-Prices-Services-titles">Entrenamiento Aerobico</li>
                            <li className="row-Prices-Services-titles">Entrenamiento Funcional</li>
                            <li className="row-Prices-Services-titles">Acceso a todos los centros</li>
                            <li className="row-Prices-Services-titles">Invitar un amigo</li>
                            
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row-Prices-Services-principal">
                        <div className="head-Colum-Prices">
                            <p className="row-Prices-Services-title">Plan - Cobre</p>
                            <p className="detalle-descripcion1">Toalla de regalo </p>
                        </div>
                        <ul className="colum-Prices-Service">
                            <li className="row-Prices-Services">1</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">No</li>
                            <li className="row-Prices-Services">No</li>
                            <li className="row-Prices-Services">No</li>
                            <div className="row-Prices-Services-Final">
                                <li className="detalle-descripcion3"><span>Desde</span></li>
                                <p className="detalle-descripcion">Bs 15.00/Sesion</p>
                            </div>
                            <div className="estructure-div-1 button-prices">
                                <button>Inscribirme</button>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row-Prices-Services-up">
                        <div className="head-Colum-Prices">
                            <p className="row-Prices-Services-title">Plan - Plata</p>
                            <p className="detalle-descripcion1">Indumentaria de regalo</p>
                        </div>
                        <ul className="colum-Prices-Service">
                            <li className="row-Prices-Services">8</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">No</li>
                            <li className="row-Prices-Services">No</li>
                            <li className="row-Prices-Services">No</li>
                            <div className="row-Prices-Services-Final">
                                <li className="detalle-descripcion3"><span>Desde</span></li>
                                <p className="detalle-descripcion">Bs 70.00/mes </p>
                            </div>
                            <div className="estructure-div-1 button-prices">
                                <button>Inscribirme</button>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row-Prices-Services-up">
                        <div className="head-Colum-Prices">
                            <p className="row-Prices-Services-title">Plan - Platino</p>
                            <p className="detalle-descripcion1">Entrena en más de 1.400 gimnasios en Latinoamérica</p>
                        </div>
                        <ul className="colum-Prices-Service">
                            <li className="row-Prices-Services">12</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">No</li>
                            <li className="row-Prices-Services">No</li>
                            <div className="row-Prices-Services-Final">
                                <li className="detalle-descripcion3"><span>Desde</span></li>
                                <p className="detalle-descripcion">Bs 100.00/mes </p>
                            </div>
                            <div className="estructure-div-1 button-prices">
                                <button>Inscribirme</button>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row-Prices-Services-up">
                        <div className="head-Colum-Prices">
                            <p className="row-Prices-Services-title">Plan - Oro</p>
                            <p className="detalle-descripcion1">Entrena todo lo que quieras en tu unidad y paga menos </p>
                        </div>
                        <ul className="colum-Prices-Service">
                            <li className="row-Prices-Services">21</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">No</li>
                            <div className="row-Prices-Services-Final">
                                <li className="detalle-descripcion3"><span>Desde</span></li>
                                <p className="detalle-descripcion">Bs 170.00/mes </p>
                            </div>
                            <div className="estructure-div-1 button-prices">
                                <button>Inscribirme</button>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row-Prices-Services-up">
                    <div className="head-Colum-Prices">
                            <p className="row-Prices-Services-title">Plan - Diamante</p>
                            <p className="detalle-descripcion1">Entrena cuando quieras en tu gimnasio de elección </p>
                        </div>
                        <ul className="colum-Prices-Service">
                            <li className="row-Prices-Services">Ilimitadas</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">Si</li>
                            <li className="row-Prices-Services">Si</li>
                            <div className="row-Prices-Services-Final">
                                <li className="detalle-descripcion3"><span>Desde</span></li>
                                <p className="detalle-descripcion">Bs 200.00/mes </p>
                            </div>
                            <div className="estructure-div-1 button-prices">
                                <button>Inscribirme</button>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                </ul>
                
            </section>
            
    )
}
export default Planes