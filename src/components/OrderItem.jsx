import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

import '@styles/OrderItem.scss';

import Arrow from "@assets/icons/icons-about/icon-before.svg";
const OrderItem = ({ product }) => {
	const { removeFromCart } = useContext(AppContext);

	const handleRemove = (product) => {
		removeFromCart(product);
	}
	return (
		<div className="OrderItem">
			<figure>
				<img src={product.images[1]} alt={product.title} />
			</figure>
			<p>{product.title}</p>
			<p>$ {product.price}.00</p>
			<img
				src={Arrow}
				alt="close"
				onClick={() => handleRemove(product)}
			/>
		</div>
	);
}

export { OrderItem };
