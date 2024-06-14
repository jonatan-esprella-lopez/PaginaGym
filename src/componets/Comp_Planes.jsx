import React from "react";
import { Link } from 'react-router-dom';
import "../App.css"
import "../styles/home_styles.css"


function Planes(){

    
    return( 
        <section className="table_Prices_Service">
            <h2>
                Elige alguno de nuestros<span> mejores planes</span>
            </h2>
                <ul className="colum_Prices_Service_up">
                    <li className="row_Prices_Services_up">
                        <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title"></p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services_titles">Numero de Entradas</li>
                            <li className="row_Prices_Services_titles">Entrenamiento Funcional</li>
                            <li className="row_Prices_Services_titles">Acceso a todos los centros</li>
                            <li className="row_Prices_Services_titles">Invitar un amigo</li>
                            
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_principal">
                        <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan <span>Cobre</span></p>
                            <p className="detalle_descripcion">Realizacion ahora con </p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">1</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion"><span>Desde</span></li>
                                <p className="detalle_descripcion"><strong>Bs 15.00/Sesion</strong></p>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_up">
                        <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan <span>Plata</span></p>
                            <p className="detalle_descripcion">Realizacion ahora con </p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">8</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion"><span>Desde</span></li>
                                <p className="detalle_descripcion"><strong>Bs 70.00/mes </strong></p>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_up">
                        <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan <span>Platino</span></p>
                            <p className="detalle_descripcion">Realizacion ahora con </p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">12</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">No</li>
                            <li className="row_Prices_Services">No</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion"><span>Desde</span></li>
                                <p className="detalle_descripcion"><strong>Bs 100.00/mes </strong></p>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_up">
                        <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan <span>Oro</span></p>
                            <p className="detalle_descripcion">Realizacion ahora con </p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">21</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">No</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion"><span>Desde</span></li>
                                <p className="detalle_descripcion"><strong>Bs 170.00/mes </strong></p>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                    <li className="row_Prices_Services_up">
                    <div className="head_Colum_Prices">
                            <p className="row_Prices_Services_title">Plan <span>Negro</span></p>
                            <p className="detalle_descripcion">Realizacion ahora con </p>
                        </div>
                        <ul className="colum_Prices_Service">
                            <li className="row_Prices_Services">Ilimitadas</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">Si</li>
                            <li className="row_Prices_Services">Si</li>
                            <div className="row_Prices_Services_Final">
                                <li className="detalle_descripcion"><span>Desde</span></li>
                                <p className="detalle_descripcion"><strong>Bs 200.00/mes </strong></p>
                            </div>
                        </ul>
                        <div>

                        </div>
                    </li>
                </ul>
                
                <Link to="/Inscripcion"className="content_Find_Center">
                    <button className="Banner_boton_llamado">
                    ¡Comienza Ahora!
                    </button>
                </Link>
            </section>
            
    )
}
export default Planes