import IMGForm from "../../assets/images/Nosotros/background.jpg";

function ContactSection() {
    return (
        <div className="contact-section">
            <h3>Contactar con Soporte</h3>
            <p>Si necesitas asistencia adicional, no dudes en contactarnos.</p>
            <div className="cont-form-support">
                <div className="cont-img-from">
                    <img src={IMGForm} alt="Fondo de formulario"/>
                </div>
                <form className="contact-form1">
                    <label htmlFor="name">Nombre:</label>
                    <input type="text" id="name" name="name" required autoComplete="name"/>
                    <label htmlFor="email">Correo Electrónico:</label>
                    <input type="email" id="email" name="email" required autoComplete="email"/>
                    <label htmlFor="message">Mensaje:</label>
                    <textarea id="message" name="message" rows="5" required></textarea>
                    <button type="submit" className="estructure-size estructure-button-1 button-type-4">Enviar</button>
                </form>
            </div>
        </div>
    );
}

export default ContactSection;
