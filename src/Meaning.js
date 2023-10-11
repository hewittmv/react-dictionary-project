import React from "react";
import Synonym from "./Synonym";
import Example from "./Example";
import "./Meaning.css";

export default function Meaning(props) {
  if (props.meaning) {
    return (
      <div className="meaning">
        {props.meaning.map(function (meaning, index) {
          if (index < 5) {
            return (
              <section>
                <div key={index}>
                  <h2>{meaning.partOfSpeech}</h2>
                  <p>
                    Definition: {meaning.definition} <br />
                    <Example example={meaning.example} />
                    <Synonym synonym={meaning.synonyms} />
                  </p>
                </div>
              </section>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}
