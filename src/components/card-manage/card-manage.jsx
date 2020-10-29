import React from "react";

import PlayButton from "../buttons/play-button/play-button";
import PlusButton from "../buttons/plus-button/plus-button";
import Button from "../../components/buttons/button";

const CardManage = ({
  name,
  genre,
  released,
  isAdded,
  onPlayClick,
  onAddListClick,
  onAddReviewClick
}) => {
  return (
    <div className="movie-card__desc">
      <h2 className="movie-card__title">{name}</h2>
      <p className="movie-card__meta">
        <span className="movie-card__genre">{genre}</span>
        <span className="movie-card__year">{released}</span>
      </p>
      <div className="movie-card__buttons">
        <PlayButton className="movie-card__button" onClick={onPlayClick} />
        <PlusButton
          className="movie-card__button"
          isAdded={isAdded}
          onClick={onAddListClick}
        />
        <Button className="movie-card__button" onClick={onAddReviewClick}>
          Add review
        </Button>
      </div>
    </div>
  );
};

export default CardManage;
