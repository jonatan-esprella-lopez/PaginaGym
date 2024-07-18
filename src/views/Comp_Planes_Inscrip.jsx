import React from 'react';
import '../App.css';
import '../styles/home_styles.css';
import Planes from '../componets/Comp_Planes';
import Header from '../componets/Header_Main';
import Footer from '../componets/Footer_Main';

function Inscripcion() {
  return (
    <section>
      <Header />
      <Planes />
      <Footer />
    </section>
  );
}
export default Inscripcion;
