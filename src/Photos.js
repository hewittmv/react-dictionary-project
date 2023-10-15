import React from "react";
import "./Photos.css";

export default function Photos() {
  return (
    <div className="images">
      <div className="image-one">
        <div className="cube w">
          {" "}
          <span className="letter-w">W</span>
          <span className="number"> 4</span>{" "}
        </div>
      </div>
      <div className="image-two">
        <div className="cube o">
          {" "}
          <span className="letter-o">O</span>
          <span className="number"> 1</span>{" "}
        </div>
      </div>
      <div className="image-three">
        <div className="cube r">
          {" "}
          <span className="letter-r">R</span>
          <span className="number"> 1</span>{" "}
        </div>
      </div>
      <div className="image-four">
        <div className="cube d">
          {" "}
          <span className="letter-d">D</span>
          <span className="number"> 2</span>{" "}
        </div>
      </div>
    </div>
  );
}
