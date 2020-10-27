import React from "react";

const CardBackground = ({ src }) => {
  return (
    <div className="movie-card__bg">
      <img src={src} />
    </div>
  );
};

export default CardBackground;
