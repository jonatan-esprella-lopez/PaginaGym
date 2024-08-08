import React, { useState } from 'react';
import '../../../styles/Nutrition/Ev1/TestSharkDrills.css';

function TestSharkDrills() {
    const initialResults = {
        rightPractice: { time: '', errors: '' },
        leftPractice: { time: '', errors: '' },
        right1: { time: '', errors: '' },
        left1: { time: '', errors: '' },
        right2: { time: '', errors: '' },
        left2: { time: '', errors: '' }
    };

    const [results, setResults] = useState(initialResults);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        const [leg, attempt, field] = name.split('-');
        setResults(prevResults => ({
            ...prevResults,
            [`${leg}${attempt}`]: {
                ...prevResults[`${leg}${attempt}`],
                [field]: value
            }
        }));
    };

    const calculateTotalTime = (time, errors) => {
        const timeNumber = parseFloat(time) || 0;
        const errorsNumber = parseInt(errors) || 0;
        return timeNumber + (errorsNumber * 0.1);
    };

    const evaluateResults = () => {
        const totalTimeRight = calculateTotalTime(results.right1.time, results.right1.errors) + calculateTotalTime(results.right2.time, results.right2.errors);
        const totalTimeLeft = calculateTotalTime(results.left1.time, results.left1.errors) + calculateTotalTime(results.left2.time, results.left2.errors);
        const averageTime = (totalTimeRight + totalTimeLeft) / 2;

        let evaluation = '';
        if (averageTime <= 10) {
            evaluation = 'Excelente desempeño. Tu agilidad y reacción neuromuscular son sobresalientes.';
        } else if (averageTime <= 20) {
            evaluation = 'Buen desempeño. Sigue trabajando para mejorar tu agilidad y reacción neuromuscular.';
        } else {
            evaluation = 'Desempeño promedio. Hay margen para mejorar en agilidad y reacción neuromuscular.';
        }

        return { totalTimeRight, totalTimeLeft, averageTime, evaluation };
    };

    const resultsSummary = evaluateResults();

    return (
        <div className="main-test-sharkdrills">
            <h1>Prueba de Habilidades de Tiburón (Shark Drills)</h1>
            <div className="description">
                <p>
                    <strong>Descripción General:</strong> La prueba de Shark Drills mide la agilidad de las extremidades inferiores y la reacción neuromuscular. 
                    Consiste en pararse en una sola pierna y tocar una serie de cuadrados en una rejilla de 9 espacios, siempre volviendo al centro.
                </p>
                <p>
                    <strong>Propósito y Beneficios:</strong> Proporciona información valiosa sobre la agilidad y la estabilidad de las extremidades inferiores, y ayuda a identificar desequilibrios musculares y debilidades.
                </p>
                <p>
                    <strong>Configuración y Equipo Requerido:</strong> Necesitará una rejilla de 9 espacios (puede ser dibujada en el suelo).
                </p>
                <p>
                    <strong>Guía Paso a Paso:</strong>
                    <ol>
                        <li>Pararse en el centro de la rejilla en una sola pierna.</li>
                        <li>Tocar cada cuadrado de la rejilla siempre volviendo al centro.</li>
                        <li>Realizar 2 repeticiones por pierna, 4 en total.</li>
                        <li>Registrar el tiempo de ejecución y sumar 0.10 segundos por cada error cometido.</li>
                        <li>Registrar el tiempo y los errores en cada intento.</li>
                    </ol>
                </p>
            </div>

            {['Practice', '1', '2'].map((attempt) => (
                <React.Fragment key={attempt}>
                    <div key={`right-${attempt}`} className="attempt-container">
                        <div className="attempt-row">
                            <label>
                                {`Derecho intento ${attempt === 'Practice' ? 'Práctica' : attempt}`}:
                                <input 
                                    type="number" 
                                    name={`right-${attempt}-time`} 
                                    placeholder="Tiempo (s)"
                                    value={results[`right${attempt}`].time} 
                                    onChange={handleInputChange} 
                                />
                                <input 
                                    type="number" 
                                    name={`right-${attempt}-errors`} 
                                    placeholder="Errores"
                                    value={results[`right${attempt}`].errors} 
                                    onChange={handleInputChange} 
                                />
                            </label>
                        </div>
                    </div>
                    <div key={`left-${attempt}`} className="attempt-container">
                        <div className="attempt-row">
                            <label>
                                {`Izquierdo intento ${attempt === 'Practice' ? 'Práctica' : attempt}`}:
                                <input 
                                    type="number" 
                                    name={`left-${attempt}-time`} 
                                    placeholder="Tiempo (s)"
                                    value={results[`left${attempt}`].time} 
                                    onChange={handleInputChange} 
                                />
                                <input 
                                    type="number" 
                                    name={`left-${attempt}-errors`} 
                                    placeholder="Errores"
                                    value={results[`left${attempt}`].errors} 
                                    onChange={handleInputChange} 
                                />
                            </label>
                        </div>
                    </div>
                </React.Fragment>
            ))}

            <div className="results">
                <h2>Resultados</h2>
                {Object.keys(results).map((key, index) => (
                    <p key={index}>
                        {key.includes('right') ? 'Derecho' : 'Izquierdo'} {key.includes('Practice') ? 'Práctica' : `Intento ${key.replace('right', '').replace('left', '')}`}:
                        Tiempo: {results[key].time || 0}s, Errores: {results[key].errors || 0}, Total: {calculateTotalTime(results[key].time, results[key].errors).toFixed(2)}s
                    </p>
                ))}
                <p>Total Tiempo Derecho: {resultsSummary.totalTimeRight.toFixed(2)}s</p>
                <p>Total Tiempo Izquierdo: {resultsSummary.totalTimeLeft.toFixed(2)}s</p>
                <p>Promedio de Tiempo: {resultsSummary.averageTime.toFixed(2)}s</p>
                <p>{resultsSummary.evaluation}</p>
            </div>
        </div>
    );
}

export default TestSharkDrills;
