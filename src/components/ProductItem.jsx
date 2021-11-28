import React, { useContext } from "react";
import { AppContext } from "../context/AppContext";

import "@styles/ProductItem.scss";
import addToCartImage from '../assets/icons/icons-general/cart-icon.svg';

const ProductItem = ({ product }) => {
	const { addToCart } = useContext(AppContext);

	const handleClick = item => {
		addToCart(item);
	}
  return (
    <div className="ProductItem">
      <img src={product.images[1]} alt={product.title} />
      <div className="product-info">
        <div>
          <p>$ {product.price}.00</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)} >
          <img src={addToCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export { ProductItem };
