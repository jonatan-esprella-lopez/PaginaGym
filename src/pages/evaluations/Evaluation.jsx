import "../../styles/Pruebas.css";
import EvaluationForm from '../../components/evaluation/EvaluationForm';
import useFormData from "../../hooks/useFromData";
import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';
import { Link } from "react-router-dom";

const Evaluation = () => {
  const { formData, handleChange } = useFormData();
  return (
    <div className="evaluation-container">
      <HeaderMain />
      <Link to='/Evaluaciones1'>
          <button> Test de condicion fisica</button>
        </Link>
        <EvaluationForm formData={formData} handleChange={handleChange} />  
        
      <FooterMain />
    </div>
  );
}

export default Evaluation;
