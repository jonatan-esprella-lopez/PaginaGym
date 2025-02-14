import { Link } from 'react-router-dom';
import Duracion from '../../assets/images/duracion-clases.svg';
import Intensidad from '../../assets/images/intensidad.svg';
import iconFuerza from '../../assets/images/Rutinas/Fuerza.png';
import Imagen_C1 from '../../assets/images/Rutinas/ImagenC1.png';
import Imagen_Intensidad from '../../assets/images/Rutinas/Intensidad.png';

const WeeklyTrainingTable = () => (
  <section>
    <div className="cont-head-table">
      <h3>
        Entrenamiento Semanal<div className="underline"></div>
      </h3>
      <p>19 de Junio de 2024</p>
    </div>
    <table className="table-general">
      <thead>
        <tr className="cond-head-column">
          <th></th>
          <th>Músculos</th>
          <th>Tipo de entrenamiento</th>
          <th>Duración</th>
          <th>Intensidad</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {Array(5)
          .fill()
          .map((_, index) => (
            <tr className="cont-details" key={index}>
              <th className="cont-gen-dia">
                <div className="cont-dia">
                  <p>Dia {index + 1}</p>
                  <div className="underline-dia"></div>
                </div>
              </th>
              <td>
                <div className="cont-espaciado">
                  <div>
                    <img src={Imagen_C1} alt="Entrenamiento" />
                  </div>
                  <div>
                    <p className="tipo-entrenamiento">CHIPPER</p>
                  </div>
                  <div className="contenedor-th-icons">
                    <div>
                      <img
                        src={Duracion}
                        alt="Duración"
                        className="icono-duracion-rutina"
                      />
                      <p>30/40 min</p>
                    </div>
                    <div>
                      <img
                        src={Imagen_Intensidad}
                        alt="Intensidad"
                        className="icono-duracion-rutina"
                      />
                      <p>Moderada</p>
                    </div>
                  </div>
                  <div className="cont-button-rutinas">
                    <img src={iconFuerza} alt="Fuerza" />
                    <Link to="/Informacion Rutina">
                      <button className="highlighted-button">
                        Más información
                      </button>
                    </Link>
                  </div>
                </div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  </section>
);

export default WeeklyTrainingTable;
