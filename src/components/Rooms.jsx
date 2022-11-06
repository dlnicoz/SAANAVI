import React from "react";
import "../css/Rooms.css";
function Rooms() {
  return (
    <>
      <div className="Rooms">
        <div className="grid">
        <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src="https://images.unsplash.com/photo-1540518614846-7eded433c457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8YmVkcm9vbXxlbnwwfDB8MHx8&auto=format&fit=crop&w=500&q=60"
                alt="Snowy Mountains"
              />
              <div className="card__content">
                <h1 className="card__header">Room 1</h1>
                <ul>
                <li><p className="card__text">
                  Type-- 12x15 ft | Full AC | Toilet
                </p></li>
                <li><p className="card__text">Availaibility-- Booked till 9<sup>th</sup> Nov</p></li>
                </ul>
                <button className="card__btn">
                  Book Now <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src="https://images.unsplash.com/photo-1566665797739-1674de7a421a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Snowy Mountains"
              />
              <div className="card__content">
                <h1 className="card__header">Room 2</h1>
                <ul>
                <li><p className="card__text">
                  Type-- 12x15 ft | Full AC | Toilet
                </p></li>
                <li><p className="card__text">Availaibility-- Booked till 9<sup>th</sup> Nov</p></li>
                </ul>
                <button className="card__btn">
                  Book Now <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src="https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJlZHJvb218ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Snowy Mountains"
              />
              <div className="card__content">
                <h1 className="card__header">Rooms 3</h1>
                <ul>
                <li><p className="card__text">
                  Type-- 12x15 ft | Full AC | Toilet
                </p></li>
                <li><p className="card__text">Availaibility-- Booked till 9<sup>th</sup> Nov</p></li>
                </ul>
                <button className="card__btn">
                  Book Now <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src="https://images.unsplash.com/photo-1585821569331-f071db2abd8d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGJlZHJvb218ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Snowy Mountains"
              />
              <div className="card__content">
                <h1 className="card__header">Room 4</h1>
                <ul>
                <li><p className="card__text">
                  Type-- 12x15 ft | Full AC | Toilet
                </p></li>
                <li><p className="card__text">Availaibility-- Booked till 9<sup>th</sup> Nov</p></li>
                </ul>
                <button className="card__btn">
                  Book Now <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src="https://images.unsplash.com/photo-1571508601891-ca5e7a713859?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJlZHJvb218ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Desert"
              />
              <div className="card__content">
                <h1 className="card__header">Room 5</h1>
                <ul>
                <li><p className="card__text">
                  Type-- 12x15 ft | Full AC | Toilet
                </p></li>
                <li><p className="card__text">Availaibility-- Booked till 9<sup>th</sup> Nov</p></li>
                </ul>
                <button className="card__btn">
                  Book Now <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
          <div className="grid__item">
            <div className="card">
              <img
                className="card__img"
                src="https://images.unsplash.com/photo-1622127922040-13cab637ee78?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fGJlZHJvb218ZW58MHwwfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt="Canyons"
              />
              <div className="card__content">
                <h1 className="card__header">Room 6</h1>
                <ul>
                <li><p className="card__text">
                  Type-- 12x15 ft | Full AC | Toilet
                </p></li>
                <li><p className="card__text">Availaibility-- Booked till 9<sup>th</sup> Nov</p></li>
                </ul>
                <button className="card__btn">
                  Book Now <span>&rarr;</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Rooms;
