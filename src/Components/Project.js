import React, { useState } from "react";

const Project = () => {
  const [gone, setGone] = useState("go");
  const [got, setLive] = useState("lid1");
  const [git, setGit] = useState("lid2");
  const [pButton, setButton] = useState("pj");

  const nice = () => {
    setGone("gift");
    setLive("live");
    setGit("github");
    setButton("lid1");
  };

  return (
    <div className="project-div">
      <button type="button" className={pButton} onClick={() => nice()}>
        <h1>Project</h1>
      </button>
      <h1 className={got}>SpiritTail</h1>
      <h2 className={got}>
        A nice, easy, and convenient cocktail web app. Provides the user a list
        of spirits to choose from. Displays an option of cocktails with
        ingredient instructions.
      </h2>
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
