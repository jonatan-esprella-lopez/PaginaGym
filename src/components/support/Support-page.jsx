import { useState } from "react";
import "../../styles/soporte.css";
import FaqSection from './Faq-section';
import ContactSection from './Contact-section';
import VideoTutorialsSection from './VideoTutorialsSection';

function SoportePage() {
    const [faqVisible, setFaqVisible] = useState(false);

    const toggleFaqVisibility = () => {
        setFaqVisible(!faqVisible);
    };

    return (
        <section>
            <div className="cont-support">
                <h1>Centro de Soporte</h1>
            </div>
            <div className="support-section">
                <h2>Ayuda y Soporte</h2>
                <p>
                    Bienvenido al Centro de Soporte. Aquí encontrarás respuestas detalladas a las preguntas más comunes y podrás acceder a recursos adicionales para solucionar cualquier problema que puedas tener. Nuestro equipo está aquí para asistirte en cada paso y asegurarse de que obtengas la ayuda que necesitas de manera rápida y eficiente.
                </p>
                <div className="support-buttons">
                    <button onClick={toggleFaqVisibility}>Preguntas Frecuentes (FAQ)</button>
                    <button>Contactar Soporte</button>
                    <button>Ver Tutoriales en Video</button>
                    <button>Recursos Adicionales</button>
                </div>
                <FaqSection isVisible={faqVisible}/>
                <ContactSection/>
                <VideoTutorialsSection/>
            </div>
        </section>
    );
}

export default SoportePage;
