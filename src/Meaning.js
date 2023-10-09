import React from "react";

export default function Meaning(props) {
  console.log(props.meaning);
  return (
    <div className="meaning">
      <h2>{props.meaning.partOfSpeech}</h2>

      <p>
        {props.meaning.definition} <br />
        {props.meaning.example}
      </p>
    </div>
  );
}
