import "../../styles/soporte.css";
import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';
import SupportPage from "../../components/support/Support-page";


function SoportePage() {

    return (
        <div className="support-container">
            <HeaderMain/>
            <SupportPage/>
            <FooterMain/>
        </div>
    );
}

export default SoportePage;
