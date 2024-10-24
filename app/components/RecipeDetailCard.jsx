"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; 
import fetchSingleRecipe from "../../api/recipe/[id]/route";
import React from 'react';
import RecipeSkeleton from "../../components/RecipeDetailSkeleton";
import RecipeDetailCard from "@/app/components/RecipeDetailCard";


const formatTime = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  return hours > 0 ? `${hours}h ${mins}m` : `${mins}m`;
};

const RecipeDetailCard = ({ params }) => {
  const { id } = params;
  const [recipe, setRecipe] = useState(null);
  const [activeTab, setActiveTab] = useState("ingredients");
  const router = useRouter(); 

  useEffect(() => {
    const getRecipe = async () => {
      const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

      // Delay for 2 seconds
      await delay(4000);
      const data = await fetchSingleRecipe(id);
      if (data) {
        setRecipe(data);
      }
    };
    getRecipe();
  }, [id])};


    

  return (
    <div className="p-6 max-w-6xl mx-auto font-sans">
     
    <button
      onClick={() => router.back()} 
      className="text-gray-600 hover:text-gray-900 mb-4 flex items-center"
    >
      ← Back
    </button>

 
    <div className="grid items-start grid-cols-1 md:grid-cols-2 gap-6">
      <div className="w-full lg:sticky top-0 flex gap-3">
        <img
          src={recipe.image}
          alt={recipe.name}
          className="w-3/4 rounded-lg object-cover"
        />
      </div>

      <div>
        
        <h1 className="text-3xl font-bold mb-2 text-gray-800">
          {recipe.name}
        </h1>


        <p className="text-lg italic text-gray-600 mb-6">
          Discover how to make this delicious {recipe.name}. Perfect for {recipe.mealType || "any occasion"}.
        </p>

        <div className="text-lg text-gray-800 space-y-2">
          <p>
            <strong>Prep Time:</strong> {formatTime(recipe.prepTimeMinutes)}
          </p>
          <p>
            <strong>Cook Time:</strong> {formatTime(recipe.cookTimeMinutes)}
          </p>
          <p>
            <strong>Total Time:</strong> {formatTime(totalTime)}
          </p>
          <p>
            <strong>Servings:</strong> {recipe.servings} servings
          </p>
        </div>

      
        <ul className="grid grid-cols-2 mt-10 border-b-2">
          <li
            className={`text-gray-800 font-semibold text-base text-center py-3 cursor-pointer ${
              activeTab === "ingredients" ? "border-b-2 border-gray-800" : ""
            }`}
            onClick={() => setActiveTab("ingredients")}
          >
            Ingredients
          </li>
          <li
            className={`text-gray-800 font-semibold text-base text-center py-3 cursor-pointer ${
              activeTab === "instructions" ? "border-b-2 border-gray-800" : ""
            }`}
            onClick={() => setActiveTab("instructions")}
          >
            Instructions
          </li>
        </ul>

     
        <div className="mt-6">
          {activeTab === "ingredients" ? (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                {recipe.ingredients.map((ingredient, index) => (
                  <li key={index}>{ingredient}</li>
                ))}
              </ul>
            </div>
          ) : (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <ul className="list-disc pl-6 mt-2 text-gray-700">
                {recipe.instructions.map((instruction, index) => (
                  <li key={index}>{instruction}</li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  </div>
  );


export default RecipeDetailCard;