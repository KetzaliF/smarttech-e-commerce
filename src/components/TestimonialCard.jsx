import React from "react";

import Banda from '../assets/assets-about/teacher-banda.png';
import Valiz from '../assets/assets-about/teachcer-veliz.png';



const TestimonialCard = () => {
  return (
    <div className="testimonials__grid">
      <div class="testimonials__card">
        <div class="card__user">
          <img
            class="user__img"
            src={Banda}
            alt="teacher Jesús Banda"
          />
          <div class="user__info">
            <h4 class="info__name">Jesús Banda</h4>
            <p class="info__subjects">Network Fundamentals Teacher</p>
          </div>
        </div>

        <p class="testimonials__testimony">
          Ketzali - An honest and very calm girl, she likes to participate in
          class as well as her works and projects are delivered with quality, the
          leader of the group of boys of the markers, her charisma is noticed and
          she looks good feelings.
        </p>
      </div>

      <div class="testimonials__card">
        <div class="card__user">
          <img class="user__img" src={Banda} t="teacher Jesús Banda" />
          <div class="user__info">
            <h4 class="info__name">Jesús Banda</h4>
            <p class="info__subjects">Network Fundamentals Teacher</p>
          </div>
        </div>

        <p class="testimonials__testimony">Bohorquez - Friendly, hard-working and with a spark that is noticed, an intelligent guy who seeks to conclude with his objectives, another student of the markers.</p>
      </div>

      <div class="testimonials__card">
        <div class="card__user">
          <img class="user__img" src={Banda} alt="teacher Jesús Banda" />
          <div class="user__info">
            <h4 class="info__name">Jesús Banda</h4>
            <p class="info__subjects">Network Fundamentals Teacher</p>
          </div>
        </div>

        <p class="testimonials__testimony">Jesús - The student of the markers, an applied and intelligent boy in his work, if he couldn't do something he would seek to solve his problem, friendly and "calm".</p>
      </div>

    </div>
  );
};

export { TestimonialCard };
