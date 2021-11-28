import React from "react";
import '../styles/PopularProducts.scss';

const Cards = () => {
  return (
    <div className="product-card">
      <img
        src="../../assets/headphones/cat-headphone.jpg"
        alt="Headphones cat"
        className="product-card__img"
      />
      <p className="product-card__name">Wireless cat headphones</p>
      <div className="product-card__price-buy">
        <p className="product-price">$280</p>
        <div className="product-buy">
          <i className="bi bi-cart3 product-icon-buy"></i>
        </div>
      </div>
    </div>
  );
};

export { Cards };