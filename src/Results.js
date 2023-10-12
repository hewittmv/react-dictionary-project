import React from "react";
import Meaning from "./Meaning.js";
import PhoneticAudio from "./PhoneticAudio";
import "./Results.css";
import Photos from "./Photos";

export default function results(props) {
  if (props.results && props.results1) {
    return (
      <div className="results">
        <div className="row">
          <div className="col-9">
            <div className="wordAndPhonetics">
              <div className="box-one">
                <h2 className="word mt-3 text-capitalize">
                  {props.results.word}
                </h2>
              </div>
              <div className="box-two">
                <h3 className="phonetics">
                  |{props.results.phonetic} <em>/</em>{" "}
                </h3>
              </div>
              <div className="box-three">
                <PhoneticAudio phonetics={props.results1.phonetics} />
              </div>
            </div>

            <Meaning meaning={props.results.meanings} />
          </div>
          <div className="col-3">
            <Photos />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
