import React from 'react';
import '../styles/Categories.scss';
import {CategorieItem} from '../components/CategorieItem';
const Categories = () => {
  return (
    <section className="categories">
      <h2 class="subtitle categories__title">Categories</h2>
      <div class="categories__container">
        <CategorieItem />
      </div>
    </section>
  );
}

export {Categories};