import React, { useState } from "react";
import "./Search.css";

export default function Search() {
  let [keyword, SetKeyword] = useState("");

  function Search(event) {
    event.preventDefault();
    alert(`Searching for ${keyword}`);
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
    </div>
  );
}
