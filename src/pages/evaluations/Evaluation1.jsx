import { useState } from 'react';
import UserDataForm from '../../components/evaluation/Ev1/User-data-form';
import IdealData from '../../components/evaluation/Ev1/Ideal-data';
import '../../styles/Nutrition/Ev1/Evaluation.css';

function EvaluationUser() {
  const [userData, setUserData] = useState({
    name: '',
    ci: '',
    phone: '',
    gender: '',
    age: '',
    plan: '',
    discount: '',
    height: '',
    weight: '',
    bmi: '',
    fatPercentage: '',
    goal: ''
  });

  const handleUserDataChange = (newData) => {
    setUserData(newData);
  };

  return (
    <div className="EvaluationUser">
      <UserDataForm userData={userData} onUserDataChange={handleUserDataChange} />
      <IdealData userData={userData} />
      
    </div>
  );
}

export default EvaluationUser;
