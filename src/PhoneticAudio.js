import React from "react";

export default function PhoneticAudio(props) {
  if (props.phonetics) {
    return (
      <div className="phonetic-audio">
        {props.phonetics.map(function (phonetics, index) {
          return (
            <div key={index}>
              <a href={phonetics.audio}>🔊</a>
            </div>
          );
        })}
      </div>
    );
  }
}
