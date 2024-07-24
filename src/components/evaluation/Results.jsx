import React from "react";

const Results = ({ formData }) => (
  <>
    <h3>Resultados</h3>
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
  </>
);

export default Results;
