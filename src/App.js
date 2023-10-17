import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center">
        <header>
          <div className="Nascent d-flex  justify-content-center w-100">
            <div className="cube-n mt-2">
              {" "}
              N<span className="nascent-number"> 1</span>{" "}
            </div>
            <div className="nascent-adj">
              <span className="word-nascent">
                <strong>Nascent </strong>
              </span>{" "}
              <span className="partOfSpeech-nascent">Adjective</span>
            </div>
            <div className="nascent-definition d-flex align-items-center">
              "Just coming into existence & beginning to display future
              potential"
            </div>
          </div>
        </header>
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
          <div className="Dream d-flex justify-content-center w-100">
            <div className="cube-d">
              {" "}
              D<span className="dream-number"> 2</span>{" "}
            </div>
            <div className="dream-noun">
              <span className="word-dream">
                <strong>Dream </strong>
              </span>{" "}
              <span className="partOfSpeech-dream">Noun</span>
            </div>
            <div className="dream-definition d-flex align-items-center">
              "Thoughts, images, sensations that occur during sleep"
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
