import React from "react";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Navigation = () => {
  return (
    <header className="heady">
      <nav className="navy">
        <div>
          <h2>Djvon</h2>
        </div>
        <div className="navlist">
          <ul>
            <li>
              <a href="#bio"> Bio</a>
            </li>
            <li>
              {" "}
              <a href="#project">Project</a>
            </li>
            <li>
              {" "}
              <a href="https://github.com/dsimp">
                <FaGithub />
              </a>
            </li>
            <li>
              {" "}
              <a href="https://www.linkedin.com/feed/?trk=guest_homepage-basic_nav-header-signin">
                <GrLinkedin />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
