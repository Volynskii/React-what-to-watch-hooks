import React from "react";
import { arrayOf, shape, string } from "prop-types";

import MovieCard from "./movie-card/movie-card";

const MoviesList = ({ movies }) => {
  return (
    <div className="catalog__movies-list">
      <div className="catalog__movies-list">
        {movies.map((item) => (
          <MovieCard
            key={item.id}
            className="catalog__movies-card"
            id={item.id}
            title={item.name}
            poster={item.previewImage}
            trailer={item.previewVideo}
            onClick={(f) => f}
          />
        ))}
      </div>
    </div>
  );
};

MoviesList.propTypes = {
  movies: arrayOf(
      shape({
        name: string.isRequired,
        previewImage: string.isRequired,
        previewVideo: string.isRequired
      })
  )
};

export default MoviesList;
