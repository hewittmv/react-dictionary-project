import React, { useState } from "react";
import "./Search.css";
import axios from "axios";
import Results from "./Results";
import PhoneticAudio from "./PhoneticAudio";

export default function Search() {
  let [keyword, SetKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [phoneticAudio, setPhoneticAudio] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function handleAudioResponse(response) {
    setPhoneticAudio(response.data[0]);
  }

  function Search(event) {
    event.preventDefault();
    let apiKey = "o00a45f3c7757cta20b5ccabe4f8ba48";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
    let audioUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(audioUrl).then(handleAudioResponse);
  }
  function handleKeywordChange(event) {
    SetKeyword(event.target.value);
  }
  return (
    <div className="Search">
      <form onSubmit={Search}>
        <input type="Search" autoFocus="true" onChange={handleKeywordChange} />
        <input type="submit" value="Look It Up" />
      </form>
      <Results results={results} />
      <PhoneticAudio audio={phoneticAudio} />
    </div>
  );
}
