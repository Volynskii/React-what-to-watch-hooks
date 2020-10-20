import React from "react";

import PlayButton from "../buttons/play-button/play-button";
import PlusButton from "../buttons/plus-button/plus-button";
import Button from "../../components/buttons/button";

const CardManage = () => {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">Drama</span>
        <span className="movie-card__year">2014</span>
      </p>
      <div className="movie-card__buttons">
        <PlayButton className="movie-card__button" />
        <PlusButton className="movie-card__button" isAdded={true} />
        <Button className="movie-card__button">Add review</Button>
      </div>
    </div>
  );
};

export default CardManage;
