import React from "react";
import HomeImage from "./HomeImage"; 
import { Link } from 'react-router-dom';

function Home() {
  return (
    <>
      <section className="hero section1" loading="lazy">
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
      
    </>
  );
}
export default Home;
