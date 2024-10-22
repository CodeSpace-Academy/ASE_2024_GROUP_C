"use client"
import { useEffect, useState } from 'react';
import fetchSingleRecipe from '../../api/recipe/[id]/route'; 


const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

const RecipeDetail = ({ params }) => {
  const { id } = params;
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const getRecipe = async () => {
      const data = await fetchSingleRecipe(id);
      if (data) {
        setRecipe(data);
      }
    };
    getRecipe();
  }, [id]);


  if (!recipe) {
    return null;
  }

 
  const totalTime = recipe.prepTimeMinutes + recipe.cookTimeMinutes;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">{recipe.name}</h1>
      
      <img src={recipe.image} alt={recipe.name} className="w-full h-auto mb-4" />
      
      <div className="flex flex-col gap-2 text-lg text-gray-800">
        <p><strong>Prep Time:</strong> {formatTime(recipe.prepTimeMinutes)}</p>
        <p><strong>Cook Time:</strong> {formatTime(recipe.cookTimeMinutes)}</p>
        <p><strong>Total Time:</strong> {formatTime(totalTime)}</p>
        <p><strong>Servings:</strong> {recipe.servings} servings</p>
      </div>

     
      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Ingredients:</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>


      <div className="mt-6">
        <h2 className="text-2xl font-semibold">Instructions:</h2>
        <ul className="list-disc pl-6 mt-2 text-gray-700">
          {recipe.instructions.map((instruction, index) => (
            <li key={index}>{instruction}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RecipeDetail;
