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
          <div className="col-9 g-2">
            <div className="wordAndPhonetics d-flex justify-content-evenly">
              <div className="box-one d-flex align-items-center">
                <h2 className="word text-capitalize">{props.results.word}</h2>
              </div>
              <div className="box-two d-flex align-items-center">
                <h3 className="phonetics">[{props.results.phonetic} ] </h3>
              </div>
              <div className="box-three d-flex align-items-center">
                <PhoneticAudio phonetics={props.results1.phonetics} />
              </div>
            </div>

            <Meaning meaning={props.results.meanings} />
          </div>
          <div className="col-3 g-2">
            <Photos photoGallery={props.photoData.photos} />
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
}
