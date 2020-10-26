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
        poster: string.isRequired,
        trailer: string.isRequired
      })
  )
};

export default MoviesList;
