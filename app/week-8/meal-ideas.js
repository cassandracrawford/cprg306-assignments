"use client";

import { useState, useEffect } from "react";

const fetchMealIdeas = async(ingredient) => {
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        return data.meals || [];
    } catch(error) {
        console.error(`Error: ${error}`);
        return [];
    }
}

export default function MealIdeas({ingredient}) {
    const [meals, setMeals]= useState([]);

    const loadMealIdeas = async() => {
        setMeals(await fetchMealIdeas(ingredient));
    }

    useEffect(() => {
        if (ingredient) {
            loadMealIdeas();
        } else {
            setMeals([]);
        }
        }, [ingredient]);

    return(
        <div className="text-white">
            {meals.length === 0 ? 
                (<p>No meal ideas for {ingredient}</p>
                ) : (
                    <div className="flex flex-col">                    
                        <h3 className="text-l font-bold my-2 text-left">Here are some meal ideas for {ingredient}</h3>
                        <ul>
                            {meals.map((meal) => (
                            <li key={meal.idMeal} className="mb-6">
                            <p className="italic mb-2 text-left">{meal.strMeal}</p>
                                <img src={meal.strMealThumb} alt="Meal Picture" className="rounded-lg w-full" />
                            </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    );
}

