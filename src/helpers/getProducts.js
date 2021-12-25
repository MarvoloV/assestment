const getProducts = async (id = '') => {
  const url = `https://fakestoreapi.com/products/${id}`;
  const response = await fetch(url);
  const products = await response.json();
  return products;
};
export default getProducts;
