import { useState } from 'react';
import "../../../styles/Nutrition/Ev1/Formulario-Rufier.css"

function TestRuffier() {
  const [p0, setP0] = useState('');
  const [p1, setP1] = useState('');
  const [p2, setP2] = useState('');
  const [result, setResult] = useState(null);

  const calculateRuffierIndex = () => {
    const index = ((parseInt(p0) + parseInt(p1) + parseInt(p2)) - 200) / 10;
    setResult(index);
  };

  // const interpretResult = (index) => {
  //   if (index <= 3) {
  //     return "Condición excelente";
  //   } else if (index > 3 && index <= 6) {
  //     return "Condición buena";
  //   } else if (index > 7 && index <= 15) {
  //     return "Condición promedio";
  //   } else if (index > 15) {
  //     return "Condición baja";
  //   } else {
  //     return "Condición muy baja";
  //   }
  // };

  const interpretResult = (index) => {
    if (index < 0) {
      return "Condición excelente";
    } else if (index >= 0 && index <= 5) {
      return "Condición buena";
    } else if (index > 5 && index <= 10) {
      return "Condición promedio";
    } else if (index > 10 && index <= 15) {
      return "Condición baja";
    } else {
      return "Condición muy baja";
    }
  };


  return (
    <div className="Main-Ts-ruffier">
        <h1>Test de Ruffier</h1>
        <div>
          <h4>
            <strong>Objetivo: </strong>
          </h4>
            <p>
              Medir la resistencia aerobica al esfuerzo de corta duración y la capacidad de recuperación cardiaca
            </p>
        </div>
        
        <div>
          <h4>
            <strong>Consiste: </strong>
          </h4>
            <p>
            en hacer 30 sentadillas en 45 segundo en HOMBRES <br />
            es hacer 20 sentadillas en 30 segundo en mujeres
            </p>
        </div>

        <h5>
          formula: indice de Ruffier(i)= ((P0+P1+P2)-200)/10
        </h5>
          <p>
              El Test de Ruffier es una prueba sencilla que se utiliza para evaluar la
              condición física, particularmente la capacidad cardiovascular y de
              recuperación después de un esfuerzo. Esta prueba mide las pulsaciones en
              tres momentos clave: en reposo, inmediatamente después de realizar
              ejercicio, y después de un minuto de reposo.
          </p>
        <div>
            <label>
            Pulsaciones en reposo (P0)
            <br /> (Antes de empezar 6 segundos * (10)):
            <input
                type="number"
                value={p0}
                onChange={(e) => setP0(e.target.value)}
                placeholder="Ingresa pulsaciones en reposo"
            />
            </label>
        </div>
        <div>
            <label>
            Pulsaciones inmediatamente después del ejercicio (P1) 
            <br /> (Apenas terminas 6 segundos * (10)): 
            <input
                type="number"
                value={p1}
                onChange={(e) => setP1(e.target.value)}
                placeholder="Ingresa pulsaciones tras ejercicio"
            />
            </label>
        </div>
        <div>
            <label>
            Pulsaciones tras un minuto de reposo (P2)
            <br /> (despues de un minuto de reposo 6 segundos * (10)):
            <input
                type="number"
                value={p2}
                onChange={(e) => setP2(e.target.value)}
                placeholder="Ingresa pulsaciones tras 1 minuto"
            />
            </label>
        </div>
        <button onClick={calculateRuffierIndex}>
            Calcular Índice de Ruffier
        </button>
        {result !== null && (
            <div>
            <h2>Resultado: {result}</h2>
            <span>Interpretación: {interpretResult(result)}</span>
            </div>
        )}
        </div>
  );
}

export default TestRuffier;
