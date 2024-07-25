import '../../styles/Rutinas.css';
import '../../styles/Rutinas/Training.css';
import HeaderMain from '../../components/common/header/Header-main';
import FooterMain from '../../components/common/footer/Footer-main';
import TrainingIntro from '../../components/routines/Training-intro';
import TrainingCard from '../../components/routines/Training-card';
import TrainerSection from '../../components/routines/Trainer-section';
import WeeklyTrainingTable from '../../components/routines/Weekly-training-table';
import FooterInfoSection from '../../components/routines/Footer-info-section';


function RutinasPage() {
  return (
    <div className='container-rutinas'>
      <HeaderMain/>
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
      <FooterMain/>
    </div>
  );
}

export default RutinasPage;
