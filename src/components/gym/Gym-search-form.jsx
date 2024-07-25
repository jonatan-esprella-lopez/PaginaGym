

const GymSearchForm = ({ searchTerm, handleInputChange, handleSubmit }) => (
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
      <button type="submit" className="button-type-4 estructure-size">Filtrar</button>
    </form>
  </div>
);

export default GymSearchForm;
