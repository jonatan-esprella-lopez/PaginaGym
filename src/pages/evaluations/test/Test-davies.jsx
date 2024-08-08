import React, { useState } from 'react';
import '../../../styles/Nutrition/Ev1/TestDavies.css';

function TestDavies() {
    const [repCounts, setRepCounts] = useState({ attempt1: '', attempt2: '', attempt3: '' });
    const [timeLeft, setTimeLeft] = useState({ attempt1: 15, attempt2: 15, attempt3: 15 });
    const [isRunning, setIsRunning] = useState({ attempt1: false, attempt2: false, attempt3: false });

    const startTimer = (attempt) => {
        setIsRunning(prevState => ({ ...prevState, [attempt]: true }));
        const timer = setInterval(() => {
            setTimeLeft(prevState => {
                if (prevState[attempt] === 1) {
                    clearInterval(timer);
                    setIsRunning(prevState => ({ ...prevState, [attempt]: false }));
                    return { ...prevState, [attempt]: 15 };
                }
                return { ...prevState, [attempt]: prevState[attempt] - 1 };
            });
        }, 1000);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setRepCounts(prevCounts => ({ ...prevCounts, [name]: value }));
    };

    const renderAttempt = (attempt, index) => (
        <div key={attempt} className="attempt-container">
            <div className="attempt-row">
                <label>
                    Repeticiones intento {index + 1}:
                    <input 
                        type="number" 
                        name={attempt} 
                        value={repCounts[attempt]} 
                        onChange={handleInputChange} 
                        disabled={isRunning[attempt]}
                    />
                </label>
                <div className="timer">
                    <h2>{timeLeft[attempt]}s</h2>
                </div>
                <button onClick={() => startTimer(attempt)} disabled={isRunning[attempt]}>Comenzar</button>
            </div>
        </div>
    );

    const evaluateResults = () => {
        const totalReps = parseInt(repCounts.attempt1) + parseInt(repCounts.attempt2) + parseInt(repCounts.attempt3);
        const averageReps = totalReps / 3;

        let evaluation = '';
        if (averageReps >= 28) {
            evaluation = 'Excelente desempeño. Sigue así para mantener y mejorar tu estabilidad y agilidad.';
        } else if (averageReps >= 23) {
            evaluation = 'Buen desempeño. Continúa trabajando para mejorar tu fuerza y estabilidad.';
        } else if (averageReps >= 10) {
            evaluation = 'Desempeño promedio. Hay margen para mejorar tu estabilidad y agilidad.';
        } else {
            evaluation = 'Desempeño bajo. Se recomienda enfocarse en ejercicios para mejorar la estabilidad del hombro y la fuerza en la parte superior del cuerpo.';
        }

        return { averageReps, evaluation };
    };

    const results = evaluateResults();

    return (
        <div className="main-test-davies">
            <h1>Prueba de Davies</h1>
            <div className="description">
                <p>
                    <strong>Descripción General:</strong> La prueba de Davies es una evaluación utilizada para medir la agilidad y estabilidad de la parte superior del cuerpo en el patrón de movimiento de flexión. 
                    Evalúa la fuerza general, flexibilidad y control neuromuscular de los músculos escapulares y del hombro.
                </p>
                <p>
                    <strong>Propósito y Beneficios:</strong> Proporciona información valiosa sobre la estabilidad de los hombros y el riesgo de lesiones. 
                    Ayuda a identificar desequilibrios musculares y debilidades, permitiendo un programa de entrenamiento más personalizado.
                </p>
                <p>
                    <strong>Configuración y Equipo Requerido:</strong> Coloque dos piezas de cinta en el suelo separadas por 36 pulgadas. Necesitará un cronómetro de 15 segundos.
                </p>
                <p>
                    <strong>Guía Paso a Paso:</strong>
                    <ol>
                        <li>Coloque las manos en las piezas de cinta y asuma la posición de flexión.</li>
                        <li>Cuando el temporizador comience, toque la mano contraria tantas veces como sea posible en 15 segundos.</li>
                        <li>Registre el número de toques en cada prueba.</li>
                        <li>Realice tres pruebas y tome el promedio de las repeticiones.</li>
                    </ol>
                </p>
            </div>

            {['attempt1', 'attempt2', 'attempt3'].map((attempt, index) => renderAttempt(attempt, index))}

            {Object.values(repCounts).every(count => count !== '') && (
                <div className="results">
                    <h2>Resultados</h2>
                    <p>Intento 1: {repCounts.attempt1} repeticiones</p>
                    <p>Intento 2: {repCounts.attempt2} repeticiones</p>
                    <p>Intento 3: {repCounts.attempt3} repeticiones</p>
                    <p>Promedio: {results.averageReps.toFixed(2)} repeticiones</p>
                    <p>{results.evaluation}</p>
                </div>
            )}
        </div>
    );
}

export default TestDavies;
