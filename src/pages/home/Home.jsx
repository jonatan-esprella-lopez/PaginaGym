import {useEffect , useState} from "react";

import "../../styles/home_styles.css"

import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';
import SectionProgramas from "../../components/home/Comp-training-classes"
import Instalaciones from "../../components/home/Comp-facilities"
import Complemento from '../../components/home/Comp-supplements'
import Descarga from "../../components/home/Comp-download-app"
import Novedades from "../../components/common/notification/Sending-notifications"
import BuscarcentroCEC from "../../components/home/Comp-find-center"
import Banner from "../../components/home/Comp-principal";

function Home(){
    const[data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("/api")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Network response was not ok");
                }
                return res.json();
            })
            .then((data) => setData(data.message))
            .catch((error) => setError(error));
    }, []);
    
    return( 
        <div className="App-header">
            <HeaderMain/>
            <Banner/>
            <Instalaciones/>
            <SectionProgramas/>
            <Descarga/>
            <Complemento/>
            <BuscarcentroCEC/>
            <Novedades/>
            <FooterMain/>
        </div>
    )
}export default Home;