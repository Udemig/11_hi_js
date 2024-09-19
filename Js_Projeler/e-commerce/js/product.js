export const fetchProducts = async () => {
  try {
    const response = await fetch("db.json");
    const products = await response.json();
    console.log(products);
  } catch (error) {
    console.log(`Hata !! ${error}`);
  }
};
