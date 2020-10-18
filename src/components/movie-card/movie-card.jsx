import React from "react";
import { string } from "prop-types";
import cx from "classnames";

const MovieCard = ({ className, title, imageSrc }) => {
  return (
    <article className={cx(`small-movie-card`, className)}>
      <div className="small-movie-card__image">
        <img src={imageSrc} alt={title} width="280" height="175" />
      </div>
      <h3 className="small-movie-card__title">
        <a className="small-movie-card__link" href="movie-page.html">
          {title}
        </a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  className: string,
  title: string.isRequired,
  imageSrc: string.isRequired
};

export default MovieCard;
