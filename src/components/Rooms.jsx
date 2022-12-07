import React from "react";
import "../css/Rooms.css";
import { Link } from "react-router-dom";
import hotel from "./images/gallery/saanvi.jpg"
import hotelRoom from "./images/hotelroom.png"
import Whatsapp from "./Whatsapp"
// import RoomsAdmin from "./RoomsAdmin";
function Rooms() {
  const room1Ava = "Availability-- Available now";
  const room2Ava = "Availability-- Available now";
  const room3Ava = "Availability-- Available now";
  const room4Ava = "Availability-- Available now";
  const room5Ava = "Availability-- Available now";
  const room6Ava = "Availability-- Available now";
  const room7Ava = "Availability-- Available now";


  return (
    <>
<Whatsapp/>
      <div className="Rooms">
        <div className="grid">
        <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                alt="Snowy Mountains"
                src={hotel}
              />
              <div className="card__content">
                <h1 className="card__header">Saanvi Hotel</h1>
                <ul>
                  <li>
                    <p className="card__text">
                      Food -- Whole day food include in all Rooms.
                    </p>
                    </li>
                    <li>
                    <p className="card__text">
                      Price -- Per Person/day <span id="price1">1299</span> rs.
                    </p>
                    </li><li>
                    <p className="card__text">
                      Discount -- Available if more than 12 people are coming.
                    </p>
                  </li>
                 
                </ul>
                <Link to="/Contact" style={{ textDecoration: "none" }}>
                  
                  <button className="card__btn">
                    Book Now <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src={hotelRoom}
                alt="Snowy Mountains"
              />
              <div className="card__content">
                <h1 className="card__header">Room 1</h1>
                <ul>
                  <li>
                    <p className="card__text">
                      Type-- 10x11 ft 

                    </p>
                  </li>
                  <li>
                    <p className="card__text">{room1Ava}</p>
                  </li>
                </ul>
                <Link to="/Contact" style={{ textDecoration: "none" }}>
                  
                  <button className="card__btn">
                    Book Now <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src={hotelRoom}
              />
              <div className="card__content">
                <h1 className="card__header">Room 2</h1>
                <ul>
                  <li>
                    <p className="card__text">
                      Type-- 10x11 ft 
                    </p>
                  </li>
                  <li>
                    <p className="card__text">{room2Ava}</p>
                  </li>
                </ul>
                <Link to="/Contact" style={{ textDecoration: "none" }}>
                  <button className="card__btn">
                    Book Now <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src={hotelRoom}
              />
              <div className="card__content">
                <h1 className="card__header">Rooms 3</h1>
                <ul>
                  <li>
                    <p className="card__text">
                      Type-- 10x11 ft  
                    </p>
                  </li>
                  <li>
                    <p className="card__text">{room3Ava}</p>
                  </li>
                </ul>
                <Link to="/Contact" style={{ textDecoration: "none" }}>
                  <button className="card__btn">
                    Book Now <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src={hotelRoom}
              />
              <div className="card__content">
                <h1 className="card__header">Room 4</h1>
                <ul>
                  <li>
                    <p className="card__text">
                      Type-- 10x11 ft 
                    </p>
                  </li>
                  <li>
                    <p className="card__text">{room4Ava}</p>
                  </li>
                </ul>
                <Link to="/Contact" style={{ textDecoration: "none" }}>
                  <button className="card__btn">
                    Book Now <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src={hotelRoom}
              />
              <div className="card__content">
                <h1 className="card__header">Room 5</h1>
                <ul>
                  <li>
                    <p className="card__text">
                      Type-- 12x11 ft 
                    </p>
                  </li>
                  <li>
                    <p className="card__text">{room5Ava}</p>
                  </li>
                </ul>
                <Link to="/Contact" style={{ textDecoration: "none" }}>
                  <button className="card__btn">
                    Book Now <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src={hotelRoom}
              />
              <div className="card__content">
                <h1 className="card__header">Room 6</h1>
                <ul>
                  <li>
                    <p className="card__text">
                      Type-- 12x11 ft 
                    </p>
                  </li>
                  <li>
                    <p className="card__text">{room6Ava}</p>
                  </li>
                </ul>
                <Link to="/Contact" style={{ textDecoration: "none" }}>
                  <button className="card__btn">
                    Book Now <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src={hotelRoom}
              />
              <div className="card__content">
                <h1 className="card__header">Room 7</h1>
                <ul>
                  <li>
                    <p className="card__text">
                      Type-- 12x11 ft 
                    </p>
                  </li>
                  <li>
                    <p className="card__text">{room7Ava}</p>
                  </li>
                </ul>
                <Link to="/Contact" style={{ textDecoration: "none" }}>
                  <button className="card__btn">
                    Book Now <span>&rarr;</span>
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
