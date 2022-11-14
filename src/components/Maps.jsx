import React from 'react';
import "../css/maps.css"



function Maps() {
    return(<>
    {/* <!--Pattern HTML--> */}
  <div id="pattern" className="pattern">
    <div className="map">
      <a href="https://maps.google.com/maps?q=Pittsburgh,+PA&hl=en&sll=40.697488,-73.979681&sspn=0.667391,1.447449&oq=Pittsburgh&hnear=Pittsburgh,+Allegheny,+Pennsylvania&t=m&z=12" className="btn map-link">View Map</a>
    </div>
  </div>
  {/* <!--End Pattern HTML--> */}
  
  <div className="container">	
		<section className="pattern-description">
			<h1>Adaptive Map</h1>
      <p>A map experience that defaults to a text link to Google Maps, loads in a static map image for small screens and an iframe map for larger screens.</p>
      <p><a href=
        "http://bradfrostweb.com/blog/post/adaptive-maps/">Read more about Adaptive Maps</a></p>
		</section>
		<footer role="contentinfo">   
			<div>
				<nav id="menu">
					<a href="https://bradfrost.github.com/this-is-responsive/patterns.html">&larr;More Responsive Patterns</a>
				</nav>
			</div>
		</footer>
	</div>

    </>)


}

export default Maps;
