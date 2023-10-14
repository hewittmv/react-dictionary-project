import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import Letters from "./Letters";

function App() {
  return (
    <div className="App">
      <div class="level-1">
        <Letters />
        <div id="container-1">
          <main>
            <Search defaultKeyword="autumn" />
          </main>
        </div>
      </div>{" "}
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
