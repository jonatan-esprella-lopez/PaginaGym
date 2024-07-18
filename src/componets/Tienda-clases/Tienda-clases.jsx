import '../../styles/Tienda-clases/tienda.css';
import Header from './Complementos-especificos/Header';
import Sidebar from './Complementos-especificos/Sidebar';
import TrainingList from "./Complementos-especificos/Training-list";

const TiendaClases = () => {
  return (
    <div className="training-search-container">
      <Header />
      <main>
        <Sidebar />
        <TrainingList />
      </main>
    </div>
  );
};

export default TiendaClases;
