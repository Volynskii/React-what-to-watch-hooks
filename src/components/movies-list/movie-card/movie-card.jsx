import React, { useRef ,useState, useEffect } from "react";
import { number ,string , func } from "prop-types";
import { Link } from "react-router-dom";
import cx from "classnames";

import VideoPlayer from "../../video/video";

const MovieCard = ({ className, id,  title, poster, trailer }) => {
  const [isPlaying, setPlaying] = useState(false);

  let timerId;

  useEffect(() => {
    return () => clearTimeout(timerId);
  }, []);

  const handleMouseEnter = () => {
    timerId = setTimeout(() => {
      setPlaying(true);
    }, 1000);
  };

  const handleMouseLeave = () => {
    clearTimeout(timerId);
    setPlaying(false);
  };
  return (
    <article
      className={cx(`small-movie-card`, className)}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="small-movie-card__image">
        <VideoPlayer
          width={280}
          height={175}
          src={trailer}
          poster={poster}
          isPlaying={isPlaying}
        />
      </div>
      <h3 className="small-movie-card__title">
        <Link
          to={`/movies/${id}`}
          className="small-movie-card__link"
          href="movie-page.html"
        >
          {title}
        </Link>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  className: string,
  id: number.isRequired,
  title: string.isRequired,
  poster: string.isRequired,
  trailer: string.isRequired,
  onClick: func
};

export default MovieCard;
