import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
  let [keyword, SetKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [results1, setResults1] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handleAudioResponse(response) {
    setResults1(response.data[0]);
  }

  function Search() {
    let apiKey = "o00a45f3c7757cta20b5ccabe4f8ba48";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let audioUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(audioUrl).then(handleAudioResponse);
  }
  function handleKeywordChange(event) {
    SetKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function Load() {
    setLoaded(true);
    Search();
  }
  if (loaded) {
    return (
      <div className="Search">
        <div className="row">
          <form onSubmit={handleSubmit}></form>
          <div className="col-9">
            <input
              type="Search"
              autoFocus="true"
              onChange={handleKeywordChange}
              className="input"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Look It Up" className="search-button" />
          </div>
        </div>

        <Results results={results} results1={results1} />
      </div>
    );
  } else {
    Load();
  }
}
