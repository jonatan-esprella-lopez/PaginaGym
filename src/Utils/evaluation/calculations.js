export const calculateAllData = (formData) => {
    const heightInMeters = formData.height / 100;
    const calculatedBMI = parseFloat(formData.weight) / (heightInMeters * heightInMeters);
    const idealWeight = 22.5 * (heightInMeters * heightInMeters);
    const waterIntake = formData.weight * 0.033;
    const creatineIntake = formData.weight * 0.03;
    const maxMuscleGain = formData.weight * 0.015;
    const maxFatLoss = formData.weight * 0.01;
  
    const updatedData = {
      bmi: calculatedBMI.toFixed(2),
      idealWeight: idealWeight.toFixed(2),
      proteinIntake: {
        normal: 1 * formData.weight,
        medium: 1.5 * formData.weight,
        maximum: 2 * formData.weight,
      },
      waterIntake: waterIntake.toFixed(2),
      creatineIntake: creatineIntake.toFixed(2),
      maxMuscleGain: maxMuscleGain.toFixed(2),
      maxFatLoss: maxFatLoss.toFixed(2),
    };
  
    if (formData.bodyFatPercentage) {
      const idealBMI = 21.75;
      const idealBodyFatPercentage = formData.bodyFatPercentage < 15 ? 15 : 20;
  
      updatedData.idealBMI = idealBMI.toFixed(2);
      updatedData.idealBodyFatPercentage = idealBodyFatPercentage.toFixed(2);
    }
  
    return updatedData;
  };
  