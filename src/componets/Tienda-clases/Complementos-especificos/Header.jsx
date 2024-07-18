import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <h1>TIENDA DE ENTRENAMIENTOS <strong>PRE - PROGRAMADOS</strong></h1>
      <h4>Buscar un tipo de entrenamiento</h4>
      <div className="search-bar">
        <input type="text" placeholder="Escribe aquí" />
        <select>
          <option value="all">Todos</option>
        </select>
        <button>Buscar</button>
      </div>
    </header>
  );
};

export default Header;
