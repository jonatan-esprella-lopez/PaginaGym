import "../../styles/Pruebas.css";
import EvaluationForm from '../../components/evaluation/EvaluationForm';
import useFormData from "../../hooks/useFromData";
import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';

const Evaluation = () => {
  const { formData, handleChange } = useFormData();
  return (
    <div className="evaluation-container">
      <HeaderMain />
       <EvaluationForm formData={formData} handleChange={handleChange} />  
      <FooterMain />
    </div>
  );
}

export default Evaluation;
