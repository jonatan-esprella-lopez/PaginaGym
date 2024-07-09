import React, { useState, useEffect } from "react";
import "../styles/Pruebas.css";
import Header from "../componets/Header_Main";
import Footer from "../componets/Footer_Main";


// "<h1>Calculadora de IMC y Porcentaje de Grasa Corporal</h1>
// <Calculadora calcularResultados={calcularResultados} />
// {imc !== null && porcentajeGrasa !== null && (
//   <Resultado imc={imc} porcentajeGrasa={porcentajeGrasa} />
// )}"
   
function Evaluation() {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    bmi: "",
    bodyFatPercentage: "",
    goal: "",
    idealWeight: "",
    idealBMI: "",
    idealBodyFatPercentage: "",
    proteinIntake: "",
    waterIntake: "",
    creatineIntake: "",
    maxMuscleGain: "",
    maxFatLoss: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  useEffect(() => {
    calculateAllData();
  }, [formData.weight, formData.height, formData.bodyFatPercentage]);

  const calculateAllData = () => {
    if (formData.weight && formData.height) {
      const heightInMeters = formData.height / 100;
      const calculatedBMI = parseFloat(formData.weight) / (heightInMeters * heightInMeters);
      setFormData((prevData) => ({ ...prevData, bmi: calculatedBMI.toFixed(2) }));

      // Calculadora de Peso Ideal
      const idealWeight = 22.5 * (heightInMeters * heightInMeters);
      setFormData((prevData) => ({ ...prevData, idealWeight: idealWeight.toFixed(2) }));

      // Calculadora de Consumo de Proteína (normal, medio, máximo)
      const proteinIntake = {
        normal: 1 * formData.weight,
        medium: 1.5 * formData.weight,
        maximum: 2 * formData.weight
      };
      setFormData((prevData) => ({ ...prevData, proteinIntake }));

      // Calculadora de Consumo de Agua
      const waterIntake = formData.weight * 0.033;
      setFormData((prevData) => ({ ...prevData, waterIntake: waterIntake.toFixed(2) }));

      // Calculadora de Consumo de Creatina
      const creatineIntake = formData.weight * 0.03;
      setFormData((prevData) => ({ ...prevData, creatineIntake: creatineIntake.toFixed(2) }));

      // Calculadora de Máxima Ganancia Muscular
      const maxMuscleGain = formData.weight * 0.015;
      setFormData((prevData) => ({ ...prevData, maxMuscleGain: maxMuscleGain.toFixed(2) }));

      // Calculadora de Máxima Pérdida de Grasa
      const maxFatLoss = formData.weight * 0.01;
      setFormData((prevData) => ({ ...prevData, maxFatLoss: maxFatLoss.toFixed(2) }));
    }

    if (formData.bodyFatPercentage) {
      // Calculadora de IMC Ideal
      const idealBMI = 21.75; // Este valor puede variar según la recomendación médica
      setFormData((prevData) => ({ ...prevData, idealBMI: idealBMI.toFixed(2) }));

      // Calculadora de Porcentaje de Grasa Corporal Ideal
      const idealBodyFatPercentage = formData.bodyFatPercentage < 15 ? 15 : 20;
      setFormData((prevData) => ({ ...prevData, idealBodyFatPercentage: idealBodyFatPercentage.toFixed(2) }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="evaluation-container">
      <Header/>
      <form className="evaluation-form" onSubmit={handleSubmit}>
        <h2>Evaluación</h2>
        <div className="form-group">
          <label htmlFor="height">Estatura (cm)</label>
          <input
            type="number"
            id="height"
            name="height"
            value={formData.height}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="weight">Peso (kg)</label>
          <input
            type="number"
            id="weight"
            name="weight"
            value={formData.weight}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="bmi">IMC</label>
          <input
            type="text"
            id="bmi"
            name="bmi"
            value={formData.bmi}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="bodyFatPercentage">% Graso</label>
          <input
            type="number"
            id="bodyFatPercentage"
            name="bodyFatPercentage"
            value={formData.bodyFatPercentage}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="goal">Objetivo</label>
          <input
            type="text"
            id="goal"
            name="goal"
            value={formData.goal}
            onChange={handleChange}
            required
          />
        </div>
        {/* Campos de datos ideales */}
        <div className="form-group">
          <label htmlFor="idealWeight">Peso Ideal (kg)</label>
          <input
            type="text"
            id="idealWeight"
            name="idealWeight"
            value={formData.idealWeight}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="idealBMI">IMC Ideal</label>
          <input
            type="text"
            id="idealBMI"
            name="idealBMI"
            value={formData.idealBMI}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="idealBodyFatPercentage">% Graso Ideal</label>
          <input
            type="text"
            id="idealBodyFatPercentage"
            name="idealBodyFatPercentage"
            value={formData.idealBodyFatPercentage}
            readOnly
          />
        </div>
        <div className="form-group">
          <label>Consumo de Proteína (g)</label>
          <input
            type="text"
            value={`Normal: ${formData.proteinIntake.normal || ""}, Medio: ${formData.proteinIntake.medium || ""}, Máximo: ${formData.proteinIntake.maximum || ""}`}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="waterIntake">Consumo de Agua (litros)</label>
          <input
            type="text"
            id="waterIntake"
            name="waterIntake"
            value={formData.waterIntake}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="creatineIntake">Consumo de Creatina (g)</label>
          <input
            type="text"
            id="creatineIntake"
            name="creatineIntake"
            value={formData.creatineIntake}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxMuscleGain">Máxima Ganancia Muscular (kg)</label>
          <input
            type="text"
            id="maxMuscleGain"
            name="maxMuscleGain"
            value={formData.maxMuscleGain}
            readOnly
          />
        </div>
        <div className="form-group">
          <label htmlFor="maxFatLoss">Máxima Pérdida de Grasa (kg)</label>
          <input
            type="text"
            id="maxFatLoss"
            name="maxFatLoss"
            value={formData.maxFatLoss}
            readOnly
          />
        </div>
        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
      <Footer/>
    </div>
  );
}

export default Evaluation;
