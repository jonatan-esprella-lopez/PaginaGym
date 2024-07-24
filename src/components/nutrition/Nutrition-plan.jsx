import React from 'react';
import Day from './Day';
import ShoppingList from './ShoppingList';
import Notes from './Notes';
import { meals, shoppingList, notes } from './data';

function MealPlan() {
  return (
    <div className="meal-plan">
      <h1>semana de Lorena</h1>
      <h2>PLAN DE COMIDAS</h2>
      <div className="days">
        {meals.map((dayInfo) => (
          <Day key={dayInfo.day} day={dayInfo.day} meal={dayInfo.meal} />
        ))}
      </div>
      <ShoppingList items={shoppingList} />
      <Notes content={notes} />
    </div>
  );
}

export default MealPlan;
