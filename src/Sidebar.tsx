import React, { useState } from 'react';
import './Sidebar.css';

const Sidebar = () => {
  const [selected, setSelected] = useState('Dashboard');

  const menuItems = ['Dashboard', 'Registra Producto', 'Registrar proveedor', 'Proveedor', 'Reporte'];

  return (
    <div className="sidebar">
      <nav className="sidebar-nav">
        <ul>
          {menuItems.map(item => (
            <li
              key={item}
              className={selected === item ? 'active' : ''}
              onClick={() => setSelected(item)}
            >
              {item}
            </li>
          ))}
          <button className='button-configure'>
              Configuraciones
          </button>
        </ul>
        <div className="highlight" style={{ top: `${menuItems.indexOf(selected) * 48}px` }}></div>
      
      </nav>
    </div>
  );
};

export default Sidebar;
