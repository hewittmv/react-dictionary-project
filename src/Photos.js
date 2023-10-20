import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.photoGallery) {
    return (
      <div className="photos-data">
        {props.photoGallery.map(function (photo, index) {
          if (index < 9) {
            return (
              <div className="photos" key={index}>
                <div className="photo mt-2">
                  <a
                    href={photo.src.original}
                    target="_blank"
                    rel="noreferrer"
                    alt="link to original image"
                  >
                    <img
                      src={photo.src.landscape}
                      alt={photo.alt}
                      className="rounded"
                    />
                  </a>
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
    );
  } else {
    return (
      <div className="images">
        <div className="image-one">
          <div className="cube w">
            {" "}
            <span className="letter-w">W</span>
            <span className="word-number"> 4</span>{" "}
          </div>
        </div>
        <div className="image-two">
          <div className="cube o">
            {" "}
            <span className="letter-o">O</span>
            <span className="word-number"> 1</span>{" "}
          </div>
        </div>
        <div className="image-three">
          <div className="cube r">
            {" "}
            <span className="letter-r">R</span>
            <span className="word-number"> 1</span>{" "}
          </div>
        </div>
        <div className="image-four">
          <div className="cube d">
            {" "}
            <span className="letter-d">D</span>
            <span className="word-number"> 2</span>{" "}
          </div>
        </div>
      </div>
    );
  }
}
