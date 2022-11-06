import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/Navbar.css";
import { gsap } from "gsap";
import { useEffect } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  // const disFlex = menuOpen ? "flex" : "none";
  useEffect(() => {
    const mainNav = document.querySelector(".main-nav");
    const hamburgerMenu = document.querySelector(".hamburger-menu");
    //Runs on every render
    hamburgerMenu.addEventListener("click", function () {
      mainNav.classList.toggle("open");
    });

    gsap.fromTo(".hero-clipped", { scaleX: 0 }, { duration: 1, scaleX: 1 });

    gsap.fromTo(
      ".logo",
      { x: -202, opacity: 0 },
      { duration: 1, delay: 0.5, x: 0, opacity: 1 }
    );

    gsap.fromTo(
      ".hamburger-menu",
      { x: 200, opacity: 0 },
      { duration: 1, delay: 1, x: 0, opacity: 1 }
    );

    gsap.fromTo(
      ".hero-textbox",
      { yPercent: 38, opacity: 0 },
      { duration: 2, delay: 1.3, yPercent: -50, opacity: 1 }
    );
  }, []);
  function buttonClicked() {
    setMenuOpen(!menuOpen);
  }
  // style={{display:disFlex}}
  return (
    <>
      <header>
        <nav className={`${menuOpen ? "main-nav open" : "main-nav"}`}>
          <div className="logo">
            <Link to="/">Saanvi Hotel</Link>
          </div>
          <div onClick={buttonClicked} className="hamburger-menu">
            <span className="bar"></span>
          </div>
          <ul className="nav-list">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="#" className="nav-link">
                Tours
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Gallery" className="nav-link">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Booking" className="nav-link">
                Booking
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Rooms" className="nav-link">
                Rooms
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Contact" className="nav-link">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
}
export default Navbar;
