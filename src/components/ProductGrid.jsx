import React from 'react';
import fetchProduct from '../hooks/fetchProduct';
import ProductCard from './ProductCard';
import './ProductGrid.css';

const ProductGrid = () => {
  const { data, loading } = fetchProduct();
  return (
    <div className="container">
      <hr />
      <h1> Products</h1>
      {loading && (
        <p className="animate__animated animate__flash animate__slower loading-product">
          Loading...
        </p>
      )}
      <div className="product-grid">
        {data.map((product) => {
          const { id, title, image } = product;
          return <ProductCard key={id} title={title} image={image} id={id} />;
        })}
      </div>
    </div>
  );
};

export default ProductGrid;
