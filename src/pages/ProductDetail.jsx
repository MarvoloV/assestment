import React from 'react';
import { useParams } from 'react-router-dom';
import fetchProduct from '../hooks/fetchProduct';
import '../components/ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const { data, loading } = fetchProduct(id);
  return (
    <>
      <hr />
      <div className="productDetail-container">
        {loading && (
          <p className="animate__animated animate__flash animate__slow loading-product">
            Loading...
          </p>
        )}
        {!loading && (
          <>
            <div className="productDetail-image">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="productDetail-info">
              <h1>{`${data.title} - ${data.category}`}</h1>
              <p>{data.description}</p>
              <span className="info-price">{`$/${data.price}`}</span>
              <span>
                {'Rate '}
                {data.rating.rate}
                {'   '}
                <i className="bi bi-star-fill" />
                {data.rating.count}
                {' reviewers'}
              </span>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
/* {
  "id": 1,
  "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  "price": 109.95,
  "description":
  "category": "men's clothing",
  "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
  "rating": {
    "rate": 3.9,
    "count": 120
  }
} */
