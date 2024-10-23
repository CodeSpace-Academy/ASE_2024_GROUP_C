"use client"
import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard';

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const response = await fetch('/api/recipe'); 
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
        <RecipeCard key={recipe._id} recipe={recipe} /> // Use _id if recipes are fetched from MongoDB
      ))}
    </div>
  );
};

export default RecipeGrid;
