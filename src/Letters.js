import React from "react";
import "./Letters.css";

export default function Letters() {
  return (
    <div className="Letters">
      <div className="cube-c">
        {" "}
        C<span className="number"> 3</span>{" "}
      </div>
      <div className="cube-t">
        {" "}
        T<span className="number"> 1</span>{" "}
      </div>

      <div className="cube-o">
        {" "}
        O<span className="number"> 1</span>{" "}
      </div>

      <div className="Oracy">
        <span className="word-oracy">
          <strong>Oracy </strong>
        </span>
        <span className="partOfSpeech-oracy">Noun</span> <br />
        <span className="oracy-definition">
          <span className="speech-marks">"</span> The ability to express <br />{" "}
          oneself fluently & grammatically
          <span className="speech-marks">"</span>
        </span>
      </div>

      <div className="cube-n">
        {" "}
        N<span className="number"> 1</span>{" "}
      </div>

      <div className="cube-y">
        {" "}
        Y<span className="number"> 4</span>{" "}
      </div>

      <div className="Yield">
        <span className="word-yield">
          <strong>Yield </strong>
        </span>{" "}
        <br />
        <span className="partOfSpeech-yield">Verb</span> <br />
        <span className="yield-definition">
          <span className="speech-marks">"</span> Provide or
          <br /> produce
          <span className="speech-marks">"</span>
        </span>
      </div>
    </div>
  );
}
