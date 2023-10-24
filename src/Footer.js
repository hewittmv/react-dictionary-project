import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="Dream-wrapper">
      <div className="cube-d">
        {" "}
        D<span className="dream-number"> 2</span>{" "}
      </div>
      <div className="dream-noun">
        <span className="word-dream">
          <strong>Dream </strong>
        </span>{" "}
        <span className="partOfSpeech-dream">Noun</span>
      </div>
      <div className="dream-definition d-flex align-items-center text-center">
        "Thoughts, images, sensations that occur during sleep"
      </div>
    </div>
  );
}
