import React, { useState } from "react";

const Slideshow = () => {
  <div className="slider">
    <div className="slides">
      <input type="radio" name="radio-btn" id="radio1" />
      <input type="radio" name="radio-btn" id="radio2" />
      <input type="radio" name="radio-btn" id="radio3" />
      <div className="slide first">
        <img />
      </div>
      <div className="slide ">
        <img />
      </div>
      <div className="slide ">
        <img />
      </div>
      <div className="navigation-auto">
        <div class="auto-btn1"></div>
        <div class="auto-btn2"></div>
        <div class="auto-btn3"></div>
      </div>
    </div>

    <div className="navigation-manual">
      <label for="radio1" class="manual-btn"></label>
      <label for="radio2" class="manual-btn"></label>
      <label for="radio3" class="manual-btn"></label>
    </div>
  </div>;
};
