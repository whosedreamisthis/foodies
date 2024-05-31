import classes from './meals-grid.module.css';

export default function MealsGrid({ meals }) {
  console.log(meals);
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <mealItem {...meal}></mealItem>
        </li>
      ))}
    </ul>
  );
}
