import React from "react";
import "./Example.css";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="example">
        <p>
          <span className="Example">Example:</span> {props.example}
        </p>
      </div>
    );
  } else {
    return null;
  }
}
