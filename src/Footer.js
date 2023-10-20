import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="d-flex w-100">
      <div className="Dream d-flex justify-content-center align-items-center w-100">
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
        <div className="dream-definition d-flex align-items-center">
          "Thoughts, images, sensations that occur during sleep"
        </div>
      </div>
    </footer>
  );
}
