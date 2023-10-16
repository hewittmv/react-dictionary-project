import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import Letters from "./Letters";

function App() {
  return (
    <div className="App">
      <div class="container" id="container-zero">
        <header className="header">
          <div className="Nascent">
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
        </header>
        <Letters />
        <div id="container-1">
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

        <footer className="footer">
          <div className="cube-d">
            {" "}
            D<span className="number"> 2</span>{" "}
          </div>
          <div className="Dream">
            <span className="word-dream">
              <strong>Dream </strong>
            </span>
            <span className="partOfSpeech-Dream">Noun</span> <br />
            <span className="dream-definition">
              <span className="speech-marks">"</span>
              Thoughts, images, sensations <br />
              that occur during sleep
              <span className="speech-marks">"</span>
            </span>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
