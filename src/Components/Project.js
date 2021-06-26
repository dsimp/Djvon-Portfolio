import React, { useState } from "react";

const Project = () => {
  const [gone, setGone] = useState("go");
  const [got, setLive] = useState("lid1");
  const [git, setGit] = useState("lid2");

  const nice = () => {
    setGone("gift");
    setLive("live");
    setGit("github");
  };

  return (
    <div className="project-div">
      <h1 onMouseEnter={() => nice()}>Project</h1>
      <img
        src="https://media.giphy.com/media/DahK8I5UbqwOTE9mVw/giphy.gif"
        alt="gif of app"
        className={gone}
      />
      <a href="https://spirit-tail-1-dsimp.vercel.app/" className={got}>
        <h2>Live</h2>
      </a>
      <a href="https://github.com/dsimp/SpiritTail-1" className={git}>
        <h2>Github</h2>
      </a>
    </div>
  );
};

export default Project;
