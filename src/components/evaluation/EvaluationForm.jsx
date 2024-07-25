import React from "react";
import Results from "./Results";
import RecommendedIntakes from "./RecommendedIntakes";
import MaxAllowances from "./MaxAllowances";

const EvaluationForm = ({ formData, handleChange }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
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

      <Results formData={formData} />
      <RecommendedIntakes formData={formData} />
      <MaxAllowances formData={formData} />
    </form>
  );
};

export default EvaluationForm;
