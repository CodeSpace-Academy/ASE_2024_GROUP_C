"use client"

import React, { useEffect, useState } from 'react';
import RecipeCards from './RecipeCards';

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('https://dummyjson.com/recipes');
        const data = await response.json();
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {recipes.map(recipe => (
        <RecipeCards key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;
