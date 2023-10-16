import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center">
        <div className="container" id="container-1">
          <main>
            <Search defaultKeyword="autumn" />
          </main>
          <a
            className="github-link"
            href="https://github.com/hewittmv/react-dictionary-project"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Source Code by VHM
          </a>
          <img src={logo} className="react-logo" width="50px" alt="logo" />
        </div>
        <footer>
          <div className="Dream d-flex">
            <div className="cube-d">
              {" "}
              D<span className="number"> 2</span>{" "}
            </div>
            <span className="word-dream">
              <strong>Dream </strong>
            </span>
            <span className="partOfSpeech-dream">Noun</span> <br />
            <span className="dream-definition">
              <span className="speech-marks">"</span>
              Thoughts, images, sensations <br />
              that occur during sleep
              <span className="speech-marks">"</span>
            </span>
          </div>
          <div className="Nascent d-flex">
            <div className="cube-n">
              {" "}
              N<span className="number"> 1</span>{" "}
            </div>
            <span className="word-nascent">
              <strong>Nascent </strong>
            </span>
            <span className="partOfSpeech-nascent">Adjective</span> <br />
            <span className="nascent-definition">
              <span className="speech-marks">"</span> just coming into existence
              & beginning <br /> to display signs of future potential
              <span className="speech-marks">"</span>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
