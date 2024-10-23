"use client"
import React, { useEffect, useState } from 'react';
import RecipeCard from './RecipeCard'; // Update this import
import SkeletonGrid from './SkeletonMain';

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState(null);

  useEffect(() => {
    const fetchRecipes = async () => {
      console.log('hdbachbdashcb')
      try {
        const response = await fetch('https://dummyjson.com/recipes',{cache:"no-store"});
        const data = await response.json();
        console.log(data)
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching recipes:', error);
      }
    };
    fetchRecipes();
  }, []);

  if (!recipes) {
    return <SkeletonGrid/>
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {recipes.map(recipe => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;
