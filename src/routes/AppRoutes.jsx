import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "../routes/ProtectedRoute";
import Banner from "../pages/home/Home";
import Rutinas from "../pages/routines/Routines";
import Nutricion from "../pages/nutrition/Nutrition";
import Gimnasio from "../pages/gym/Gym";
import Inscripcion from "../pages/registration-plans/Registration-plans";
import Evaluaciones from "../pages/evaluations/Evaluation";
import Evaluaciones1 from "../pages/evaluations/Evaluation1.jsx";
import Login from "../pages/credentials/sing-in/Sing-in.tsx";
import Registro from "../pages/credentials/sing-up/sing-up.tsx";
import Nosotros from "../pages/about-us/Us-Information";
import Plan from "../pages/nutrition/Details-nutrition-plan";
import PerfilPublico from "../pages/users/profile-user/Profile-user";
import Soporte from "../pages/support/Support";
import PaginaConstruccion from "../pages/Page-construction/Building-page";
import Tienda from "../pages/class-store/Class-store";
import AreaAerobica from "../pages/facilities/Installation";
import PrivacyP from "../pages/credentials/Privacy";
import TrainingInfo from "../pages/Training/Training-info";
import Prueba from "../prueba.jsx";

import PlanEditor from "../pages/nutrition/plans-nutritions/Plan-editor.jsx";
import PlanView from "../pages/nutrition/plans-nutritions/Plan-view.jsx";

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
        <Route path="/Evaluaciones1" element={<Evaluaciones1 />} />
        
        <Route path="/Nosotros" element={<Nosotros />} />
        <Route path="/Plan Nutricional" element={<Plan />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Soporte" element={<Soporte />} />
        <Route path="/paginaExtra" element={<PaginaConstruccion />} />
        <Route path="/Aerobicos" element={<AreaAerobica />} />
        <Route path="/Politica de privacidad" element={<PrivacyP />} />
        <Route path="/Informacion Rutina" element={<TrainingInfo />} />

        <Route path="/Tienda de entrenamientos" element={<Tienda />} />
        <Route path="/Prueba" element={<Prueba />} />

        <Route path="/PlanEditor" element={<PlanEditor />} />
        <Route path="/PlanView" element={<PlanView />} />

        <Route path="/" element={<ProtectedRoute />}>
          <Route path="PerfilUser" element={<PerfilPublico />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
