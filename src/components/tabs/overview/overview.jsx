import React from "react";
import { getMovieLevel } from "../../../helpers/getMovieLevel";

const Overview = ({ description, director, starring, rating, scores }) => {
  const level = getMovieLevel(rating);
  const actors = starring && starring.join(`, `);

  return (
    <>
      <div className="movie-rating">
        <div className="movie-rating__score">{rating}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{level}</span>
          <span className="movie-rating__count">{scores}</span>
        </p>
      </div>

      <div className="movie-card__text">
        <p>{description}</p>
        <p className="movie-card__director">
          <strong>Director:{director}</strong>
        </p>

        <p className="movie-card__starring">
          <strong>
            Starring: {actors}
          </strong>
        </p>
      </div>
    </>
  );
};
export default Overview;
