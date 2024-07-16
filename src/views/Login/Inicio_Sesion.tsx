import React, { useState } from "react";
import { useAuth } from "../../auth/AuthProvider.tsx";
import "../../styles/Login.css"
import Header from "../../componets/Header_Main.jsx"
import Footer from "../../componets/Footer_Main.jsx"
import { Navigate, useNavigate } from "react-router-dom";
import { API_URL } from "../../auth/constans.jsx";
import type { AuthResponseError } from "../../types/Types.ts";




function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { isAuthenticated } = useAuth();
  
  const goTo = useNavigate();
  const [errorResponse, setErrorResponse] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>){
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers:  {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
          password,
       }),
      });
      if (response.ok) {
        console.log("Usuario logueado correctamente");
        setErrorResponse("");
        goTo("/PerfilUser");
      } else {
        console.log("Ocurrio algun error: ");
        const json = (await response.json()) as AuthResponseError;
        setErrorResponse(json.body.error);
        return;
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  if (isAuthenticated){
    return <Navigate to="/PerfilUser"/>;
  }
  return (
    <div className="login-container">
        <Header />
      <form onSubmit={handleSubmit} className="login-form">
        <h2>Iniciar sesión</h2>
        
        {!! errorResponse && <div className="errorMessage">{errorResponse}</div>}
        <div className="form-group1">
          <label htmlFor="email">Correo electrónico</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            
          />
        </div>
        <div className="form-group1">
          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
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
