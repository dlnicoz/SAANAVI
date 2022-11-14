import React from "react";
import "../css/Contact.css";
import nilesh from "./images/nilesh.jpg";
// pending work probably doing after jan

function Contact() {
  return (
    <>
      <div className="ccontainer">
        <div className="cinfo">
          <div className="top1">
          <h1 className="ch1">Nilesh kadam</h1>
          <h2 className="ch2">owner of saanvi hotel</h2>
          <p className="cspan">
            <em> "Go to nature to get your stolen soul back"</em>
          </p>
          </div>
          <div className="top2">
          <a className="link" href="tel:+919420030574">
            <p className="p3">contact me here</p></a>
            
            <button
              className="sharer"
              data-sharer="whatsapp"
              data-title="Merida Design Blog"
              data-url="https://api.whatsapp.com/send?phone=919420030574"
            >
              {/* <i className="fa fa-whatsapp"></i> */}
              WhatsApp
            </button>
            <button
              className="sharer"
              data-sharer="phone"
              data-title="Merida Design Blog"
              data-url="tel:+919420030574"
            >
              {/* <i className="fa fa-phone"></i> */}
              Phone
            </button>
          
          
          </div>
         

         

          {/* <a
            href="https://api.whatsapp.com/send?phone=919420030574"
            className="whatsapp"
            target="_blank"
            rel="noreferrer noopener"
          ></a> */}
        </div>
        <div className="cimg">
          <img className="nileshimg" src={nilesh} alt="nilesh kadam" />
        </div>
      </div>
    </>
  );
}
export default Contact;
