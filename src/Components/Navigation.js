import React from "react";

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
              <a href="#linkedin">LinkedIn</a>
            </li>
            <li>
              {" "}
              <a href="#github">Github</a>
            </li>
            <li>
              {" "}
              <a href="#project">Project</a>
            </li>
            <li>
              {" "}
              <a href="#bio">Bio</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
