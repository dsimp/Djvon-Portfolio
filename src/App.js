import "./App.css";
import Navigation from "./Components/Navigation";
import Bio from "./Components/Bio";
import Project from "./Components/Project";
import Connect from "./Components/Connect";
import Sidenav from "./Components/Sidenav";

console.log();

function App() {
  return (
    <div className="App">
      <Navigation />

      <Sidenav />

      <div id="container">
        <div id="bio">
          <Bio />
        </div>
        <div id="project">
          <Project />
        </div>
        <Connect />
      </div>
    </div>
  );
}

export default App;
