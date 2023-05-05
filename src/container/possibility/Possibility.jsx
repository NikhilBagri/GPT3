import React from "react";
import "./possibility.css";
import PossibilityImage from "../../assets/possibility.png";

const Possibility = () => {
  return (
    <div className="gpt3__possibility section__padding" id="possibility">
      <div className="gpt3__possibility-image">
        <img src={PossibilityImage} alt="possibility" />
      </div>
      <div className="gpt3__possibility-content">
        <h4>Request Early Access to get Started</h4>
        <h1 className="gradient__text">
          The possibilities are beyond our imaginations
        </h1>
        <p>GPT-3 include improved efficiency, enhanced creativity, and increased accuracy, while the drawbacks include potential bias, privacy, and security concerns, and high cost.</p>
        <h4>Request Early Access to Get Started</h4>
      </div>
    </div>
  );
};

export default Possibility;
