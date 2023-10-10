import React from "react";

export default function Synonym(props) {
  if (props.synonym) {
    return (
      <div className="synonym">
        {" "}
        Synonym:
        <ul>
          {props.synonym.map(function (synonym, index) {
            return <li key={index}>{synonym}</li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
