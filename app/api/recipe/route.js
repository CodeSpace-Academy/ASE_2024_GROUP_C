const fetchRecipes = async () => {
  try {
    const res = await fetch("https://dummyjson.com/recipes", {cache : 'force-cache'});
    if (!res.ok) {
      throw new Error("Fetch Products Failed");
    }
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Failed to Fetch Data:", error)
  }
};

export default fetchRecipes;
