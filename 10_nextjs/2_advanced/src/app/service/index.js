export const getRecipe = async (id) => {
  const res = await fetch(`https://dummyjson.com/recipes/${id}`);

  return res.json();
};

// api isteğini atan fonk
export const getRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes");

  return res.json();
};
