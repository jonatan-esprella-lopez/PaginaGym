import React, { useState } from 'react';
import "../../../styles/Nutrition/Ev1/Formulario-Rufier.css"
import TestRuffier from '../../../pages/evaluations/test/Test-ruffier';
import TestLagartijas from '../../../pages/evaluations/test/Test-Lagartijas';
import TestSharkDrills from '../../../pages/evaluations/test/Test-shark-drills';
import TestEscalon from "../../../pages/evaluations/test/Test-escalon";
import TestHrmax from '../../../pages/evaluations/test/Test-Hrmax';

function UserDataForm({ userData, onUserDataChange }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onUserDataChange({
      ...userData,
      [name]: value
    });
  };



  return (
    <div className="user-data-form">
      <TestHrmax/>
      <TestEscalon/>
      <TestRuffier/>
      <TestLagartijas/> 
      <TestSharkDrills/>
      <div className="personal-data">
        <h3>Datos Personales</h3>
        <label>Nombre Completo</label>
        <input type="text" name="name" value={userData.name} onChange={handleChange} />
        <label>CI</label>
        <input type="text" name="ci" value={userData.ci} onChange={handleChange} />
        <label>Celular</label>
        <input type="text" name="phone" value={userData.phone} onChange={handleChange} />
        <label>Género</label>
        <input type="text" name="gender" value={userData.gender} onChange={handleChange} />
        <label>Edad</label>
        <input type="text" name="age" value={userData.age} onChange={handleChange} />
      </div>
      <div className="membership-data">
        <h3>Membresía</h3>
        <label>Plan</label>
        <input type="text" name="plan" value={userData.plan} onChange={handleChange} />
        <label>Descuento</label>
        <input type="text" name="discount" value={userData.discount} onChange={handleChange} />
      </div>
      <div className="general-data">
        <h3>Datos Generales</h3>
        <label>Estatura</label>
        <input type="text" name="height" value={userData.height} onChange={handleChange} />
        <label>Peso</label>
        <input type="text" name="weight" value={userData.weight} onChange={handleChange} />
        <label>IMC</label>
        <input type="text" name="bmi" value={userData.bmi} onChange={handleChange} disabled />
        <label>% de Grasa</label>
        <input type="text" name="fatPercentage" value={userData.fatPercentage} onChange={handleChange} />
        <label>Objetivo</label>
        <input type="text" name="goal" value={userData.goal} onChange={handleChange} />
      </div>
    </div>
  );
}

export default UserDataForm;
