import React from "react";

import Miguel from '../assets/assets-about/miguel-team.jpg';
import Twitter from '../assets/icons/icons-about/twitter.png';
import Instagram from '../assets/icons/icons-about/instagram.png';
import Linkedin from '../assets/icons/icons-about/linkedin.png';
import GitHub from '../assets/icons/icons-about/github.png';

import '@styles/OurTeam.scss';
const TeamMember = () => {
  return (
    <div className="team__container-card">
      <div className="team__container-bg"></div>
      <img
        className="team__container-img"
        src={Miguel}
        alt="Picture Miguel"
      />
      <div className="team__container-info">
        <p className="name-team">Miguel Bohorquez</p>
        <div className="job-team">Web Developer</div>
        <p className="desc-team">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
          laboriosam ad deleniti. <br /> Lorem ipsum dolor sit amet consectetur
          adipisicing elit.
        </p>
      </div>
      <div className="team__container-social">
        <a href="https://www.instagram.com/danteblk2099/" target="_blank">
          <img
            className="icon-social-media"
            src={Instagram}
            alt="instagram icon"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/miguel-angel-bohorquez-820b40202/"
          target="_blank"
        >
          <img
            className="icon-social-media"
            src={Linkedin}
            alt="linkedin icon"
          />
        </a>

        <a href="https://github.com/AngelBLK" target="_blank">
          <img
            className="icon-social-media"
            src={GitHub}
            alt="github icon"
          />
        </a>

        <a href="https://twitter.com/DanteBLK" target="_blank">
          <img
            className="icon-social-media"
            src={Twitter}
            alt="twitter icon"
          />
        </a>
      </div>
    </div>
  );
};

export { TeamMember };
