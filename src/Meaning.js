import React from "react";
import "./Synonym";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h2>{props.meaning.partOfSpeech}</h2>

      <p>
        Definition: {props.meaning.definition} <br />
        Example: {props.meaning.example}
      </p>
    </div>
  );
}
