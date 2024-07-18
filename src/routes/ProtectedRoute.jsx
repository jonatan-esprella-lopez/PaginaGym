import { useAuth } from '../auth/AuthProvider.tsx';
import { Outlet, Navigate } from 'react-router-dom';

function Proteccion() {
  const auth = useAuth();
  return auth.isAuthenticated ? <Outlet /> : <Navigate to="/" />;
}
export default Proteccion;
