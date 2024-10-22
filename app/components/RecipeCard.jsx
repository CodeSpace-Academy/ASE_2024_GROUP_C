// app/components/RecipeCard.jsx (rename from RecipeCards.jsx)
import React from 'react';

const RecipeCard = ({ recipe }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <img src={recipe.image} alt={recipe.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-bold text-gray-800">{recipe.title}</h2>
        <p className="text-gray-600 mt-2">Prep time: {recipe.prepTimeMinutes} mins</p>
        <p className="text-gray-600">Cook time: {recipe.cookTimeMinutes} mins</p>
        <div className="flex items-center mt-2">
          <span className="text-yellow-500">★</span>
          <span className="ml-2 text-gray-800">{recipe.rating}</span>
        </div>
      </div>
    </div>
  );
};

export default RecipeCard;