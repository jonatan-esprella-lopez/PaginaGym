import React, { useState } from 'react';
import '../../../styles/Nutrition/Ev1/VO2MAX.css';

const VO2MAX = () => {
    const [weight, setWeight] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('');
    const [time, setTime] = useState('');
    const [heartRate, setHeartRate] = useState('');
    const [result, setResult] = useState(null);

    const calculateVO2MAX = () => {
        const genderValue = gender === 'M' ? 1 : 0;
        const vo2max = 132.853 - (0.16918 * weight) - (0.3877 * age) + (6.315 * genderValue) - (3.2649 * time) - (0.1565 * heartRate);
        setResult(vo2max.toFixed(2));
    };

    return (
        <div className="vo2max-main">
            <h1>Evaluación VO2MAX</h1>
            <div className="vo2max-description">
                <p><strong>Objetivo:</strong> Identificar intensidad inicial, segura y eficiente.</p>
                <p><strong>Test de ROCKPORT:</strong> Recomendado para mayores de 30-69 años, personas sedentarias, dolores de rodilla.</p>
                <p><strong>Consiste:</strong> Caminar lento, rápido, moderado 1 milla (1,6 Km).</p>
                <p><strong>Fórmula:</strong> VO2max = 132.853 - (0.16918 * peso) - (0.3877 * edad) + (6.315 * género) - (3.2649 * tiempo) - (0.1565 * FC)</p>
                <p><strong>Nota:</strong> Género F=0, M=1</p>
            </div>
            <div className="vo2max-form">
                <div className="vo2max-input">
                    <label>Peso (kg):</label>
                    <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                </div>
                <div className="vo2max-input">
                    <label>Edad (años):</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="vo2max-input">
                    <label>Género:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="">Selecciona</option>
                        <option value="M">Masculino</option>
                        <option value="F">Femenino</option>
                    </select>
                </div>
                <div className="vo2max-input">
                    <label>Tiempo (min):</label>
                    <input type="number" value={time} onChange={(e) => setTime(e.target.value)} />
                </div>
                <div className="vo2max-input">
                    <label>FC (lat/min):</label>
                    <input type="number" value={heartRate} onChange={(e) => setHeartRate(e.target.value)} />
                </div>
                <button onClick={calculateVO2MAX}>Calcular VO2MAX</button>
            </div>
            {result && (
                <div className="vo2max-result">
                    <h2>Resultado</h2>
                    <p>VO2MAX: <span>{result} mlO2/kg/min</span></p>
                </div>
            )}
        </div>
    );
}

export default VO2MAX;
