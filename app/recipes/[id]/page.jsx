
"use client"
import { useEffect, useState } from 'react';
import fetchSingleRecipe from '../../api/recipe/[id]/route';

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

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold">{recipe?.name}</h1>
      <p className="mt-4">{recipe?.instructions?.join(", ")}</p>
    </div>
  );
};

export default RecipeDetail;