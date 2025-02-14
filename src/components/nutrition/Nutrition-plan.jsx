import Day from './Day';
import "../../styles/Nutrition/plan.css"
import ShoppingList from './ShoppingList';
import Notes from './Notes';
import { meals, shoppingList, notes } from '../../utils/Data-Nutrition.js';

function MealPlan() {
  return (
    <div className="meal-plan">
      <h1>Programacion semanal</h1>
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
