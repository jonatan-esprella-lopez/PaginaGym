import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';
import "../../styles/PlanNutricional.css"
import PaginaDetails from "../../components/nutrition/Nutrition-plan";

function Plan(){
    return(
       <div>
        <HeaderMain/>
        <PaginaDetails/>
        <FooterMain/>
       </div> 
    )
};
export default Plan;