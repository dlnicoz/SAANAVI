import React from "react";
import "../css/Footer.css"

function Footer() {
  return (
    <>

      <footer className="footer">
    <div className="footer__about">
      <h1>Dheeraj Sahani</h1>
      <h2>I&apos;am jr software engineer, works in full stack development</h2>
    </div>
    <div className="footer__network">
      <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitter"></i></a>
      <a href="https://www.twitch.tv/" target="_blank" rel="noopener noreferrer"><i className="fa fa-twitch"></i></a>
      <a href="https://github.com/iori92" target="_blank" rel="noopener noreferrer"><i className="fa fa-github"></i></a>
      <a href="https://gitlab.com/" target="_blank" rel="noopener noreferrer"><i className="fa fa-codepen"></i></a>
    </div>
    <hr />
    <span className="footer__copyright">
      &#169; 2022 Iori
    </span>
  </footer>
    </>
  );
}
export default Footer;
