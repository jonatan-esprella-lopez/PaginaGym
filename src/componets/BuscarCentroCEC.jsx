import React from "react";
import { Link } from "react-router-dom";
import "../styles/Busqueda.css";
import Busqueda from "../assets/images/busqueda.svg";

function BusquedaCEC() {
  return (
    <>
        <div className="container-head-section">
            <div>            
                <h4>
                    Encuentra un centro <span>CEC - FGI</span> Cerca
                    <div className="underline"></div>
                </h4>
            </div>
        </div>
      

      <section className="image_Find_Center">
        <div className="Banner_boton_gimnasio">
          <div>
            <div className="contenedor-titulo-FC">
              <p>Encuentra un centro</p>
            </div>
            <div className="contenedor-Busqueda">
              <img src={Busqueda} alt="Lupa" className="iconos" />
              <input
                type="search"
                name="search"
                placeholder="Escribe tu ciudad o provincia"
                className="busqueda-input"
                aria-label="Buscar centro por ciudad o provincia"
              />
              <Link to="/Nuestros Gimnasios">
                <button className="button-type-4 estructura-size2">
                  Buscar
                </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BusquedaCEC;
