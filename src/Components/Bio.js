import React from "react";
import Djvon from "./Images/IMG_0539.jpeg";

const Bio = () => {
  return (
    <div className="intro-div">
      <h2>Hi, my name is</h2> <h1>Djvon Simpson.</h1>
      <h2>
        My love for the web is tremendous! The impact it has on my life (maybe
        all lives) is astronomical, so much that it inspired me to learn how to
        contribute. Now,
      </h2>
      <h1> I'm a developer!</h1>
      <p>
        Based in Chicago, IL. Since 2018 thanks to Pluralsight, Udemy, Youtube
        and the many resources on Google, I've become profecient in
      </p>
      <img id="smile" src={Djvon} alt=""></img>
      <ul className="skills">
        <li>HTML</li>
        <li>CSS</li>
        <li>Javascript</li>
        <li>jquery</li>
        <li>React</li>
        <li>Redux</li>
        <li>Nodejs</li>
      </ul>
    </div>
  );
};

export default Bio;
