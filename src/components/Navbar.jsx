import React from "react";
import { Link } from "react-router-dom";
// import "../css/Navbar.css";
import { gsap } from "gsap";
import { useEffect } from "react";

function Navbar() {
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
  return (
    <>
      <div className="NavParent">
        <header>
          <nav className="main-nav">
            <div className="logo">
              <Link to="/">Saanvi Hotel</Link>
            </div>
            <div className="hamburger-menu">
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
                <Link href="#" className="nav-link">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Locations
                </Link>
              </li>
              <li className="nav-item">
                <Link href="#" className="nav-link">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
}
export default Navbar;
