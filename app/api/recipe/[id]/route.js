const fetchSingleRecipe = async (id) => {
    try {
      const res = await fetch(`https://dummyjson.com/recipes/${id}`, {cache : 'force-cache'});
      if (!res.ok) {
        throw new Error("Fetch Product Failed");
      }
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Failed to Fetch Data:", error)
    }
  };
  
  export default fetchSingleRecipe;