import React from "react";
import "./Photos.css";

export default function Photos() {
  return (
    <div className="images">
      <div className="image-one">
        <div className="cube w">
          {" "}
          W<span className="number"> 4</span>{" "}
        </div>
      </div>
      <div className="image-two">
        <div className="cube o">
          {" "}
          O<span className="number"> 1</span>{" "}
        </div>
      </div>
      <div className="image-three">
        <div className="cube r">
          {" "}
          R<span className="number"> 1</span>{" "}
        </div>
      </div>
      <div className="image-four">
        <div className="cube d">
          {" "}
          D<span className="number"> 2</span>{" "}
        </div>
      </div>
    </div>
  );
}
