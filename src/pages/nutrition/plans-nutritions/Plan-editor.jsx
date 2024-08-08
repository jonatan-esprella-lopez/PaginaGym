import React, { useState } from 'react';
import './PlanEditor.css';

const PlanEditor = () => {
    const [plan, setPlan] = useState({
        refrigerio830: '',
        entrenamiento: '',
        desayuno: '',
        comida: '',
        refrigerio1800: '',
        cena: '',
        dulcesPermitidos: '',
        complemento1: { nombre: '', dosis: '' },
        complemento2: { nombre: '', dosis: '' },
        complemento3: { nombre: '', dosis: '' },
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setPlan({
            ...plan,
            [name]: value
        });
    };

    const handleComplementChange = (index, key, value) => {
        setPlan(prevPlan => {
            const newComplements = { ...prevPlan };
            newComplements[`complemento${index}`] = {
                ...newComplements[`complemento${index}`],
                [key]: value
            };
            return newComplements;
        });
    };

    const handleSubmit = () => {
        // Guarda los datos en el almacenamiento local para pasarlos a la siguiente página
        localStorage.setItem('dietPlan', JSON.stringify(plan));
        window.location.href = "/PlanView"; // Cambia esta URL según tu configuración
    };

    return (
        <div className="plan-editor">
            <h2>Editar Plan de Dieta y Complementos</h2>

            <div className="meal">
                <h3>Refrigerio 8:30 hs</h3>
                <input 
                    type="text" 
                    name="refrigerio830" 
                    value={plan.refrigerio830} 
                    onChange={handleInputChange} 
                    placeholder="Ej: Cereal (Special K) con leche descremada y deslactosada"
                />
            </div>

            <div className="meal">
                <h3>Entrenamiento</h3>
                <input 
                    type="text" 
                    name="entrenamiento" 
                    value={plan.entrenamiento} 
                    onChange={handleInputChange} 
                    placeholder="Ej: En el gimnasio de 9:00 a 10:30 hs"
                />
            </div>

            <div className="meal">
                <h3>Desayuno 12:00 hs</h3>
                <textarea 
                    name="desayuno" 
                    value={plan.desayuno} 
                    onChange={handleInputChange} 
                    placeholder="Ej: Un sándwich de jamón y queso o de atún o de pollo o de huevo..."
                />
            </div>

            <div className="meal">
                <h3>Comida 15:00 hs</h3>
                <textarea 
                    name="comida" 
                    value={plan.comida} 
                    onChange={handleInputChange} 
                    placeholder="Ej: Un plato de sopa, pechuga de pollo asada, una taza de arroz..."
                />
            </div>

            <div className="meal">
                <h3>Refrigerio 18:00 hs</h3>
                <textarea 
                    name="refrigerio1800" 
                    value={plan.refrigerio1800} 
                    onChange={handleInputChange} 
                    placeholder="Ej: 3 galletas integrales, licuado con proteína..."
                />
            </div>

            <div className="meal">
                <h3>Cena 21:00 hs</h3>
                <textarea 
                    name="cena" 
                    value={plan.cena} 
                    onChange={handleInputChange} 
                    placeholder="Ej: Un sándwich de jamón y queso, o ensalada de atún..."
                />
            </div>

            <div className="meal">
                <h3>Dulces Permitidos</h3>
                <textarea 
                    name="dulcesPermitidos" 
                    value={plan.dulcesPermitidos} 
                    onChange={handleInputChange} 
                    placeholder="Ej: Chicles Trident, otros dulces light (sin azúcar)..."
                />
            </div>

            <h3>Complementos</h3>
            <div className="complements">
                <div className="complement">
                    <input 
                        type="text" 
                        placeholder="Nombre del complemento" 
                        value={plan.complemento1.nombre}
                        onChange={(e) => handleComplementChange(1, 'nombre', e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Dosis" 
                        value={plan.complemento1.dosis}
                        onChange={(e) => handleComplementChange(1, 'dosis', e.target.value)}
                    />
                </div>

                <div className="complement">
                    <input 
                        type="text" 
                        placeholder="Nombre del complemento" 
                        value={plan.complemento2.nombre}
                        onChange={(e) => handleComplementChange(2, 'nombre', e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Dosis" 
                        value={plan.complemento2.dosis}
                        onChange={(e) => handleComplementChange(2, 'dosis', e.target.value)}
                    />
                </div>

                <div className="complement">
                    <input 
                        type="text" 
                        placeholder="Nombre del complemento" 
                        value={plan.complemento3.nombre}
                        onChange={(e) => handleComplementChange(3, 'nombre', e.target.value)}
                    />
                    <input 
                        type="text" 
                        placeholder="Dosis" 
                        value={plan.complemento3.dosis}
                        onChange={(e) => handleComplementChange(3, 'dosis', e.target.value)}
                    />
                </div>
            </div>

            <button onClick={handleSubmit}>Guardar y Ver Plan</button>
        </div>
    );
};

export default PlanEditor;
