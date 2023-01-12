import React from "react";
import HomeImage from "./HomeImage"; 
import { Link } from 'react-router-dom';
import Whatsapp from "./Whatsapp";
import Pricing from "./Pricing";

function Home() {
  return (
    <>
      <section className="hero section1" loading="lazy">
        <div className="hero-clipped" > 
          <div className="hero-textbox">
            <h1 className="main-heading">Hotel Saanvi</h1>
            <h2 className="sub-heading">
              Hotel Saanvi Agro Tourism ,<br></br> Learn about our new tourist attractions!
            </h2>
            <Link to="/Services" className="cta-btn" >
              Show about Services
            </Link>
          </div>
        </div>
        <Whatsapp></Whatsapp>
        <Pricing></Pricing>
      </section>
      <HomeImage />
      
    </>
  );
}
export default Home;
