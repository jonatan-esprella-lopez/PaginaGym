import "../../styles/Nosotros/Tarjeta-Valores.css";
import value1Icon from '../../assets/images/Nosotros/respeto.png';
import value2Icon from '../../assets/images/Nosotros/integridad.png';
import value3Icon from '../../assets/images/Nosotros/amor.png';
import value4Icon from '../../assets/images/Nosotros/compromiso.png';
import value5Icon from '../../assets/images/Nosotros/humildad.png';

const valoresData = [
  { icon: value1Icon, title: "Disciplina", description: "Fomentamos la disciplina en todos nuestros miembros." },
  { icon: value2Icon, title: "Esfuerzo", description: "Promovemos el esfuerzo constante para alcanzar metas personales." },
  { icon: value3Icon, title: "Pasión", description: "Nos apasiona ayudar a nuestros miembros a mejorar su bienestar." },
  { icon: value4Icon, title: "Compromiso", description: "Estamos comprometidos con el éxito y la satisfacción de nuestros miembros." },
  { icon: value5Icon, title: "Superación", description: "Inspiramos a nuestros miembros a superarse día a día." }
];

function ValoresCEC() {
  return (
    <section className="gym-values-section">
      <div className="overlay1">
        {valoresData.map((valor, index) => (
          <div key={index} className="value">
            <img src={valor.icon} alt={`Valor ${index + 1}`} />
            <h3>{valor.title}</h3>
            <p>{valor.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ValoresCEC;
