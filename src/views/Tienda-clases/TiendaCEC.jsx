// src/components/TiendaClases.js
import React from 'react';

import ClasesEntrenamiento from "../../componets/Trienda-clases/ClasesEntrenamiento.jsx";
import Header from "../../componets/Header_Main"
import Footer from "../../componets/Footer_Main"

const TiendaClases = () => {
  return (
    <section>
      <Header/>
      <ClasesEntrenamiento/>
      <Footer/>
    </section>
  );
};

export default TiendaClases;
