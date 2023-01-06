import React from "react";

import "../scss/components/hero-frame.scss";

import "@fontsource/bebas-neue";

const HeroFrame = ({ heroName, heroImage }) => {
  return (
    <div className="hero-frame">
      <div className="hero-frame__header">{heroName}</div>
      <div className="hero-frame__info">
        <div className="avatar">
          <img src={heroImage} alt={heroName} />
        </div>
        <div className="info">
          <div className="info-header">
            <div className="title">Village:</div>
            <div className="type">Home</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroFrame;
