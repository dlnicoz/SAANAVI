import React from "react";
import "../css/Cards.css";
import CardItem from "./CardItem";
import img1 from "./images/hotel.jpg";
import img2 from "./images/boating.jpg";
import img3 from "./images/shivmandir.jpg";
import img4 from "./images/scene.jpg";
import img5 from "./images/lakeview.jpg";

function Services() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Services!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="lakeview"
              label="Adventure"
              path="/services"
            />
            <CardItem
              src={img2}
              text="lorem lorem lorem lorem lorem lorem"
              label="Luxury"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="lorem lorem lorem lorem lorem lorem"
              label="Devotional"
              path="/services"
            />
            <CardItem
              src={img4}
              text="lorem lorem lorem lorem lorem lorem"
              label="Adventure"
              path="/products"
            />
            <CardItem
              src={img5}
              text="lorem lorem lorem lorem lorem lorem"
              label="Adrenaline"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
