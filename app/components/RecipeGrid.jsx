"use client"

import React, { useEffect, useState } from 'react';
import RecipeCards from './RecipeCards';

const RecipeGrid = () => {
  const [recipes, setRecipes] = useState([]);

