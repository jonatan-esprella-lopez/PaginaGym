import '../../styles/Tienda-clases/tienda.css';
import Header from './structure-components/Header';
import Sidebar from './structure-components/Sidebar';
import TrainingList from "./structure-components/Training-list";

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
