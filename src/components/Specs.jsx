import React from "react";

function Specs() {
  return (
    <div className="specs">
      <div className="price specs__content">
        <img
          className="specs__icon specs__icon--eth"
          src="img/icon-ethereum.svg"
          alt="Ethereum icon"
        />
        <p className="specs__text specs__text--eth">0.041 ETH</p>
      </div>
      <div className="specs__content">
        <img
          className="specs__icon specs__icon--time"
          src="img/icon-clock.svg"
          alt="Clock icon"
        />
        <p className="specs__text specs__text--time">3 days left</p>
      </div>
    </div>
  );
}
export default Specs;
