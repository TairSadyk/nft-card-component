import React from "react";
function Author() {
  return (
    <div className="author">
      <img
        className="card__avatar"
        src="img/image-avatar.png"
        alt="Autor avatar"
      />
      <p className="author__text">
        Creation of{" "}
        <a href="" className="author__name">
          Jules Wyvern
        </a>
      </p>
    </div>
  );
}
export default Author;
