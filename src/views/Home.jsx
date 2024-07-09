import React from "react";
import { Link } from 'react-router-dom';
import BannerVideoHome from "../assets/videos/BannerHome.mp4"

import "../styles/home_styles.css"

import Header from "../componets/Header_Main"
import SectionProgramas from "../componets/ClasesCEC"
import Instalaciones from "../componets/Comp_Instalacion"
import Complemento from '../componets/Comp_Complemento'
import Descarga from "../componets/Comp_Descargar"
import Novedades from "../componets/Comp_Noti_Nov"
import Footer from "../componets/Footer_Main"
import BuscarcentroCEC from "../componets/BuscarCentroCEC"
import Banner from "../componets/Home/Banner-principal";

function Home(){
    const[data, setData] = React.useState(null);

    React.useEffect(() => {
        fetch("/api")
          .then((res) => res.json())
          .then((data) => setData(data.message));
      }, []);
    
    return( 
        <div className="App-header">
            <Header/>
            <Banner/>
            <Instalaciones/>
            <SectionProgramas/>
            <Descarga/>
            <Complemento/>
            <BuscarcentroCEC/>
            <Novedades/>
            <Footer/>
        </div>
    )
}export default Home;