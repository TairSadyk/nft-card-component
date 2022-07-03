import React from "react";
function ImageWrap() {
  return (
    <div className="img-wrap">
      <img
        className="img-wrap__img"
        src="img/image-equilibrium.jpg"
        alt="Transparent cube image"
      />
      <div className="img-wrap__overlay">
        <img className="img-wrap__icon" src="img/icon-view.svg" alt="" />
      </div>
    </div>
  );
}
export default ImageWrap;
