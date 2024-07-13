import React from "react";
import { Link } from 'react-router-dom';
import BannerVideoHome from "../assets/videos/BannerHome.mp4"

import "../styles/home_styles.css"

import Header from "../componets/Header_Main"
import SectionProgramas from "../componets/Center-class"
import Instalaciones from "../componets/Instalaciones/Comp-instalacion"
import Complemento from '../componets/Complementos/Comp_Complemento'
import Descarga from "../componets/Comp_Descargar"
import Novedades from "../componets/Comp_Noti_Nov"
import Footer from "../componets/Footer_Main"
import BuscarcentroCEC from "../componets/Find-center"
import Banner from "../componets/Home/Principal-banner";

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