import React from "react";
import "./PhoneticAudio.css";

export default function PhoneticAudio(props) {
  if (props.phonetics) {
    return (
      <div className="phonetic-audio">
        {props.phonetics.map(function (phonetics, index) {
          if (index < 1) {
            return (
              <div key={index}>
                <a href={phonetics.audio} target="_blank" rel="noreferrer">
                  🔊
                </a>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  }
}
