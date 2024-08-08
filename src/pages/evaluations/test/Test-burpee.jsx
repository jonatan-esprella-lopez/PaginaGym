import React, { useState, useEffect, useRef } from 'react';
import '../../../styles/Nutrition/Ev1/TestBurpee.css';

function TestBurpee() {
  const [burpeeCount, setBurpeeCount] = useState('');
  const [burpeeResult, setBurpeeResult] = useState(null);
  const [time, setTime] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');

  const timerRef = useRef(null);

  useEffect(() => {
    if (isActive) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 10);
      }, 10);
    } else if (!isActive && time !== 0) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isActive, time]);

  const startTimer = () => {
    setIsActive(true);
  };

  const stopTimer = () => {
    setIsActive(false);
  };

  const resetTimer = () => {
    setTime(0);
    setIsActive(false);
  };

  const calculateBurpeeResult = () => {
    const count = parseInt(burpeeCount);
    setBurpeeResult(count);
  };

  const formatTime = (time) => {
    const getMilliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = Math.floor((time / 1000) % 60);
    const getSeconds = `0${seconds}`.slice(-2);
    return `${getSeconds}:${getMilliseconds}`;
  };

  return (
    <div className="Main-test-burpee">
      <h1>Test del Burpee</h1>
      <p>Medir cual es tu fuerza explosiva - junto con la resistencia a grandes ezfuerzos y medir la resistencia al alctato durante 60 segundos</p>
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
          Número de repeticiones en 60 segundos:
          <input type="number" value={burpeeCount} onChange={(e) => setBurpeeCount(e.target.value)} />
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
      <button onClick={calculateBurpeeResult}>Calcular Resultado del Burpee</button>
      {burpeeResult !== null && (
        <div>
          <h2>Resultado: {burpeeResult} repeticiones</h2>
          <p>Estado Físico: {interpretBurpeeResult(burpeeResult, age, gender)}</p>
        </div>
      )}
    </div>
  );
}

const interpretBurpeeResult = (count, age, gender) => {
  if (!age || !gender) return 'Por favor, introduce la edad y el género';

  age = parseInt(age);
  const ageGroup = getAgeGroup(age);

  const categories = {
    '10-11': {
      HOMBRE: { EXCELENTE: 42, MUY_BUENO: [34, 41], BUENO: [25, 33], NORMAL: [16, 24], MALO: [0, 15] },
      MUJER: { EXCELENTE: 37, MUY_BUENO: [29, 36], BUENO: [20, 28], NORMAL: [11, 19], MALO: [0, 10] }
    },
    '12-13': {
      HOMBRE: { EXCELENTE: 47, MUY_BUENO: [37, 46], BUENO: [28, 36], NORMAL: [19, 27], MALO: [0, 18] },
      MUJER: { EXCELENTE: 42, MUY_BUENO: [32, 41], BUENO: [23, 31], NORMAL: [14, 22], MALO: [0, 13] }
    },
    '14-15': {
      HOMBRE: { EXCELENTE: 51, MUY_BUENO: [42, 50], BUENO: [32, 41], NORMAL: [22, 31], MALO: [0, 21] },
      MUJER: { EXCELENTE: 46, MUY_BUENO: [37, 45], BUENO: [27, 36], NORMAL: [17, 26], MALO: [0, 16] }
    },
    '16-17': {
      HOMBRE: { EXCELENTE: 53, MUY_BUENO: [44, 52], BUENO: [34, 43], NORMAL: [24, 33], MALO: [0, 23] },
      MUJER: { EXCELENTE: 48, MUY_BUENO: [39, 47], BUENO: [29, 38], NORMAL: [19, 28], MALO: [0, 18] }
    },
    '18+': {
      HOMBRE: { EXCELENTE: 55, MUY_BUENO: [46, 54], BUENO: [36, 45], NORMAL: [26, 35], MALO: [0, 25] },
      MUJER: { EXCELENTE: 50, MUY_BUENO: [41, 49], BUENO: [31, 40], NORMAL: [21, 30], MALO: [0, 20] }
    }
  };

  const category = categories[ageGroup][gender];

  if (count >= category.EXCELENTE) return 'Excelente';
  if (count >= category.MUY_BUENO[0] && count <= category.MUY_BUENO[1]) return 'Muy Bueno';
  if (count >= category.BUENO[0] && count <= category.BUENO[1]) return 'Bueno';
  if (count >= category.NORMAL[0] && count <= category.NORMAL[1]) return 'Normal';
  if (count >= category.MALO[0] && count <= category.MALO[1]) return 'Malo';
  
  return 'Por favor, introduce datos válidos';
};

const getAgeGroup = (age) => {
  if (age >= 10 && age <= 11) return '10-11';
  if (age >= 12 && age <= 13) return '12-13';
  if (age >= 14 && age <= 15) return '14-15';
  if (age >= 16 && age <= 17) return '16-17';
  if (age >= 18) return '18+';
  return null;
};

export default TestBurpee;
