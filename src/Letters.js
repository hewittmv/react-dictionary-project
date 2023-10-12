import React from "react";
import "./Letters.css";

export default function Letters() {
  return (
    <div className="Letters">
      <div className="cube-d">
        {" "}
        D<span className="number"> 2</span>{" "}
      </div>
      <div className="Dream">
        <span className="word-dream">
          <strong>Dream </strong>
        </span>
        <span className="partOfSpeech-Dream">Noun</span> <br />
        <span className="speech-marks">"</span>{" "}
        <span className="dream-definition">
          Thoughts, images, sensations <br />
          that occur during sleep
        </span>
        <span className="speech-marks">"</span>
      </div>
      <div className="cube-i">
        {" "}
        I<span className="number"> 1</span>{" "}
      </div>
      <div className="cube-i">
        {" "}
        C<span className="number"> 3</span>{" "}
      </div>
    </div>
  );
}
