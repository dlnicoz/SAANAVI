import React from 'react'
import '../css/Wh.css'

function Whatsapp(){

    return(<>
<div className="floating_btn">
    <a className="wha"target="_blank" rel='noreferrer' href="https://wa.me/">
      <div className="contact_icon">
        <i className="fa fa-whatsapp my-float"></i>
      </div>
    </a>
    <p className="text_icon">Talk to us!</p>
  </div>
    </>);
}
export default Whatsapp;