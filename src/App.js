import "./App.css";
import Navigation from "./Components/Navigation";
import Bio from "./Components/Bio";
import Project from "./Components/Project";

function App() {
  return (
    <div className="App">
      <Navigation />
      <div id="container">
        <div id="bio">
          <Bio />
        </div>
        <div id="project">
          <Project />
        </div>
      </div>
    </div>
  );
}

export default App;
