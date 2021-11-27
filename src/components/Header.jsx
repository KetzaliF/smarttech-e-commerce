import React from "react";
import "../styles/Header.scss";
import { Menu } from "./Menu";

import Logo from '@assets/icons/icons-general/logo-white.png';
import ShoppingCart from '@assets/icons/icons-general/cart-icon.svg'

const Header = () => {
  return (
    <nav>
      <img src="" alt="menu" className="menu" />
      <div className="navbar-left">
        <img src={Logo} alt="logo" className="nav-logo" />
        <ul>
          <li>
            <a href="/">All</a>
          </li>
          <li>
            <a href="/">Smarttech Innovation</a>
          </li>
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Contact Us </a>
          </li>
        </ul>
      </div>
      <div className="navbar-right">
        <ul>
          <li className="navbar-email" >
            dante@example.com
          </li>
          <li
            className="navbar-shopping-cart"
          >
            <img src={ShoppingCart} alt="shopping cart" />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
