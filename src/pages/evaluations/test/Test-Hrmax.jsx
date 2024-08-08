import React, { useState } from 'react';
import '../../../styles/Nutrition/Ev1/Hrmax.css';

const Hrmax = () => {
    const [age, setAge] = useState('');
    const [restingHeartRate, setRestingHeartRate] = useState('');
    const [gender, setGender] = useState('male'); // Add state for gender
    const [hrmax, setHrmax] = useState(null);
    const [zones, setZones] = useState({ warmup: null, aerobic: null, lactate: null, anaerobic: null, maximum: null });

    const calculateHrmax = () => {
        const maxHeartRate = (gender === 'male' ? 220 : 226) - Number(age);
        const restingHR = Number(restingHeartRate);
        const heartRateReserve = maxHeartRate - restingHR;

        const warmupZone = [
            (heartRateReserve * 0.50) + restingHR,
            heartRateReserve * 0.60 + restingHR
        ];
        const aerobicZone = [
            heartRateReserve * 0.60 + restingHR,
            heartRateReserve * 0.70 + restingHR
        ];
        const lactateZone = [
            heartRateReserve * 0.70 + restingHR,
            heartRateReserve * 0.80 + restingHR
        ];
        const anaerobicZone = [
            heartRateReserve * 0.80 + restingHR,
            heartRateReserve * 0.90 + restingHR
        ];
        const maximumZone = [
            heartRateReserve * 0.90 + restingHR,
            heartRateReserve * 1.00 + restingHR
        ];

        setHrmax(maxHeartRate);
        setZones({
            warmup: warmupZone,
            aerobic: aerobicZone,
            lactate: lactateZone,
            anaerobic: anaerobicZone,
            maximum: maximumZone
        });
    };

    return (
        <div className="hrmax-main">
            <h1>Cálculo de Frecuencia Cardíaca Máxima</h1>
            <div className="hrmax-description">
                <p><strong>Objetivo:</strong> Calcular la Frecuencia Cardíaca Máxima y las zonas de entrenamiento.</p>
                <p><strong>Fórmula:</strong> {gender === 'male' ? '220 - edad' : '226 - edad'}</p>
            </div>
            <div className="hrmax-form">
                <div className="hrmax-input">
                    <label>Género:</label>
                    <select value={gender} onChange={(e) => setGender(e.target.value)}>
                        <option value="male">Hombre</option>
                        <option value="female">Mujer</option>
                    </select>
                </div>
                <div className="hrmax-input">
                    <label>Edad (años):</label>
                    <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
                </div>
                <div className="hrmax-input">
                    <label>Frecuencia Cardíaca en Reposo (lat/min):</label>
                    <input type="number" value={restingHeartRate} onChange={(e) => setRestingHeartRate(e.target.value)} />
                </div>
                <button onClick={calculateHrmax}>Calcular Hrmax</button>
            </div>
            {hrmax && (
                <div className="hrmax-result">
                    <h2>Resultados</h2>
                    <p>Frecuencia Cardíaca Máxima (Hrmax): <span>{hrmax} lat/min</span></p>
                    <p>Zona de Calentamiento: <span>{zones.warmup[0].toFixed(2)} - {zones.warmup[1].toFixed(2)} lat/min</span></p>
                    <p>Zona Aeróbica: <span>{zones.aerobic[0].toFixed(2)} - {zones.aerobic[1].toFixed(2)} lat/min</span></p>
                    <p>Zona Aeróbica Láctica: <span>{zones.lactate[0].toFixed(2)} - {zones.lactate[1].toFixed(2)} lat/min</span></p>
                    <p>Zona Anaeróbica: <span>{zones.anaerobic[0].toFixed(2)} - {zones.anaerobic[1].toFixed(2)} lat/min</span></p>
                    <p>Zona de Esfuerzo Máximo: <span>{zones.maximum[0].toFixed(2)} - {zones.maximum[1].toFixed(2)} lat/min</span></p>
                </div>
            )}
        </div>
    );
}

export default Hrmax;
