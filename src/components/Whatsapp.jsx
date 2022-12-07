import React from 'react'
import '../css/Wh.css'
import wh from "../components/images/www.svg"
function Whatsapp(){

    return(<>
<div className="floating_btn">
    <a className="wha"target="_blank" rel='noreferrer' href="https://api.whatsapp.com/send?phone=919420030574">
      <div className="contact_icon">
        {/* <i className="fas fa-whatsapp my-float large-icon"></i> */}
        <img src={wh} alt="z"  />
      </div>
    </a>
    <p className="text_icon">Talk to us!</p>
  </div>
    </>);
}
export default Whatsapp;