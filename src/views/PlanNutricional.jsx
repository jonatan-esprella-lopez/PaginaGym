import React from "react";

import Header from "../componets/Header_Main"
import Footer from "../componets/Footer_Main"
import TablaDistrubicion from "../componets/Nutricion/Tabla_Distribucion"
import "../styles/PlanNutricional.css"

function Plan(){
    return(
       <div>
        <Header/>
        <h1>Hola mundo</h1>
        <TablaDistrubicion/>
        <Footer/>
       </div> 
    )
};
export default Plan;