import React from "react";
import "./Photos.css";

export default function Photos() {
  return (
    <div className="images">
      <div className="image-one">
        <div class="cube w">
          {" "}
          W<span class="number"> 1</span>{" "}
        </div>
      </div>
      <div className="image-two">
        <div class="cube o">
          {" "}
          O<span class="number"> 1</span>{" "}
        </div>
      </div>
      <div className="image-three">
        <div class="cube r">
          {" "}
          R<span class="number"> 1</span>{" "}
        </div>
      </div>
      <div className="image-four">
        <div class="cube d">
          {" "}
          D<span class="number"> 1</span>{" "}
        </div>
      </div>
    </div>
  );
}
