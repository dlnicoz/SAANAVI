import React ,{useEffect } from 'react';
import "../css/HomeImage.css";
import $ from 'jquery'



function HomeImage() {

useEffect(() => {

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 700);
        return false;
      }
    }
  });
});


}, [])

    return (<>

<div className="first-wrap">
  <div className="first-div">
    <div className="first-inner-div">
      <p>Start Your Adventure</p>
      
    </div>
  </div>
</div>

<div className="second-wrap">
  <div className="second-div" id="anchor">
    <p className="body-text">
      <span className="line-separator"></span>Shells sink, dreams float Life`s good on our boat
      <span className="line-separator"></span>
    </p>
  </div>
  <div className="third-div">
  </div>
</div>

<div className="third-wrap">
  <div className="fourth-div">
    <p className="body-text">
      <span className="line-separator"></span>Light a campfire and everyone’s a storyteller
      <span className="line-separator"></span>
    </p>
  </div>
  <div className="fifth-div">
  </div>
</div>

<a href="#" id="back-to-top" title="Back to top">&uarr;</a>
    </>)
    
}
export default HomeImage