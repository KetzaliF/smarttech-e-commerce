import React from "react";
import {Cards} from '../components/Cards';
const PopularContainer = () => {
  return (
    <section class="popular-products">
      <h2 class="subtitle popular-products__title">Popular Products</h2>
      <div class="popular-products__container">
        <Cards />
      </div>
    </section>
  );
};

export { PopularContainer };
