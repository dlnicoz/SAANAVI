import React from "react";
import "../css/Contact.css";
import nilesh from "./images/nilesh.jpg";
// pending work probably doing after jan
import Whatsapp from "./Whatsapp";

function Contact() {

  return (
    <>
    <Whatsapp/>
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
          <a className="link" href="tel:+919420030574" target="_blank" rel="noreferrer">
            <p className="p3">contact me here</p></a>
            <a className="link" href="https://api.whatsapp.com/send?phone=919420030574" target="_blank" rel="noreferrer">  <button
              className="sharer"
              data-sharer="whatsapp"
              data-title="Merida Design Blog"
              data-url="https://api.whatsapp.com/send?phone=919420030574"
              // onClick="https://api.whatsapp.com/send?phone=919420030574"
            >
              {/* <i className="fa fa-whatsapp"></i> */}
              WhatsApp
            </button>
            </a>
           
            <a className="link" href="tel:+919420030574" target="_blank" rel="noreferrer"> <button
              className="sharer"
              data-sharer="phone"
              data-title="Merida Design Blog"
              data-url="tel:+919420030574"
              // onClick="tel:+919420030574"
            >
              {/* <i className="fa fa-phone"></i> */}
              Phone
            </button>
            </a>
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

      <section className="ccsection">
      <iframe className="cciframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d485081.74984482885!2d73.88822226219463!3d18.223651088450342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc26b8953a05d4f%3A0x42865377c4183713!2sHotel%20Saanvi%20(Apti)!5e0!3m2!1sen!2sin!4v1668441656798!5m2!1sen!2sin"style={{border:0 , allowFullScreen:"" , loading:"lazy"}}  referrerPolicy="no-referrer-when-downgrade"></iframe>
      </section>
    </>
  );
}
export default Contact;
