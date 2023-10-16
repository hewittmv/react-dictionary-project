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
      </div>
    </div>
  );
}

export default App;
