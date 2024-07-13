// Evaluation.js

import React, { useState } from "react";
import "../styles/Pruebas.css";

function Evaluation() {
  const [formData, setFormData] = useState({
    height: "",
    weight: "",
    bmi: "",
    bodyFatPercentage: "",
    goal: "",
    idealWeight: "",
    idealBMI: "",
    idealBodyFatPercentage: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === "weight" || name === "height" || name === "bodyFatPercentage") {
      calculateIdealData(name, value);
    }
  };

  const calculateIdealData = (name, value) => {
    let idealWeight = "";
    let idealBMI = "";
    let idealBodyFatPercentage = "";

    if (name === "weight" && formData.height) {
      const heightInMeters = formData.height / 100;
      const calculatedBMI = parseFloat(value) / (heightInMeters * heightInMeters);
      setFormData({ ...formData, bmi: calculatedBMI.toFixed(2) });
    } else if (name === "height" && formData.weight) {
      const heightInMeters = value / 100;
      const calculatedBMI = formData.weight / (heightInMeters * heightInMeters);
      setFormData({ ...formData, bmi: calculatedBMI.toFixed(2) });
    } else if (name === "bodyFatPercentage") {
    }

    setFormData({
      ...formData,
      idealWeight: idealWeight.toFixed(2),
      idealBMI: idealBMI.toFixed(2),
      idealBodyFatPercentage: idealBodyFatPercentage.toFixed(2)
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <div className="evaluation-container">
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
        <button type="submit" className="btn-submit">
          Enviar
        </button>
      </form>
    </div>
  );
}

export default Evaluation;
