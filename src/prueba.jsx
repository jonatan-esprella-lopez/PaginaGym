import React from 'react';
import Sidebar from './Sidebar';
import './App.css'; 

import port1 from "./assets/images/Nutricion/plan-1.jpg";
import port2 from "./assets/images/entrenador.png";
import port3 from "./assets/images/Logotipo-cec/logotipo.svg";

import FileUploader from './components/common/input/fileUpdate';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="content">
        <h1>Welcome to the Dashboard</h1>

        <div>
          <img src="" alt="Atras" />
          <div>
            <p>Registrar Proveedor</p>
            <span>ID: 15125452</span>
          </div>
        </div>

        <div>
          <img src="" alt="Icono de cuenta" />
          <img src="" alt="Portada cuenta" />
          <div>
            <span>Categoria</span>
          </div>
        </div>

        <div>
          <p>Descripcion de Proveedor</p>
          <textarea name="Descripcion" id="" placeholder='Descripcion'>

          </textarea>
          <input type="text" placeholder='nombre'/>
          <input type="text" placeholder='Codigo'/>
          <input type="text" placeholder='Categoria'/>
          <input type="text" placeholder='Precio'/>
          <input type="text" placeholder='nombre'/>
        </div>

        <div>
          <h4>
            Productos
          </h4>
          <div className='Linea'></div>

          <p>
            Agregar Productos Ofrecidos por el Proveedor
          </p>
          <div>
            <input type="file" />
            <div>
              <input type="file" />
              <input type="file" />
            </div>
          </div>
          <button>
            Registrar
          </button>
        </div>


        <FileUploader />

        <div className='conteiner-prueba'>
          <a href="#" target="_blank">
                    <div className="card-prueba">
                  <div className="wrapper">
                      <img src={port1} className="cover-image" />
                  </div>
                  <img src={port2} className="character" />
                  <img src={port3} className="title" />
              </div>
          </a>

          <a href="#" target="_blank">
                    <div className="card-prueba">
                  <div className="wrapper">
                      <img src={port1} className="cover-image" />
                  </div>
                  <img src={port2} className="character" />
                  <img src={port3} className="title" />
              </div>
          </a>

          <a href="#" target="_blank">
                    <div className="card-prueba">
                  <div className="wrapper">
                      <img src={port1} className="cover-image" />
                  </div>
                  <img src={port2} className="character" />
                  <img src={port3} className="title" />
              </div>
          </a>
        </div>
      </div>                                
    </div>
  );
};

export default App;
