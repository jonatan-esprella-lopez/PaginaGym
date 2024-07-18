import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Busqueda.css';
import Busqueda from '../assets/images/busqueda.svg';

function BusquedaCEC() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate(`/Nuestros Gimnasios?query=${encodeURIComponent(searchQuery)}`);
  };

  const handleChange = (event) => {
    setSearchQuery(event.target.value);
  };

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
                value={searchQuery}
                onChange={handleChange}
                placeholder="Escribe tu ciudad o provincia"
                className="busqueda-input"
                aria-label="Buscar centro por ciudad o provincia"
              />
              <button
                className="button-type-4 estructura-size2"
                onClick={handleSearch}
              >
                Buscar
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BusquedaCEC;
