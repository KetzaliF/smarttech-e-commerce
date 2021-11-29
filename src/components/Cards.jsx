import React, {useContext} from "react";
import { AppContext } from "../context/AppContext";
import '../styles/PopularProducts.scss';

import addToCartImage from '../assets/icons/icons-general/cart-icon.svg';
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
          <img src={addToCartImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export { Cards };