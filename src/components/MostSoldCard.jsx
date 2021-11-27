import React from "react";
import '../styles/MostSold.scss';

const MostSoldCard = () => {
  return (
    <div className="the-most-sold__card">
      <img className="the-most-sold__card-img" src="../assets/Watch3-Huawei.jpg" />
      <h4 className="the-most-sold__card-title">Huawei Watch 3</h4>
      <p className="the-most-sold__card-desc">Superior Intelligence Experience</p>
    </div>
  );
};

export { MostSoldCard };
