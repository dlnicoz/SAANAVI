import React from "react";
import "../css/Gallery.css";

function Gallery() {
  return (
    <>
      <div className="igcontainer">

<h1 className="heading">Image Gallery of Saanvi <span></span></h1>

<div className="gallery">

  <div className="gallery-item">
    <img className="gallery-image" src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?w=500&h=500&fit=crop" alt=""/>
  </div>

  <div className="gallery-item">
    <img className="gallery-image" src="https://images.unsplash.com/photo-1515260268569-9271009adfdb?w=500&h=500&fit=crop" alt=""/>
  </div>

  <div className="gallery-item">
    <img className="gallery-image" src="https://images.unsplash.com/photo-1506045412240-22980140a405?w=500&h=500&fit=crop" alt=""/>
  </div>

  <div className="gallery-item">
    <img className="gallery-image" src="https://images.unsplash.com/photo-1514041181368-bca62cceffcd?w=500&h=500&fit=crop" alt=""/>
  </div>

  <div className="gallery-item">
    <img className="gallery-image" src="https://images.unsplash.com/photo-1445810694374-0a94739e4a03?w=500&h=500&fit=crop" alt=""/>
  </div>

  <div className="gallery-item">
    <img className="gallery-image" src="https://images.unsplash.com/photo-1486334803289-1623f249dd1e?w=500&h=500&fit=crop" alt=""/>
  </div>

</div>

</div>
    </>
  );
}
export default Gallery;
