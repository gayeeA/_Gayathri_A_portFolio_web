import "./Mainimg.css";
import React from "react";
import IntroImg from "../asserts/intro.jpeg";
const Mainimg = () => {
  return (
    <div className="Hero">
      <img className="intro" src={IntroImg} alt="Intro_image" />
      <div className="mask"></div>
      <div className="content">
        <p>HI! This is my PortFolio website!</p>
      </div>
    </div>
  );
};

export default Mainimg;
