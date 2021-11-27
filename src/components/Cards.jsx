import React from "react";
import '../styles/PopularProducts.scss';
const Cards = () => {
  return (
    <div class="product-card">
      <img
        src="../../assets/headphones/cat-headphone.jpg"
        alt="Headphones cat"
        class="product-card__img"
      />
      <p class="product-card__name">Wireless cat headphones</p>
      <div class="product-card__price-buy">
        <p class="product-price">$280</p>
        <div class="product-buy">
          <i class="bi bi-cart3 product-icon-buy"></i>
        </div>
      </div>
    </div>
  );
};

export {Cards};