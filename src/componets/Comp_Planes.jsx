import React from "react";
import { Link } from 'react-router-dom';
import "../App.css"
import "../styles/home_styles.css"
import "../styles/Planes/planes.css"


function Planes(){

    
    return( 
        <section className="table_Prices_Service">
            <div className='planes-title-container'>            
                <h3>
                    Elige alguno de nuestros<span> mejores planes</span>
                    <div className="underline"></div>
                </h3>
            </div>
                <ul className="colum_Prices_Service_up">
                    <li className="row_Prices_Services_up">
                        <div className="head_Colum_Prices">
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services_titles">Numero de Entradas</li>
                            <li className="row_Prices_Services_titles">Entrenamiento Aerobico</li>
                            <li className="row_Prices_Services_titles">Entrenamiento Funcional</li>
                            <li className="row_Prices_Services_titles">Acceso a todos los centros</li>
                            <li className="row_Prices_Services_titles">Invitar un amigo</li>
                            
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_principal">
                        <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan - Cobre</p>
                            <p className="detalle_descripcion1">Toalla de regalo </p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">1</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion3"><span>Desde</span></li>
                                <p className="detalle_descripcion">Bs 15.00/Sesion</p>
                            </div>
                            <div className="estructure-div-1 button-prices">
                                <button>Inscribirme</button>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_up">
                        <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan - Plata</p>
                            <p className="detalle_descripcion1">Indumentaria de regalo</p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">8</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion3"><span>Desde</span></li>
                                <p className="detalle_descripcion">Bs 70.00/mes </p>
                            </div>
                            <div className="estructure-div-1 button-prices">
                                <button>Inscribirme</button>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_up">
                        <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan - Platino</p>
                            <p className="detalle_descripcion1">Entrena en más de 1.400 gimnasios en Latinoamérica</p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">12</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion3"><span>Desde</span></li>
                                <p className="detalle_descripcion">Bs 100.00/mes </p>
                            </div>
                            <div className="estructure-div-1 button-prices">
                                <button>Inscribirme</button>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_up">
                        <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan - Oro</p>
                            <p className="detalle_descripcion1">Entrena todo lo que quieras en tu unidad y paga menos </p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">21</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">No</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion3"><span>Desde</span></li>
                                <p className="detalle_descripcion">Bs 170.00/mes </p>
                            </div>
                            <div className="estructure-div-1 button-prices">
                                <button>Inscribirme</button>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_up">
                    <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan - Diamante</p>
                            <p className="detalle_descripcion1">Entrena cuando quieras en tu gimnasio de elección </p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">Ilimitadas</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">Si</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion3"><span>Desde</span></li>
                                <p className="detalle_descripcion">Bs 200.00/mes </p>
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