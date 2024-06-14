import React, { useContext, createContext, useState, ReactNode } from "react";

interface AuthProviderProps {
  children: ReactNode;
}

// Crea el contexto de autenticación
const AuthContext = createContext({
  isAuthenticated: false,
});

// Proveedor de autenticación
export function AuthProvider({ children }: AuthProviderProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
}

// Hook personalizado para usar el contexto de autenticación
export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth debe ser utilizado dentro de un AuthProvider");
  }
  return context;
};
