import React from "react";
import Cbadge from "./Images/CSSbadge.jpeg.png";
import Rbadge from "./Images/Reactbadge.jpeg.png";
import Jbadge from "./Images/Javascriptbadge.jpeg.png";
import "./Slideshow.css";

const Slideshow = () => {
  const slider = () => {
    var counter = 1;
    setInterval(function () {
      document.getElementById("r" + counter).defaultChecked = true;
      counter++;
      if (counter > 3) {
        counter = 1;
      }
    }, 5000);
  };

  slider();
  return (
    <div className="slidershow middle">
      <h1>What Does LinkedIn Have to Say About My Skills</h1>
      <div className="slides">
        <input type="radio" name="r" id="r1" defaultChecked />
        <input type="radio" name="r" id="r2" />
        <input type="radio" name="r" id="r3" />

        <div className="slide s1">
          <img src={Cbadge} alt="" />
        </div>
        <div className="slide ">
          <img src={Rbadge} alt="" />
        </div>
        <div className="slide ">
          <img src={Jbadge} alt="" />
        </div>
      </div>
      <div className="navigation">
        <label htmlFor="r1" className="bar"></label>
        <label htmlFor="r2" className="bar"></label>
        <label htmlFor="r3" className="bar"></label>
      </div>
    </div>
  );
};
export default Slideshow;
