import React from "react";

function Specs() {
  return (
    <div className="specs">
      <div className="price">
        <img
          className="price__icon"
          src="img/icon-ethereum.svg"
          alt="Ethereum icon"
        />
        <p className="price__text">0.041 ETH</p>
      </div>
      <div className="days-left">
        <img
          className="days-left__icon"
          src="img/icon-clock.svg"
          alt="Clock icon"
        />
        <p className="days-left__text">3 days left</p>
      </div>
    </div>
  );
}
export default Specs;
