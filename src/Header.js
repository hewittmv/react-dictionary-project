import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <div className="Nascent-wrapper">
      <div className="cube-n">
        {" "}
        N<span className="nascent-number"> 1</span>{" "}
      </div>
      <div className="nascent-adj">
        <span className="word-nascent">
          <strong>Nascent </strong>
        </span>{" "}
        <span className="partOfSpeech-nascent">Adjective</span>
      </div>
      <div className="nascent-definition d-flex align-items-center text-center">
        "Just coming into existence & beginning to display future potential"
      </div>
    </div>
  );
}
