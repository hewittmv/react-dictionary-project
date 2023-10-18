import React from "react";
import "./Synonym.css";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="synonym text-capitalize">
        {" "}
        <span className="Synonym">Synonym:</span>
        <br />
        <ul>
          {props.synonym.map(function (synonym, index) {
            return (
              <li key={index} className="synonym-list">
                {synonym}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
