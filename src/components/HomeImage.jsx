import React from "react";
import "../css/HomeImage.css";
import Hotelvideo from "../components/images/hotelvideo.mp4";

function HomeImage() {
  return (
    <>
      <div className="first-wrap" loading="lazy">
        <video autoPlay muted loop className="hotelvideo" controls>
          <source src={Hotelvideo} type="video/mp4" />
        </video>
      </div>
      <div className="first-wrap" loading="lazy">
        <div className="first-div">
          <div className="first-inner-div">
            <p>Start Your Adventure In Hotel Saanvi</p>
          </div>
        </div>
      </div>

      <div className="second-wrap" loading="lazy">
        <div className="second-div" id="anchor">
          <p className="body-text">
            <span className="line-separator"></span>Shells sink, dreams float
            Life`s good on our boat.
            <span className="line-separator"></span>
          </p>
        </div>
        <div className="third-div"></div>
      </div>

      <div className="third-wrap" loading="lazy">
        <div className="fourth-div">
          <p className="body-text">
            <span className="line-separator"></span>Light a campfire and
            everyones a storyteller.
            <span className="line-separator"></span>
          </p>
        </div>
        <div className="fifth-div"></div>
      </div>
    </>
  );
}
export default HomeImage;
