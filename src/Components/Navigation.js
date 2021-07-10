import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Navigation = () => {
  return (
    <nav>
      <ul>
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
      </ul>
    </nav>
  );
};

export default Navigation;
