import React,{useEffect} from "react";
import '../css/Booking.css'
import $ from 'jquery';

function Booking() {
    useEffect(() => {
      
    
        $(document).ready(function() {

            var guestAmount = $('#guestNo');
          
            $('#cnt-up').click(function() {
              guestAmount.val(Math.min(parseInt($('#guestNo').val()) + 1, 20));
            });
            $('#cnt-down').click(function() {
              guestAmount.val(Math.max(parseInt($('#guestNo').val()) - 1, 1));
            });
          
            $('.btn').click(function() {
          
              var $btn = $('.btn');
          
              $btn.toggleClass('booked');
              $('.diamond').toggleClass('windup');
              $('form').slideToggle(300);
              $('.linkbox').toggle(200);
          
              if ($btn.text() === "BOOK NOW") {
                $btn.text("BOOKED!");
              } else {
                $btn.text("BOOK NOW");
              }
            });
          });
    }, [])
    
    return(<>
    <div className="booking-body">
    <div className="diamond"></div>
    <div className="form-wrap">
      <form action="">
        <div className="location">
          <label htmlFor="location">NAME</label><br/>
          <input type="text" name="location" placeholder="dheeraj, Sa"/><br/>
        </div>
        <div className="guests">
          <label htmlFor="guests">NUMBER OF GUESTS</label><br/><br/>
          <button className="counter-btn" type="button" id="cnt-down">-</button>
          <input type="text" id="guestNo" name="guests" value="2"/>
          <button className="counter-btn" type="button" id="cnt-up">+</button>
        </div>
        <div className="dates">
          <div className="arrival">
            <label htmlFor="arrival">ARRIVAL</label><br/>
            <input name="arrival" type="text" onFocus="(this.type='date')" onBlur="(this.type='text')" placeholder="10/03/2016"/>
          </div>
          <div className="departure">
            <label htmlFor="arrival">DEPARTURE</label><br/>
            <input name="departure" type="text" onFocus="(this.type='date')" onBlur="(this.type='text')" placeholder="05/11/2016"/>
          </div>
        </div>
      </form>
      <button className="btn" type="button">BOOK NOW</button>
    </div>
    </div>
    </>);
}

export default Booking;
