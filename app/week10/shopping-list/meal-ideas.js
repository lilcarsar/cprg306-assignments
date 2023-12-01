"use client";

import { useState, useEffect } from 'react';

async function fetchMealIdeas(ingredient) {
  
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
    const data = await response.json();
    return data.meals;
   
}


export default function MealIdeas({ ingredient }) {
  const [meals, setMeals] = useState([]);

  async function loadMealIdeas() {
    const mealIdeas = await fetchMealIdeas(ingredient);
    setMeals(mealIdeas);
  }

  useEffect(() => {
    loadMealIdeas();
  }, [ingredient]);

  return (
    <div>
      <h2>Meal Ideas for {ingredient}</h2>
      <div>
        <ul>
          {meals &&
            meals.map((meal) => (
              <p key={meal.strMeal} value={meal.strMeal}>
                {meal.strMeal}
              </p>
            ))}
        </ul>
      </div>
    </div>
  );
}
