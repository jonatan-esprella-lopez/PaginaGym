import React from 'react';
import '../styles/Rutinas.css';
import '../styles/Rutinas/Training.css';
import Header from '../componets/Header_Main';
import Footer from '../componets/Footer_Main';
import TrainingIntro from '../componets/components-page-rutinas/TrainingIntro.jsx';
import TrainingCard from '../componets/components-page-rutinas/TrainingCard.jsx';
import TrainerSection from '../componets/components-page-rutinas/TrainerSection.jsx';
import WeeklyTrainingTable from '../componets/components-page-rutinas/WeeklyTrainingTable.jsx';
import FooterInfoSection from '../componets/components-page-rutinas/FooterInfoSection.jsx';


function RutinasPage() {
  return (
    <div className='container-rutinas'>
      <Header/>
        <div className="rutinas-container">
          <h3>Entrenamiento del día<div className="underline"></div></h3>
        </div>
        <section className="training-section">
          <div className="training-content">
            <TrainingIntro />
            <div className="training-cards">
              <TrainingCard
                title="Entrenamiento del día"
                text="Nuestros entrenamientos están adaptados a diferentes niveles de habilidad y objetivos, ya sea que estés buscando mejorar tu resistencia, ganar masa muscular, perder peso o simplemente mantenerte en forma."
              />
              <TrainingCard
                title="Seguimiento de Progreso"
                text="En cada entrenamiento, podrás registrar tu progreso y realizar un seguimiento de tus mejoras a lo largo del tiempo. Esta funcionalidad te permitirá mantenerte motivado y ajustar tu rutina según tus necesidades."
              />
            </div>
          </div>
          <TrainerSection />
        </section>
        <WeeklyTrainingTable />
        <FooterInfoSection />
      <Footer/>
    </div>
  );
}

export default RutinasPage;
