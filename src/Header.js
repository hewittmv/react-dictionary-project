import React from "react";
import "./Header.css";

export default function Header() {
  return (
    <header className="w-100 d-flex">
      <div className="Nascent d-flex  justify-content-center w-100">
        <div className="cube-n mt-2">
          {" "}
          N<span className="nascent-number"> 1</span>{" "}
        </div>
        <div className="nascent-adj">
          <span className="word-nascent">
            <strong>Nascent </strong>
          </span>{" "}
          <span className="partOfSpeech-nascent">Adjective</span>
        </div>
        <div className="nascent-definition d-flex align-items-center">
          "Just coming into existence & beginning to display future potential"
        </div>
      </div>
    </header>
  );
}
