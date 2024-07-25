import { useState, useEffect } from "react";
import { calculateAllData } from "../utils/evaluation/calculations";

const useFormData = () => {
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
    if (formData.weight && formData.height) {
      const updatedData = calculateAllData(formData);
      setFormData((prevData) => ({
        ...prevData,
        ...updatedData,
      }));
    }
  }, [formData.weight, formData.height, formData.bodyFatPercentage]);

  return { formData, handleChange };
};

export default useFormData;
