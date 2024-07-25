import React from "react";

const RecommendedIntakes = ({ formData }) => (
  <>
    <h3>Consumos Recomendados</h3>
    <div className="form-group">
      <label htmlFor="proteinIntake">Consumo de Proteína (g)</label>
      <input
        id="proteinIntake"
        name="proteinIntake"
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
  </>
);

export default RecommendedIntakes;
