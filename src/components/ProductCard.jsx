import React, { useState } from 'react';
import Proptypes from 'prop-types';
import { Link } from 'react-router-dom';
import './ProductCard.css';
import Temporizador from './Temporizador';

const ProductCard = ({ title, image, id }) => {
  const generarMinuto = () =>
    // eslint-disable-next-line implicit-arrow-linebreak
    Math.floor(Math.random() * 3 + 1);

  const minutos = generarMinuto(1, 3);
  const hoursMinSecs = { minutes: minutos, seconds: 0 };
  const [isActive, setIsActive] = useState(true);
  return (
    <div className="card animate__animated animate__fadeIn">
      <div className="card-image">
        <img src={image} alt={title} />
      </div>
      <p>{title}</p>
      <div className="card-info">
        <Temporizador hoursMinSecs={hoursMinSecs} setIsActive={setIsActive} />
        {isActive && <Link to={`/detail/${id}`}>Go to detail</Link>}
      </div>
    </div>
  );
};

export default ProductCard;
ProductCard.propTypes = {
  title: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  id: Proptypes.number.isRequired,
};
