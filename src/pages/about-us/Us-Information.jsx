import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';
import "../../styles/Nosotros.css";
import "../../App.css"
import Tarjeta from "../../components/about-us/Card-coach";
import Mision from "../../components/about-us/Card-mission";
import Vision from "../../components/about-us/Card-vision";
import ValoresCEC from "../../components/about-us/Card-values";

function AboutUsPage() {
  return (
    <div>
      <HeaderMain />

      <div className="about-us-section">
        <div className="overlay">
          <p>Bienvenido a CEC-FGI</p>
          <h1>¿Quienes somos?</h1>
          <div className="underline-central"></div>
          <p>
            Nuestra historia comenzó en 2020 con una misión clara: proporcionar un espacio donde las personas pudieran
            transformar sus vidas a través del fitness. Desde nuestros humildes comienzos, hemos crecido para convertirnos
            en un referente en la comunidad de Cochabamba, gracias a nuestro compromiso con la salud y el bienestar.
          </p>
        </div>
      </div>

      <div className="cont-valores">            
          <h4>
            Conoce de nuestros valores
            <div className="underline-central"></div>
          </h4>
          <p>
          Somos un equipo de colaboradores trabajando juntos con emociones compartidas, buscando transformar el mundo, a través de la cultura fisica y haciendo la diferencia en cada uno de nosotros y de nuestros clientes.
          </p>
      </div>
      
      <div className="cont-Mis-Vis">
        <Mision/>
        <Vision/>
      </div>
      <ValoresCEC/>
      <h2>Nuestros Instructores</h2>
      <Tarjeta/>
      <FooterMain />
    </div>
  );
}

export default AboutUsPage;




