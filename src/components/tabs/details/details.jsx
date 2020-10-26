import React, { Fragment } from "react";
import { formatRunTime } from "../../../helpers/formatVideoTime";

const Details = ({ director, starring, released, genre, runtime }) => {
  const time = formatRunTime(runtime);
  const actors =
    starring &&
    starring.map((item, index) => (
      <Fragment key={index}>
        {index === starring.length - 1 ? (
          item
        ) : (
          <>
            {item},{<br />}
          </>
        )}
      </Fragment>
    ));
  return (
    <div className="movie-card__text movie-card__row">
      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Director</strong>
          <span className="movie-card__details-value">{director}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Starring</strong>
          <span className="movie-card__details-value">{actors}</span>
        </p>
      </div>

      <div className="movie-card__text-col">
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Run Time</strong>
          <span className="movie-card__details-value">{time}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Genre</strong>
          <span className="movie-card__details-value">{genre}</span>
        </p>
        <p className="movie-card__details-item">
          <strong className="movie-card__details-name">Released</strong>
          <span className="movie-card__details-value">2014</span>
        </p>
      </div>
    </div>
  );
};

export default Details;
