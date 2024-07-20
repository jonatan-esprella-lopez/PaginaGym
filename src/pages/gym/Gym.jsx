import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import '../../styles/Gimnasio.css';
import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';
import Novedades from "../../components/common/notification/Sending-notifications";
import RitmosFitness from "../../assets/images/Clases/Ritmos.jpg";
import FullKombat from "../../assets/images/Clases/FullKombat.jpg"

const initialGyms = [
  {
    id: 1,
    name: 'Averanda',
    address: 'AUTOPISTA MÉXICO – CUERNAVACA KM 87.5 – FLORES MAGON, Cuernavaca - MOR',
    offers: '1ER MES GRATIS + INSCRIPCIÓN $10',
    prices: {
      SMART: '$499.00',
      BLACK: '$599.00',
      FIT: '$399.00'
    },
    image: FullKombat,
    features: ['Estructuras', 'Estacionamiento', 'Elevador', 'Ritmos Fitness'],
  },
  {
    id: 2,
    name: 'Cocha',
    address: 'AVENIDA DE LOS INSURGENTES SUR 1234, Ciudad de México - CDMX',
    offers: '2 MESES GRATIS + INSCRIPCIÓN $5',
    prices: {
      SMART: '$599.00',
      BLACK: '$699.00',
      FIT: '$499.00'
    },
    image: RitmosFitness,
    features: ['Lacto - Bar', 'Nutricionista', 'Full Kombat'],
  },
  {
    id: 3,
    name: 'Fuerza Gym',
    address: 'CALLE DE LA FORTALEZA 789, Monterrey - NL',
    offers: 'DESCUENTO DEL 50% EN EL PRIMER MES',
    prices: {
      SMART: '$399.00',
      BLACK: '$499.00',
      FIT: '$299.00'
    },
    image: FullKombat,
    features: ['Estacionamiento', 'Elevador', 'Entrenamiento Funcional'],
  },
  {
    id: 4,
    name: 'Fit & Well',
    address: 'BOULEVARD DE LA SALUD 456, Guadalajara - JAL',
    offers: 'INSCRIPCIÓN GRATIS',
    prices: {
      SMART: '$299.00',
      BLACK: '$399.00',
      FIT: '$199.00'
    },
    image: RitmosFitness,
    features: ['Nutricionista', 'Step-Z', 'Rebound Xtreme'],
  },
  {
    id: 5,
    name: 'Health Hub',
    address: 'CALLE DEL BIENESTAR 123, Puebla - PUE',
    offers: '3 MESES GRATIS + INSCRIPCIÓN $15',
    prices: {
      SMART: '$799.00',
      BLACK: '$899.00',
      FIT: '$699.00'
    },
    image: RitmosFitness,
    features: ['Elevador', 'Ritmos Fitness', 'Full Kombat'],
  }
  
];

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
  const [gyms, setGyms] = useState(initialGyms);
  const [filteredGyms, setFilteredGyms] = useState(initialGyms);

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const query = queryParams.get("query");
    setSearchTerm(query || "");
    if (query) {
      console.log("Búsqueda automática con término:", query);
    }
  }, [location.search]);

  useEffect(() => {
    applyFilters();
  }, [checks, searchTerm]);

  const handleCheckChange = (index) => {
    const newChecks = [...checks];
    newChecks[index].isChecked = !newChecks[index].isChecked;
    setChecks(newChecks);
  };

  const handleInputChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const applyFilters = () => {
    let filtered = gyms;

    if (searchTerm) {
      filtered = filtered.filter(gym =>
        gym.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    const selectedFilters = checks.filter(check => check.isChecked).map(check => check.text);
    if (selectedFilters.length > 0) {
      filtered = filtered.filter(gym =>
        selectedFilters.every(filter => gym.features.includes(filter))
      );
    }

    setFilteredGyms(filtered);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    applyFilters();
  };

  return (
    <div className='Container_Main'>
      <HeaderMain />
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
          {filteredGyms.map(gym => (
            <div key={gym.id} className="card-gym estructura-card-2">
              <img src={gym.image} alt="Gym" className="card-image" />
              <div className="card-content">
                <h2 className="card-title">{gym.name}</h2>
                <p className="card-address">{gym.address}</p>
                <a href="#" className="card-link">Ver gimnasio</a>
                <div className="card-offer">{gym.offers}</div>
                <div className="card-prices">
                  {Object.entries(gym.prices).map(([type, price]) => (
                    <div key={type} className="price">
                      <span className="price-type">{type}</span>
                      <span className="original-price">{price}</span>
                      <span className="discounted-price">$0.00*</span>
                    </div>
                  ))}
                </div>
                <button className="estructure-size estructure-button-1 button-type-4">¡Inscríbete ya!</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Novedades />
      <FooterMain />
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