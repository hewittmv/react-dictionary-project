import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import Header from "./Header";

function App() {
  return (
    <div className="App">
      <div className="container d-flex justify-content-center">
        <Header />
        <div className="container" id="container-1">
          <main>
            <Search defaultKeyword="firework" />
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
