
import '../../styles/PaginasExtra/UnderConstruction.css';
import Working from "../../assets/images/Page-Secondary/construction.svg";

const UnderConstruction = () => {
  return (
    <div className="construction-container">
      <div className="content">
      <div className="loader">
        <img src={Working} alt="" />
      </div>
        <h1>Esta página está en construcción</h1>
        <p>Estamos trabajando arduamente para traerte el mejor contenido. ¡Vuelve pronto!</p>
      </div>
    </div>
  );
};

export default UnderConstruction;
