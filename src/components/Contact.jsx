import React from "react";
import "../css/Contact.css";
// pending work probably doing after jan

function Contact() {
  return (
    <>
      <div className="contact-wrap">
        <div className="contact-div">
          <div className="contact-inner-div">
            <p className="p1">I am Nilesh </p>
            <p className="p2">owner and manager of saanvi</p>
            <p className="p3">contact me on whatsapp for booking</p>
          </div>
        </div>
      </div>
      <a
        href="https://api.whatsapp.com/send?phone=917304861722"
        className="whatsapp" target="_blank" rel="noreferrer noopener"
      >
        <i className="fa fa-whatsapp whatsapp-icon"></i>
      </a>
    </>
  );
}
export default Contact;
