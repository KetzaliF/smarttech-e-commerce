import React from "react";
import '../styles/SectionInfo.scss';

const InfoItem = () => {
  return (
    <div className="section__card">
      <div className="icons">
        <img
          src="../../assets/icons/transport-icon.png"
          alt="Transport icon"
          className="section__icon"
        />
      </div>

      <div className="section__card-info">
        <p className="section__card-info-title">Quis nostrud</p>
        <p className="section__card-info-desc">
          Voluptatem quia voluptas aspernatur aut odit aut fugit.
        </p>
      </div>
    </div>
  );
}

export { InfoItem };
