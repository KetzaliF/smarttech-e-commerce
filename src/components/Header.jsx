import React from 'react';
import '../styles/Header.scss';
import { Menu } from './Menu';

const Header = () => {
	return (
		<nav>
			<img src="../assets/icons/icons-general/logo-white.png" alt="menu" className="menu" />
			<div className="navbar-left">
				<img src="../assets/icons/icons-general/logo-white.png" alt="logo" className="logo" />
				<Menu />
			</div>
			<div className="navbar-right">
				<ul>
					<li className="navbar-email">dante@example.com</li>
					<li className="navbar-shopping-cart">
						<img src="./icons/icon_shopping_cart.svg" alt="shopping cart" />
						<div>2</div>
					</li>
				</ul>
			</div>
		</nav>
	);
}

export default Header;