import { useState } from "react";
import { useAuth } from "../../auth/AuthProvider.tsx";
import "../../styles/Login.css";
import Header from "../../componets/Header_Main";
import Footer from "../../componets/Footer_Main";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useAuth();
  
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", email);
    console.log("Password:", password);
    console.log(isAuthenticated);
  };

  if (isAuthenticated) {
    return <Navigate to="/PerfilUser" />;
  }

  return (
    <div className="login-container">
      <Header />
      <form onSubmit={handleSubmit} className="login-form">
        <div className="contenedor-header-Login">
          <h2>Iniciar sesión</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit harum exercitationem perspiciatis eveniet</p>
        </div>
        <div className="form-group1">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            placeholder="Ingresa tu correo electronico"
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            placeholder="Ingresa tu contraseña"
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="btn-login">
          Iniciar sesión
        </button>
      </form>
      <Footer />
    </div>
  );
}

export default Login;
