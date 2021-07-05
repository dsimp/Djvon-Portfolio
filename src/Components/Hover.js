import React, { useState } from "react";
import Cbadge from "./Images/CSSbadge.jpeg.png";
import Rbadge from "./Images/Reactbadge.jpeg.png";
import Jbadge from "./Images/Javascriptbadge.jpeg.png";

const Hover = () => {
  return (
    <div>
      <h1>What Does LinkedIn Have to Say About My Skills</h1>
      <ul>
        <li>
          <h3>Javascript</h3>
          <img id="javascript-badge" src={Jbadge} alt="" />
        </li>
        <li>
          <h3>React</h3>
          <img id="react-badge" src={Rbadge} alt="" />
        </li>
        <li>
          <h3>CSS</h3>
          <img id="CSS-badge" src={Cbadge} alt="" />
        </li>
      </ul>
    </div>
  );
};

export default Hover;
