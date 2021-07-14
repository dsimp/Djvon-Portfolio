import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { GrLinkedin } from "react-icons/gr";

const Sidenav = () => {
  const [a, setA] = useState("");

  document.onclick = (e) => {
    if (e.target.id !== "sidebar" && e.target.id !== "toggle") {
      setA("");
    }
  };

  const changer = () => {
    if (a === "") {
      setA("active");
    } else {
      setA("");
    }
  };
  return (
    <nav id="sidenav">
      <button
        type="button"
        id="toggle"
        className={a}
        onClick={changer}
      ></button>
      <div id="sidebar" className={a}>
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
      </div>
    </nav>
  );
};
export default Sidenav;
