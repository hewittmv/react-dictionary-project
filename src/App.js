import logo from "./logo.svg";
import "./App.css";
import Search from "./Search";
import Header from "./Header";
import Footer from "./Footer";

function App() {
  return (
    <div className="App">
      <div className="container d-flex">
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
        <Footer />
      </div>
    </div>
  );
}

export default App;
