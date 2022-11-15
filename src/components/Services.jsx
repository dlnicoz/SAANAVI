import React from "react";
import "../css/Cards.css";
import CardItem from "./CardItem";
import img1 from "./images/scene.jpg";
import img2 from "./images/boat.jpg";
import img3 from "./images/shivmandir2.jpg";
import img4 from "./images/mountainsee.jpg";
import img5 from "./images/lakeview.jpg";
import img6 from "./images/gallery/s19.jpg";
import img7 from "./images/gallery/s16.jpg";
import img8 from "./images/carrom.jpg";
import img9 from "./images/gallery/s35.jpg";
import img10 from "./images/gallery/s40.jpg";

function Services() {
  return (
    <div className="cards">
      <h1>Check out these EPIC Services!</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src={img1}
              text="-- Triveni Sangam River"
              label="Lake View"
              path="/services"
            />
            <CardItem
              src={img2}
              text="Little boats should keep near shore"
              label="Boating"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img3}
              text="-- Datta Mandir Temple"
              label="Devotional"
              path="/services"
            />
            <CardItem
              src={img4}
              text="-- I-LAND Point"
              label="Trekking"
              path="/products"
            />
            <CardItem
              src={img5}
              text="-- Front View From Rooms"
              label="Lake View"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img6}
              text="And Into The Forest I Go, To Lose My Mind And Find My Soul."
              label="Camping"
              path="/sign-up"
            />
            <CardItem
              src={img7}
              text="The bigger you build the bonfire, the more darkness is revealed."
              label="Born Fire"
              path="/sign-up"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src={img8}
              text="Playing carrom with your crush is like loosing the red Queen knowingly to win your queen. "
              label="Carrom"
              path="/sign-up"
            />
            <CardItem
              src={img9}
              text="The goal of life is living in agreement with nature"
              label="Open Dine"
              path="/sign-up"
            />
            <CardItem
              src={img10}
              text="Land was created to provide a place for boats to visit."
              label="Pendal Boating"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Services;
