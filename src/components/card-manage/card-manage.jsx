import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import PlayButton from "../buttons/play-button/play-button";
import PlusButton from "../buttons/plus-button/plus-button";
import Button from "../../components/buttons/button";

const CardManage = ({
  name,
  genre,
  released,
  isFavorite,
  onPlayClick,
  onAddListClick,
  onAddReviewClick
}) => {

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const history = useHistory();

  const handleAddToFavorite = () => {
    if (isAuthenticated) {
      onAddListClick();
    } else {
      history.push(`/auth`);
    }
  };

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
          isAdded={isFavorite}
          onClick={handleAddToFavorite}

        />
        <Button className="movie-card__button" onClick={onAddReviewClick}>
          Add review
        </Button>
      </div>
    </div>
  );
};

export default CardManage;
