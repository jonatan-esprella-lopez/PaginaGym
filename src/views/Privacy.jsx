import React from 'react';
import '../styles/PrivacyPolicy.css';
import Header from '../componets/Header_Main';
import Footer from '../componets/Footer_Main';

function PrivacyPolicy() {
  return (
    <>
      <Header />
      <div className="privacy-policy-container">
        <h1>Aviso de Privacidad</h1>
        <p>
          En CEC-FGI, estamos comprometidos con la protección de tu privacidad.
          Esta política de privacidad explica cómo recopilamos, usamos y
          protegemos tu información personal.
        </p>

        <h2>1. Información que recopilamos</h2>
        <p>Recopilamos la siguiente información personal:</p>
        <ul>
          <li>Nombre</li>
          <li>Dirección de correo electrónico</li>
          <li>Número de teléfono</li>
          <li>Dirección</li>
          <li>Información de pago</li>
        </ul>

        <h2>2. Cómo usamos tu información</h2>
        <p>Usamos tu información personal para:</p>
        <ul>
          <li>Proveer los servicios que has solicitado</li>
          <li>Procesar tus pagos</li>
          <li>Enviar comunicaciones importantes</li>
          <li>Mejorar nuestros servicios</li>
        </ul>

        <h2>3. Compartir tu información</h2>
        <p>
          No compartimos tu información personal con terceros, excepto cuando
          sea necesario para:
        </p>
        <ul>
          <li>Procesar tus pagos</li>
          <li>Cumplir con la ley</li>
          <li>Proteger nuestros derechos</li>
        </ul>

        <h2>4. Seguridad de tu información</h2>
        <p>
          Implementamos medidas de seguridad para proteger tu información
          personal contra acceso no autorizado, alteración, divulgación o
          destrucción.
        </p>

        <h2>5. Tus derechos</h2>
        <p>
          Tienes derecho a acceder, corregir o eliminar tu información personal.
          Para ejercer estos derechos, por favor contáctanos en
          cecfgi@gmail.com.
        </p>

        <h2>6. Cambios en esta política</h2>
        <p>
          Nos reservamos el derecho de actualizar esta política de privacidad en
          cualquier momento. Te notificaremos sobre cualquier cambio
          significativo a través de nuestro sitio web o por otros medios.
        </p>

        <h2>Contacto</h2>
        <p>
          Si tienes alguna pregunta sobre esta política de privacidad, por favor
          contáctanos en:
        </p>
        <h5>CEC-FGI</h5>
        <h5>Reza entre ayacucho y baptista</h5>
        <h5>cecfgi@gmail.com</h5>
        <h5>(-591) 76937173</h5>
      </div>
      <Footer />
    </>
  );
}

export default PrivacyPolicy;
