import React from "react";
import HomeImage from "./HomeImage"; 
import { Link } from 'react-router-dom';
import Maps from "./Maps"
function Home() {
  return (
    <>
      <section className="hero section1">
        <div className="hero-clipped" > 
          <div className="hero-textbox">
            <h1 className="main-heading">Saanvi Hotel</h1>
            <h2 className="sub-heading">
              Learn about our new tourist attractions!
            </h2>
            <Link to="/Services" className="cta-btn">
              Learn More
            </Link>
          </div>
        </div>
      </section>
      <HomeImage />
      <Maps/>
    </>
  );
}
export default Home;
