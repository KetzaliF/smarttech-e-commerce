import React from "react";
import '../styles/Deals.scss'
const Deals = () => {
  return (
    <section class="deals">
      <div class="deals__container">
        <img
          class="deals__img"
          src="../assets/mockup-deal.png"
          alt="Huawei Matebook x pro"
        />
        <div class="deals__info">
          <h2 class="deals__info-title">Deal hot of the day</h2>
          <p class="deals__info-time">
            Ends in <span>0</span> d <span>: 16</span> h <span>: 53</span> min{" "}
            <span>: 38</span> s
          </p>
          <p class="deals__info-product-name">
            Huawei MateBook X Pro 11th Gen Intel i7
          </p>
          <div class="deals__info-price">
            <p class="price-deal">$31,999</p>
            <p class="price-before">$44,999</p>
          </div>
          <button class="btn-primary btn-deals">See product</button>
        </div>
      </div>
    </section>
  );
};

export {Deals};
