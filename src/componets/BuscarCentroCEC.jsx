import React from "react";
import { Link } from "react-router-dom";
import "../styles/Busqueda.css"
import Busqueda from "../assets/images/busqueda.svg"

function BusquedaCEC(){

    
    return( 
        <div className="image_Find_Center">
            <h4>Encuentra un Centro<span> CEC - FGI</span> Cerca</h4>
                <div className="Banner_boton_gimnasio">
                    <div>
                        <div className="contenedor-titulo-FC">    
                            <p>Encuentra un centro</p>
                        </div>
                        <span className="contenedor-Busqueda">
                            <img src={Busqueda} alt="Lupa" className="iconos"/> 
                            <input type="search" name="search" placeholder="Escribe tu ciudad o provincia" className="busqueda-input"/>
                            <Link to="/Nuestros Gimnasios">
                                <button className="Boton-buscar-centro">
                                    Buscar
                                </button>
                            </Link>
                        </span>
                    </div>
                </div>
                
        </div>
    )
}
export default BusquedaCEC