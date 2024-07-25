import "../../App.css"
import "../../styles/home_styles.css"
import Planes from "../../components/registration-plans/Selection-plans"
import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';

function Inscripcion(){
    return( 
        <section>
            <HeaderMain/>
            <Planes/>
            <FooterMain/>
        </section>
    )
}
export default Inscripcion