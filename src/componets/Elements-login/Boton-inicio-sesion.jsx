import { Link } from 'react-router-dom';

function LoginRegister() {
  const links = [
    { path: "/login", label: "Iniciar sesión", specialClass: "button-type-1 estructure-button-1 estructure-size" },
    { path: "/registro", label: "Registro", specialClass: "button-type-2 estructure-button-1 estructure-size" }
  ];

  return (
    <div>
      {links.map(link => (
        <p key={link.path}>
          <Link to={link.path} className={link.specialClass}>
            {link.label}
          </Link>
        </p>
      ))}
    </div>
  );
}

export default LoginRegister;
