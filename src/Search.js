import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";

export default function Search() {
  let [keyword, SetKeyword] = useState("");
  let [results, setResults] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    let apiKey = "o00a45f3c7757cta20b5ccabe4f8ba48";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleKeywordChange(event) {
    SetKeyword(event.target.value);
  }
  return (
    <div className="Search">
      Dictionary
      <form onSubmit={Search}>
        <input type="Search" autofocus="true" onChange={handleKeywordChange} />
        <input type="submit" value="Look It Up" />
      </form>
      <Results results={results} />
    </div>
  );
}
