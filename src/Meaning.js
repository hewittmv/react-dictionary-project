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
              <div key={index}>
                <h2 className="text-capitalize meaning-partOfSpeech">
                  {meaning.partOfSpeech}
                </h2>
                <div className="definition-example-synonym">
                  <em>Definition:</em> {meaning.definition} <br />
                  <Example example={meaning.example} />
                  <Synonym synonym={meaning.synonyms} />
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}
