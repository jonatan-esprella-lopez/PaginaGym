import React, { useEffect, useState } from 'react';
import './PlanView.css';

const PlanView = () => {
    const [plan, setPlan] = useState({});

    useEffect(() => {
        const savedPlan = localStorage.getItem('dietPlan');
        if (savedPlan) {
            setPlan(JSON.parse(savedPlan));
        }
    }, []);

    return (
        <div className="plan-view">
            <h2>Plan de Dieta y Complementos</h2>

            <div className="meal-view">
                <h3>Refrigerio 8:30 hs</h3>
                <p>{plan.refrigerio830}</p>
            </div>

            <div className="meal-view">
                <h3>Entrenamiento</h3>
                <p>{plan.entrenamiento}</p>
            </div>

            <div className="meal-view">
                <h3>Desayuno 12:00 hs</h3>
                <p>{plan.desayuno}</p>
            </div>

            <div className="meal-view">
                <h3>Comida 15:00 hs</h3>
                <p>{plan.comida}</p>
            </div>

            <div className="meal-view">
                <h3>Refrigerio 18:00 hs</h3>
                <p>{plan.refrigerio1800}</p>
            </div>

            <div className="meal-view">
                <h3>Cena 21:00 hs</h3>
                <p>{plan.cena}</p>
            </div>

            <div className="meal-view">
                <h3>Dulces Permitidos</h3>
                <p>{plan.dulcesPermitidos}</p>
            </div>

            <h3>Complementos</h3>
            <div className="complements-view">
                <div className="complement-view">
                    <strong>{plan.complemento1?.nombre}</strong>: {plan.complemento1?.dosis}
                </div>
                <div className="complement-view">
                    <strong>{plan.complemento2?.nombre}</strong>: {plan.complemento2?.dosis}
                </div>
                <div className="complement-view">
                    <strong>{plan.complemento3?.nombre}</strong>: {plan.complemento3?.dosis}
                </div>
            </div>

            <button onClick={() => window.location.href = "/index.html"}>Volver a Editar</button>
        </div>
    );
};

export default PlanView;
