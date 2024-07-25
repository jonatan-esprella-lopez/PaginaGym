import { useState } from 'react';
import '../../styles/Planes/Plan-selection.css';

const PlanSelector = () => {
  const [selectedPlan, setSelectedPlan] = useState('FIT');

  const handlePlanChange = (plan) => {
    setSelectedPlan(plan);
  };

  return (
    <section className="plan-selector-container">
        <h1 className="title">ELEGISTE EL MEJOR PLAN FIT</h1>
        <div className="plan-selector">
        <section className="plans">
            <article className={`plan-inscription ${selectedPlan === 'BASIC' ? 'selected' : ''}`} onClick={() => handlePlanChange('BASIC')}>
                <div className='plan-details-container'>
                    <div className="plan-header-ins">
                        <input type="radio" checked={selectedPlan === 'BASIC'} readOnly />
                        <h2>PLAN BASICO</h2>
                    </div>
                    <p className="price">
                        <span className="old-price">Bs599.00</span> <span className="new-price">Bs49.00*</span>
                    </p>
                    <ul className="details">
                        <li>Inscripción: Bs0.00</li>
                        <li>Mantenimiento: Bs699.00/año</li>
                        <li>Plazo: 12 meses</li>
                    </ul>
                </div>
                <div>
                <p className="description">
                    Con el plan Black podrás entrenar en cualquiera de nuestros gimnasios sin restricción de horario. En este plan el contrato es por 12 meses.
                </p>
                </div>
            </article>
            
            <article className={`plan-inscription ${selectedPlan === 'BASIC+' ? 'selected' : ''}`} onClick={() => handlePlanChange('BASIC+')}>
                <div className='plan-details-container'>
                    <div className="plan-header-ins">
                        <input type="radio" checked={selectedPlan === 'BASIC+'} readOnly />
                        <h2>PLAN BASICO <span>+</span></h2>
                    </div>
                    <p className="price">
                        <span className="old-price">Bs599.00</span> <span className="new-price">Bs49.00*</span>
                    </p>
                    <ul className="details">
                        <li>Inscripción: Bs0.00</li>
                        <li>Mantenimiento: Bs699.00/año</li>
                        <li>Plazo: 12 meses</li>
                    </ul>
                </div>
                <div>
                <p className="description">
                    Con el plan Black podrás entrenar en cualquiera de nuestros gimnasios sin restricción de horario. En este plan el contrato es por 12 meses.
                </p>
                </div>
            </article>

            <article className={`plan-inscription ${selectedPlan === 'PLATA' ? 'selected' : ''}`} onClick={() => handlePlanChange('PLATA')}>
                <div className='plan-details-container'>
                    <div className="plan-header-ins">
                        <input type="radio" checked={selectedPlan === 'PLATA'} readOnly />
                        <h2>PLAN PLATA</h2>
                    </div>
                    <p className="price">
                        <span className="old-price">Bs599.00</span> <span className="new-price">Bs49.00*</span>
                    </p>
                    <ul className="details">
                        <li>Inscripción: Bs0.00</li>
                        <li>Mantenimiento: Bs699.00/año</li>
                        <li>Plazo: 12 meses</li>
                    </ul>
                </div>
                <div>
                <p className="description">
                    Con el plan Black podrás entrenar en cualquiera de nuestros gimnasios sin restricción de horario. En este plan el contrato es por 12 meses.
                </p>
                </div>
            </article>
        </section>

        <section className="purchase-details">
            <h2>Detalles de la compra</h2>
            <p className="gym">Gimnasio elegido: <strong>Averanda</strong></p>
            <button className="continue-button">Continuar Inscripción</button>
            <div className="coupon-section">
            <button className="button-add estructura-size2 button-type-4">Añadir cupón</button>
            <div className="coupon-input">
                <input type="text" placeholder="Cupón" />
                <button className="button-add-normal estructura-size2 button-type-4">Añadir</button>
            </div>
            </div>
            <div className="charges">
            <h3>1er COBRO</h3>
            <div className="charge-details">
                <p>Mensualidad: Bs49.00</p>
                <p>Inscripción: Bs0.00</p>
            </div>
            <h3>2º COBRO</h3>
            <div className="charge-details">
                <p>Mensualidad: Bs399.00</p>
            </div>
            <h3>3er COBRO</h3>
            <div className="charge-details">
                <p>Mensualidad: Bs1098.00</p>
            </div>
            </div>
        </section>
        </div>
    </section>
  );
};

export default PlanSelector;
