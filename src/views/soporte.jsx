import { useState } from "react";
import "../styles/soporte.css";
import Header from "../componets/Header_Main";
import Footer from "../componets/Footer_Main";
import IMGForm from "../assets/images/Nosotros/background.jpg"

function SoportePage() {
    const [faqVisible, setFaqVisible] = useState(false);

  const toggleFaqVisibility = () => {
    setFaqVisible(!faqVisible);
  };
  return (
    <div className="support-container">
      <Header/>
      <div className="cont-support">
        <h1>Centro de Soporte</h1>
      </div>
      
      <div className="support-section">
        <h2>Ayuda y Soporte</h2>
        <p>Encuentra respuestas a tus preguntas y obtén la ayuda que necesitas.</p>
        
        <div className="support-buttons">
          <button onClick={toggleFaqVisibility}>Preguntas Frecuentes (FAQ)</button>
          <button>Contactar Soporte</button>
          <button>Ver Tutoriales en Video</button>
          <button>Recursos Adicionales</button>
        </div>
        
        {faqVisible && (
          <div className="faq-section">
            <h3>Preguntas Frecuentes</h3>
            <ul>
              <li><strong>¿Cómo puedo restablecer mi contraseña?</strong> - Ve a la página de inicio de sesión y haz clic en "Olvidé mi contraseña".</li>
              <li><strong>¿Cómo contacto al soporte técnico?</strong> - Puedes enviarnos un correo electrónico a cec-fgi@gmail.com.</li>
            </ul>
          </div>
        )}
        
        <div className="contact-section">
          <h3>Contactar Soporte</h3>
          <p>Si necesitas asistencia adicional, no dudes en contactarnos.</p>
          <div className="cont-form-support">
          <div className="cont-img-from">
            <img src={IMGForm} alt="" />
          </div>
          <form className="contact-form">
            <label htmlFor="name">Nombre:</label>
            <input type="text" id="name" name="name" required />
            
            <label htmlFor="email">Correo Electrónico:</label>
            <input type="email" id="email" name="email" required />
            
            <label htmlFor="message">Mensaje:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            
            <button type="submit">Enviar</button>
          </form>
          </div>
        </div>
        
        <div className="video-tutorials-section">
          <h3>Tutoriales en Video</h3>
          <div className="video-container">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/example1" 
              title="Tutorial 1" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/example2" 
              title="Tutorial 2" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
              allowFullScreen>
            </iframe>
          </div>
        </div>
        
        <div className="additional-resources-section">
          <h3>Recursos Adicionales</h3>
          <ul>
            <li><a href="https://www.example.com/guide" target="_blank" rel="noopener noreferrer">Guía de Usuario</a></li>
            <li><a href="https://www.example.com/docs" target="_blank" rel="noopener noreferrer">Documentación Técnica</a></li>
            <li><a href="https://www.example.com/community" target="_blank" rel="noopener noreferrer">Foro de la Comunidad</a></li>
          </ul>
        </div>
      </div>
        <Footer/>
    </div>
  );
}

export default SoportePage;
