import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../styles/Gimnasio.css';
import Header from "../componets/Header_Main";
import Novedades from "../componets/Comp_Noti_Nov";
import Footer from "../componets/Footer_Main";
import RitmosFitness from "../assets/images/Clases/Ritmos.jpg";

function GimnasioPage() {
  
  const location = useLocation();
  const [searchTerm, setSearchTerm] = useState("");
  const [checks, setChecks] = useState([
      { id: 'estructura', isChecked: false, text: 'Estructuras' },
      { id: 'estacionamiento', isChecked: false, text: 'Estacionamiento' },
      { id: 'elevador', isChecked: false, text: 'Elevador' },
      { id: 'lacto-bar', isChecked: false, text: 'Lacto - Bar' },
      { id: 'nutricionista', isChecked: false, text: 'Nutricionista' },
      { id: 'full-kombat', isChecked: false, text: 'Full Kombat' },
      { id: 'ritmos-fitness', isChecked: false, text: 'Ritmos Fitness' },
      { id: 'rebound-xtreme', isChecked: false, text: 'Rebound Xtreme' },
      { id: 'step-z', isChecked: false, text: 'Step-Z' },
      { id: 'entrenamiento-funcional', isChecked: false, text: 'Entrenamiento Funcional' },
    ]);

    useEffect(() => {
      const queryParams = new URLSearchParams(location.search);
      const query = queryParams.get("query");
      setSearchTerm(query || "");
      if (query) {
        console.log("Búsqueda automática con término:", query);
      }
    }, [location.search]);

    const handleCheckChange = (index) => {
      const newChecks = [...checks];
      newChecks[index].isChecked = !newChecks[index].isChecked;
      setChecks(newChecks);
    };

    const handleFilterSubmit = () => {
      const selectedFilters = checks.filter(check => check.isChecked).map(check => check.text);
      console.log('Selected filters:', selectedFilters);

      fetch('https://your-backend-url.com/filters', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({ filters: selectedFilters }),
      })
      .then(response => response.json())
      .then(data => {
          console.log('Success:', data);
      })
      .catch(error => {
          console.error('Error:', error);
      });
    };

    const handleInputChange = (event) => {
      setSearchTerm(event.target.value);
    };

    const handleSubmit = (event) => {
      event.preventDefault();
      handleFilterSubmit();
    };        

  return (
    <div className='Container_Main'>
      <Header />
      <div className="contenedor-buscador-gimnasio">
        <h2>Elige Alguno de Nuestros Centros de Entrenamiento</h2>
        <form className="contenedor-buscador" onSubmit={handleSubmit}>
          <label htmlFor="search-gym">Encuentra un gimnasio</label>
          <input
            id="search-gym"
            type="text"
            placeholder="Encuentra un gimnasio"
            value={searchTerm}
            onChange={handleInputChange}
          />
          <button type="submit">Filtrar</button>
        </form>
      </div>

      <div className='contendor_principal_gym'>
        <div className='contenedor_1_gimnasios'>
          {checks.map((item, index) => (
            <div key={item.id} className='Lista-filtro'>
              <label htmlFor={item.id}>{item.text}</label>
              <input
                id={item.id}
                type="checkbox"
                checked={item.isChecked}
                onChange={() => handleCheckChange(index)}
              />
            </div>
          ))}
        </div>

        <div className='cont-gyms'>
          <div className="card-gym estructura-card-2 ">
            <img src={RitmosFitness} alt="Gym" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">Averanda</h2>
              <p className="card-address">
                AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR
              </p>
              <a href="#" className="card-link">Ver gimnasio</a>
              <div className="card-offer">1ER MES GRATIS + INSCRIPCIÓN $10</div>
              <div className="card-prices">
                <div className="price">
                  <span className="price-type">SMART</span>
                  <span className="original-price">$499.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">BLACK</span>
                  <span className="original-price">$599.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">FIT</span>
                  <span className="original-price">$399.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
              </div>
              <button className="estructure-size estructure-button-1 button-type-4">¡Inscríbete ya!</button>
            </div>
          </div>

          <div className="card-gym estructura-card-2 ">
            <img src={RitmosFitness} alt="Gym" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">Averanda</h2>
              <p className="card-address">
                AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR
              </p>
              <a href="#" className="card-link">Ver gimnasio</a>
              <div className="card-offer">1ER MES GRATIS + INSCRIPCIÓN $10</div>
              <div className="card-prices">
                <div className="price">
                  <span className="price-type">SMART</span>
                  <span className="original-price">$499.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">BLACK</span>
                  <span className="original-price">$599.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">FIT</span>
                  <span className="original-price">$399.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
              </div>
              <button className="estructure-size estructure-button-1 button-type-4">¡Inscríbete ya!</button>
            </div>
          </div>

          <div className="card-gym estructura-card-2 ">
            <img src={RitmosFitness} alt="Gym" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">Averanda</h2>
              <p className="card-address">
                AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR
              </p>
              <a href="#" className="card-link">Ver gimnasio</a>
              <div className="card-offer">1ER MES GRATIS + INSCRIPCIÓN $10</div>
              <div className="card-prices">
                <div className="price">
                  <span className="price-type">SMART</span>
                  <span className="original-price">$499.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">BLACK</span>
                  <span className="original-price">$599.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">FIT</span>
                  <span className="original-price">$399.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
              </div>
              <button className="estructure-size estructure-button-1 button-type-4">¡Inscríbete ya!</button>
            </div>
          </div>

          <div className="card-gym estructura-card-2 ">
            <img src={RitmosFitness} alt="Gym" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">Averanda</h2>
              <p className="card-address">
                AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR
              </p>
              <a href="#" className="card-link">Ver gimnasio</a>
              <div className="card-offer">1ER MES GRATIS + INSCRIPCIÓN $10</div>
              <div className="card-prices">
                <div className="price">
                  <span className="price-type">SMART</span>
                  <span className="original-price">$499.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">BLACK</span>
                  <span className="original-price">$599.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">FIT</span>
                  <span className="original-price">$399.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
              </div>
              <button className="estructure-size estructure-button-1 button-type-4">¡Inscríbete ya!</button>
            </div>
          </div>

          <div className="card-gym estructura-card-2 ">
            <img src={RitmosFitness} alt="Gym" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">Averanda</h2>
              <p className="card-address">
                AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR
              </p>
              <a href="#" className="card-link">Ver gimnasio</a>
              <div className="card-offer">1ER MES GRATIS + INSCRIPCIÓN $10</div>
              <div className="card-prices">
                <div className="price">
                  <span className="price-type">SMART</span>
                  <span className="original-price">$499.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">BLACK</span>
                  <span className="original-price">$599.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">FIT</span>
                  <span className="original-price">$399.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
              </div>
              <button className="estructure-size estructure-button-1 button-type-4">¡Inscríbete ya!</button>
            </div>
          </div>

          <div className="card-gym estructura-card-2 ">
            <img src={RitmosFitness} alt="Gym" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">Averanda</h2>
              <p className="card-address">
                AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR
              </p>
              <a href="#" className="card-link">Ver gimnasio</a>
              <div className="card-offer">1ER MES GRATIS + INSCRIPCIÓN $10</div>
              <div className="card-prices">
                <div className="price">
                  <span className="price-type">SMART</span>
                  <span className="original-price">$499.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">BLACK</span>
                  <span className="original-price">$599.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">FIT</span>
                  <span className="original-price">$399.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
              </div>
              <button className="estructure-size estructure-button-1 button-type-4">¡Inscríbete ya!</button>
            </div>
          </div>

          <div className="card-gym estructura-card-2 ">
            <img src={RitmosFitness} alt="Gym" className="card-image" />
            <div className="card-content">
              <h2 className="card-title">Averanda</h2>
              <p className="card-address">
                AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR
              </p>
              <a href="#" className="card-link">Ver gimnasio</a>
              <div className="card-offer">1ER MES GRATIS + INSCRIPCIÓN $10</div>
              <div className="card-prices">
                <div className="price">
                  <span className="price-type">SMART</span>
                  <span className="original-price">$499.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">BLACK</span>
                  <span className="original-price">$599.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
                <div className="price">
                  <span className="price-type">FIT</span>
                  <span className="original-price">$399.00</span>
                  <span className="discounted-price">$0.00*</span>
                </div>
              </div>
              <button className="estructure-size estructure-button-1 button-type-4">¡Inscríbete ya!</button>
            </div>
          </div>
        </div>

        
      </div>

      <Novedades />
      <Footer />
    </div>
  );
}

export default GimnasioPage;



{/* <div className="Diseno-tarjetas-1">
                            <img src={RitmosFitness} alt="" className="imagen_Instalacion" />
                            <div className="Clases_titulo_Container">
                                <a>CEC-FGI GOLD</a>
                            </div>
                            <div className="contenido_clases_detalle">
                                <div className="detalle_clase">
                                    <img src={Duracion} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Duración</p>
                                    <p className="detalle_descripcion">30/40/50 min</p>
                                </div>
                                <div className="detalle_clase">
                                    <img src={Intensidad} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Intensidad</p>
                                    <p className="detalle_descripcion">Alta</p>
                                </div>
                            </div>
                            <div className="contenedor_Apartador">
                                <hr className="Apartador" />
                            </div>
                            <div className="contenedor_Texto">
                                <p className="Text_programas">
                                    Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                                </p>
                            </div>
                        </div>
                         <div className="Diseno-tarjetas-1">
                            <img src={FullKombat} alt="" className="imagen_Instalacion" />
                            <div className="Clases_titulo_Container">
                                <a>Platinum CEC</a>
                            </div>
                            <div className="contenido_clases_detalle">
                                <div className="detalle_clase">
                                    <img src={Duracion} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Duración</p>
                                    <p className="detalle_descripcion">30/40/50 min</p>
                                </div>
                                <div className="detalle_clase">
                                    <img src={Intensidad} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Intensidad</p>
                                    <p className="detalle_descripcion">Alta</p>
                                </div>
                            </div>
                            <div className="contenedor_Apartador">
                                <hr className="Apartador" />
                            </div>
                            <div className="contenedor_Texto">
                                <p className="Text_programas">
                                    Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                                </p>
                            </div>
                        </div>
                        
                        <div className="Diseno-tarjetas-1">
                            <img src={Rebound} alt="" className="imagen_Instalacion" />
                            <div className="Clases_titulo_Container">
                                <a>Rebound Xtreme</a>
                            </div>
                            <div className="contenido_clases_detalle">
                                <div className="detalle_clase">
                                    <img src={Duracion} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Duración</p>
                                    <p className="detalle_descripcion">30/40/50 min</p>
                                </div>
                                <div className="detalle_clase">
                                    <img src={Intensidad} alt="" className="Iconos_detalle" />
                                    <p className="detalle_title">Intensidad</p>
                                    <p className="detalle_descripcion">Alta</p>
                                </div>
                            </div>
                            <div className="contenedor_Apartador">
                                <hr className="Apartador" />
                            </div>
                            <div className="contenedor_Texto">
                                <p className="Text_programas">
                                    Diviértete y combina el baile con una rutina de ejercicio al ritmo de la música, mejora tu condición y coordinación
                                </p>
                            </div>
                        </div> */}