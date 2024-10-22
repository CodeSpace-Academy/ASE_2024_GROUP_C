import RecipeCards from './RecipeCards';
import SkeletonGrid from './SkeletonMain';

// This is now a server component
const RecipeGrid = async () => {
  
  // Fetch recipes directly from the server
  const response = await fetch('https://dummyjson.com/recipes',{cache:'no-store'});
  const data = await response.json();
  
  // Assuming data.recipes contains an array of recipes
  const recipes = data.recipes;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {recipes.map((recipe) => (
        <RecipeCards key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeGrid;

