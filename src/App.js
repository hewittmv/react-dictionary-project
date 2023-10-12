import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="cube-d">
        {" "}
        D<span className="number"> 2</span>{" "}
      </div>
      <div className="Dream">
        <span className="word-dream">
          <strong>Dream </strong>
        </span>
        <span className="partOfSpeech-Dream">Noun</span> <br />
        <span className="speech-marks">"</span>{" "}
        <span className="dream-definition">
          Thoughts, images, sensations <br />
          that occur during sleep
        </span>
        <span className="speech-marks">"</span>
      </div>
      <div className="container">
        <main>
          <Search defaultKeyword="autumn" />
        </main>
      </div>
      <footer className="footer">
        <a
          className="github-link"
          href="https://github.com/hewittmv/react-dictionary-project"
          target="_blank"
          rel="noopener noreferrer"
        >
          Open Source Code by VHM
        </a>
        <img src={logo} className="react-logo" width="50px" alt="logo" />
      </footer>
    </div>
  );
}

export default App;
