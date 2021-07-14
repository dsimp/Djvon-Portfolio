import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Navigation = () => {
  return (
    <nav className="headnav">
      <ul className="navyUL">
        <li>
          <a href="https://github.com/dsimp">Djvon</a>
        </li>
        <li>
          {" "}
          <a href="www.linkedin.com/in/djvon-simpson-9341a186">
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
      </ul>
    </nav>
  );
};

export default Navigation;
