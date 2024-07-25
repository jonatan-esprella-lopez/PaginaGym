import { useEffect, useState } from 'react';

function IdealData({ userData }) {
  const [idealWeight, setIdealWeight] = useState(0);
  const [idealBmi, setIdealBmi] = useState(0);
  const [idealFatPercentage, setIdealFatPercentage] = useState(0);

  useEffect(() => {
    const heightInMeters = userData.height / 100;
    const bmi = userData.weight / (heightInMeters * heightInMeters);
    const idealBmi = 22; // Un valor típico para el IMC ideal
    const idealWeight = idealBmi * (heightInMeters * heightInMeters);
    const idealFatPercentage = userData.gender === 'M' ? 15 : 22; // Valores típicos para % de grasa ideal

    setIdealWeight(idealWeight.toFixed(2));
    setIdealBmi(bmi.toFixed(2));
    setIdealFatPercentage(idealFatPercentage);
  }, [userData]);

  return (
    <div className="ideal-data">
      <h3>Datos Ideales</h3>
      <label>Peso</label>
      <input type="text" value={userData.weight} disabled />
      <label>Peso Ideal</label>
      <input type="text" value={idealWeight} disabled />
      <label>IMC</label>
      <input type="text" value={userData.bmi} disabled />
      <label>IMC Ideal</label>
      <input type="text" value={idealBmi} disabled />
      <label>% Graso</label>
      <input type="text" value={userData.fatPercentage} disabled />
      <label>% Graso Ideal</label>
      <input type="text" value={idealFatPercentage} disabled />
    </div>
  );
}

export default IdealData;
