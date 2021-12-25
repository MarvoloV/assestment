import { useEffect, useState } from 'react';
import getProducts from '../helpers/getProducts';

const fetchProduct = (id = '') => {
  // inicializamos el estado
  const [products, setProducts] = useState({
    data: [],
    loading: true,
  });
  useEffect(() => {
    getProducts(id).then((product) => {
      setProducts({
        data: product,
        loading: false,
      });
    });
  }, []);
  return products;
};

export default fetchProduct;
