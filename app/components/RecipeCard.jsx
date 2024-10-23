// app/components/RecipeCard.jsx (rename from RecipeCards.jsx)
import React from 'react';
import Link from 'next/link';

const RecipeCard = ({ recipe }) => {
  return (
    <Link href={`/recipes/${recipe._id}`}>
      <div  className="bg-white shadow-md rounded-lg overflow-hidden">
        <img src={recipe.images[0]} alt={recipe.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-bold text-gray-800">{recipe.title}</h2>
          <p className="text-gray-600 mt-2">Prep time: {recipe.prep} mins</p>
          <p className="text-gray-600">Cook time: {recipe.cook} mins</p>

        
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-center">
              <span className="text-yellow-500">★</span>
              <span className="ml-2 text-gray-800">{recipe.rating}</span>
            </div>
            <div className="text-gray-600">
              Servings: {recipe.servings}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RecipeCard;