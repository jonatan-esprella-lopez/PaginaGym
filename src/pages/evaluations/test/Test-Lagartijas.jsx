import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/Nutrition/Ev1/TestLagartijas.css';

function TestLagartijas() {
  const [pushUpCount, setPushUpCount] = useState('');
  const [pushUpResult, setPushUpResult] = useState(null);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [isChild, setIsChild] = useState(false);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const timerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime - 10);
      }, 10);
    } else if (!isActive && time === 0) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
    setTime(isChild ? 30000 : 60000); // 30 segundos para niños, 60 segundos para adultos
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime(0);
    setIsActive(false);
  };

  useEffect(() => {
    if (time === 0 && isActive) {
      setIsActive(false);
      new Audio('/path/to/beep.mp3').play(); // Reemplaza con la ruta correcta del archivo de pitido
      calculatePushUpResult();
    }
  }, [time, isActive]);

  const calculatePushUpResult = () => {
    const count = parseInt(pushUpCount);
    setPushUpResult(count);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor((time / 1000) % 60);
    const getSeconds = `0${seconds}`.slice(-2);
    return `${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div className="Main-test-Lagartijas">
      <h1>Test de Lagartijas</h1>
      <p>Esta prueba realiza la guerza de una persona dando a evaluacion del rendimiento de un alumno</p>
      <div>
        <label>
          Edad:
          <input type="number" value={age} onChange={(e) => setAge(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Género:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Seleccionar</option>
            <option value="HOMBRE">Hombre</option>
            <option value="MUJER">Mujer</option>
          </select>
        </label>
      </div>
      <div>
        <label>
          Número de repeticiones:
          <input type="number" value={pushUpCount} onChange={(e) => setPushUpCount(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          ¿Es niño?
          <input type="checkbox" checked={isChild} onChange={(e) => setIsChild(e.target.checked)} />
        </label>
      </div>
      <div>
        <button onClick={startTimer}>Iniciar</button>
        <button onClick={stopTimer}>Detener</button>
        <button onClick={resetTimer}>Reiniciar</button>
      </div>
      <div className="timer">
        {formatTime(time)}
      </div>
      {pushUpResult !== null && (
        <div>
          <h2>Resultado: {pushUpResult} repeticiones</h2>
          <p>Estado Físico: {interpretPushUpResult(pushUpResult, age, gender)}</p>
        </div>
      )}
    </div>
  );
}

const interpretPushUpResult = (count, age, gender) => {
  if (!age || !gender) return 'Por favor, introduce la edad y el género';

  age = parseInt(age);
  const ageGroup = getAgeGroup(age);

  const categories = {
    '20-29': {
      HOMBRE: { EXCELENTE: 54, BUENO: [45, 54], PROMEDIO: [35, 44], POBRE: [20, 34], MUY_POBRE: [0, 19] },
      MUJER: { EXCELENTE: 54, BUENO: [45, 54], PROMEDIO: [35, 44], POBRE: [20, 34], MUY_POBRE: [0, 19] }
    },
    '30-39': {
      HOMBRE: { EXCELENTE: 44, BUENO: [35, 44], PROMEDIO: [24, 34], POBRE: [15, 23], MUY_POBRE: [0, 14] },
      MUJER: { EXCELENTE: 44, BUENO: [35, 44], PROMEDIO: [24, 34], POBRE: [15, 23], MUY_POBRE: [0, 14] }
    },
    '40-49': {
      HOMBRE: { EXCELENTE: 39, BUENO: [30, 39], PROMEDIO: [20, 29], POBRE: [12, 19], MUY_POBRE: [0, 11] },
      MUJER: { EXCELENTE: 39, BUENO: [30, 39], PROMEDIO: [20, 29], POBRE: [12, 19], MUY_POBRE: [0, 11] }
    },
    '50-59': {
      HOMBRE: { EXCELENTE: 34, BUENO: [25, 34], PROMEDIO: [15, 24], POBRE: [8, 14], MUY_POBRE: [0, 7] },
      MUJER: { EXCELENTE: 34, BUENO: [25, 34], PROMEDIO: [15, 24], POBRE: [8, 14], MUY_POBRE: [0, 7] }
    },
    '60+': {
      HOMBRE: { EXCELENTE: 29, BUENO: [20, 29], PROMEDIO: [11, 19], POBRE: [5, 10], MUY_POBRE: [0, 4] },
      MUJER: { EXCELENTE: 29, BUENO: [20, 29], PROMEDIO: [11, 19], POBRE: [5, 10], MUY_POBRE: [0, 4] }
    }
  };

  const category = categories[ageGroup][gender];

  if (count >= category.EXCELENTE) return 'Excelente';
  if (count >= category.BUENO[0] && count <= category.BUENO[1]) return 'Bueno';
  if (count >= category.PROMEDIO[0] && count <= category.PROMEDIO[1]) return 'Promedio';
  if (count >= category.POBRE[0] && count <= category.POBRE[1]) return 'Pobre';
  if (count >= category.MUY_POBRE[0] && count <= category.MUY_POBRE[1]) return 'Muy Pobre';

  return 'Por favor, introduce datos válidos';
};

const getAgeGroup = (age) => {
  if (age >= 20 && age <= 29) return '20-29';
  if (age >= 30 && age <= 39) return '30-39';
  if (age >= 40 && age <= 49) return '40-49';
  if (age >= 50 && age <= 59) return '50-59';
  if (age >= 60) return '60+';
  return null;
};

export default TestLagartijas;
