import React from 'react';
import '../../styles/Nutricion.css';
import HeaderMain from '../../common/header/HeaderMain';
import FooterMain from '../../common/footer/FooterMain';
import PlanCard from './PlanCard';
import GroupPlan from './GroupPlan';
import IndividualPlan from './IndividualPlan';
import ImagenHipertrofia from "../../assets/images/Nutricion/NutricionHipertrofia.jpg";
import planImage from '../../assets/images/Nutricion/plan-simple.png';

const NutricionPage = () => {
  const groupPlans = [
    {
      title: "Consigue tus objetivos nutricionales en grupo",
      duration: "4 semanas",
      description: "Consigue todos tus objetivos nutricionales en grupo y adopta la vida saludable que buscas en solo un mes.",
      price: "340 Bs",
      benefits: [
        "Plan nutricional y lista de la compra quincenal",
        "Menú adaptado a intolerantes y alérgicos",
        "Foto de platos especiales",
        "Guía y descuentos de suplementación",
        "Recetas fáciles de hacer"
      ],
      imageSrc: planImage,
      altText: "Reto de 30 Días"
    },
    {
      title: "Consigue tus objetivos nutricionales en grupo",
      duration: "8 semanas",
      description: "Si buscas un seguimiento a largo plazo...",
      price: "340 Bs",
      benefits: [
        "Plan nutricional y lista de la compra quincenal",
        "Menú adaptado a intolerantes y alérgicos",
        "Foto de platos especiales",
        "Guía y descuentos de suplementación",
        "Recetas fáciles de hacer",
        "Charla online sobre dieta Keto/Ayuno intermitente",
        "Recomendación de ejercicios"
      ],
      imageSrc: planImage,
      altText: "Reto de 60 Días"
    },
  ];

  const individualPlanHeader = [
    { text: "Un seguimiento " },
    { text: "INDIVIDUAL Y A LA MEDIDA", bold: true },
    { text: " junto a" }
  ];

  const individualPlanSubheader = [
    { text: "Un profesional de Fitness y nutrición." }
  ];

  const individualPlanContent = [
    { text: "Disfruta de un " },
    { text: "plan nutricional personalizado", bold: true },
    { text: " durante dos meses a través de nuestra " },
    { text: "plataforma de nutrición.", bold: true }
  ];

  return (
    <div>
      <HeaderMain />
      <div className='nutricion-container'>
        <h3>Planes Nutricionales<div className="underline"></div></h3>
      </div>
      <h1 className='Titulo_Principal'>Planes Pre-armados</h1>
      <section className='cont-general-Nutricion'>
        <PlanCard
          planHeader="Plan proteico"
          imageSrc={ImagenHipertrofia}
          altText="Aumenta tu masa muscular"
          title="Aumenta tu masa muscular"
          description="Un plan nutricional diseñado para personas que buscan aumentar su masa muscular a través de una dieta rica en proteínas y calorías controladas."
          proteins="150g por día"
          carbs="200g por día"
          fats="70g por día"
          calories="2500 calorías por día"
        />
        <PlanCard
          planHeader="Plan de definición"
          imageSrc={ImagenHipertrofia}
          altText="Define tu musculatura"
          title="Define tu musculatura"
          description="Un plan nutricional enfocado en la pérdida de grasa y definición muscular, con un equilibrio adecuado de proteínas, carbohidratos y grasas."
          proteins="120g por día"
          carbs="150g por día"
          fats="50g por día"
          calories="2000 calorías por día"
        />
      </section>
      <h2 className='Titulo_Principal'>Planes Grupales</h2>
      <section className='cont-general-Nutricion'>
        {groupPlans.map((plan, index) => (
          <GroupPlan
            key={index}
            title={plan.title}
            duration={plan.duration}
            description={plan.description}
            price={plan.price}
            benefits={plan.benefits}
            imageSrc={plan.imageSrc}
            altText={plan.altText}
          />
        ))}
      </section>
      <h2 className='Titulo_Principal'>Planes Individuales</h2>
      <section className='cont-general-Nutricion'>
        <IndividualPlan
          header={individualPlanHeader}
          subheader={individualPlanSubheader}
          content={individualPlanContent}
        />
      </section>
      <FooterMain />
    </div>
  );
};

export default NutricionPage;

