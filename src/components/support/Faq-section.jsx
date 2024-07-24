
function FaqSection({ isVisible }) {
    return (
        isVisible && (
            <div className="faq-section">
                <h3>Preguntas Frecuentes</h3>
                <ul>
                    <li><strong>¿Cómo puedo restablecer mi contraseña?</strong> - Ve a la página de inicio de sesión y haz clic en "Olvidé mi contraseña".</li>
                    <li><strong>¿Cómo contacto al soporte técnico?</strong> - Puedes enviarnos un correo electrónico a cec-fgi@gmail.com.</li>
                </ul>
            </div>
        )
    );
}

export default FaqSection;
