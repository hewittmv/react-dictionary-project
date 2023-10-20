import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search(props) {
  let [keyword, SetKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [results1, setResults1] = useState(null);
  let [PhotoData, setPhotoData] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handleAudioResponse(response) {
    setResults1(response.data[0]);
  }
  function handlePhotoResponse(response) {
    setPhotoData(response.data);
  }

  function Search() {
    let apiKey = "o00a45f3c7757cta20b5ccabe4f8ba48";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let audioUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(audioUrl).then(handleAudioResponse);
    let photoUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${apiKey}`;
    axios.get(photoUrl).then(handlePhotoResponse);
  }
  function handleKeywordChange(event) {
    SetKeyword(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }
  function Load() {
    Search();
  }
  if (results) {
    return (
      <div className="container Search">
        <div className="row">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-9 g-2">
                <input
                  type="Search"
                  onChange={handleKeywordChange}
                  className="input"
                  id="DictionaryWordSearch"
                  placeholder="Search Dictionary"
                />
                <label htmlFor="DictionaryWordSearch"></label>
              </div>
              <div className="col-3 g-2">
                <input
                  type="submit"
                  id="searchInDictionary"
                  value="Search"
                  className="search-button"
                />
              </div>
            </div>
          </form>
        </div>

        <Results results={results} results1={results1} photoData={PhotoData} />
      </div>
    );
  } else {
    Load();
  }
}
