import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./routes/ProtectedRoute";

import Banner from "./views/Home";
import Rutinas from "./views/Rutinas";
import Nutricion from "./views/Nutricion";
import Gimnasio from "./views/Gimnasios";
import Inscripcion from "./views/Comp_Planes_Inscrip";
import Evaluaciones from "./views/Pruebas";
import Login from "./views/Login/Inicio_Sesion.tsx";
import Registro from "./views/Registro/Registro.tsx";
import Nosotros from "./views/Nosotros";
import Nosotro1 from "./views/Evaluaciones_Alumnos";
import Plan from "./views/PlanNutricional";
import PerfilPublico from "./views/Perfil/PerfilPublico";
import Soporte from "./views/soporte";
import PaginaConstruccion from "./views/PaginasExtra/PaginaExtra.jsx";
import Tienda from "./views/Tienda-clases/TiendaCEC.jsx";
import AreaAerobica from "./views/Instalaciones/Aerobicos.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Banner />} />
        <Route path="/Nuestras rutinas" element={<Rutinas />} />
        <Route path="/Nutricion" element={<Nutricion />} />
        <Route path="/Nuestros Gimnasios" element={<Gimnasio />} />
        <Route path="/Planes de inscripcion" element={<Inscripcion />} />
        <Route path="/Evaluaciones" element={<Evaluaciones />} />
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Nosotros1" element={<Nosotro1 />} />
        <Route path="/Plan Nutricional" element={<Plan />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Soporte" element={<Soporte />} />
        <Route path="/paginaExtra" element={<PaginaConstruccion />} />
        <Route path="/Aerobicos" element={<AreaAerobica />} />
        
        <Route path="/Shop-CEC-trainnig" element={<Tienda />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="PerfilUser" element={<PerfilPublico />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
