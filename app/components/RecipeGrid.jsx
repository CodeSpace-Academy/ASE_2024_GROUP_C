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
