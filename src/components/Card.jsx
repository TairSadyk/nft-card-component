import React from "react";
import ImageWrap from "./ImageWrap";
import Specs from "./Specs";
import Author from "./Author";
import Description from "./Description";
function Card() {
  return (
    <div className="card">
      <ImageWrap />
      <Description />
      <Specs />
      <Author />
    </div>
  );
}
export default Card;
