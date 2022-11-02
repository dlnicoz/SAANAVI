import React from "react";
import HomeImage from "./HomeImage"; 
function Home() {
  return (
    <>
      <section className="hero section1">
        <div className="hero-clipped">
          <div className="hero-textbox">
            <h1 className="main-heading">Saanvi Hotel</h1>
            <h2 className="sub-heading">
              Learn about our new tourist attractions!
            </h2>
            <a href="" className="cta-btn">
              Learn More
            </a>
          </div>
        </div>
      </section>
      <HomeImage />
    </>
  );
}
export default Home;
