import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";
import "./Sidenav.css";

const Sidenav = () => {
  return (
    <div className="sidenav">
      <div id="toggle"></div>
      <div id="sidebar">
        <li>
          <a href="https://github.com/dsimp">Djvon</a>
        </li>
        <li>
          {" "}
          <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">
            <GrLinkedin />
          </a>
        </li>
        <li>
          {" "}
          <a href="https://github.com/dsimp">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href="#connect">Contact</a>
        </li>
        <li>
          {" "}
          <a href="#project">Project</a>
        </li>
        <li>
          <a href="#bio"> Bio</a>
        </li>
      </div>
    </div>
  );
};
export default Sidenav;
