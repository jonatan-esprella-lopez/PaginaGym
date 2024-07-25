import React from "react";

const MaxAllowances = ({ formData }) => (
  <>
    <h3>Máximos Permitidos</h3>
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
  </>
);

export default MaxAllowances;
