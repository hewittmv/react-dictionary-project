import React from "react";
import Meaning from "./Meaning.js";
import PhoneticAudio from "./PhoneticAudio";

export default function results(props) {
  if ((props.results, props.results1)) {
    return (
      <div className="results">
        <h2 className="word mt-3 text-capitalize">{props.results.word}</h2>
        <h3 className="phonetic">
          |{props.results.phonetic} <em>/</em>{" "}
          <PhoneticAudio phonetics={props.results1.phonetics} />
        </h3>

        <Meaning meaning={props.results.meanings} />
      </div>
    );
  } else {
    return null;
  }
}
