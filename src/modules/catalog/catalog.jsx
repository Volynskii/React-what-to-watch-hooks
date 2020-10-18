import React from "react";
import ShowMoreButton from "../../components/buttons/show-more-button";

import { data } from "../../api/mocks";
import MoviesFilter from "../../components/movies-filter/movies-filter";
import MovieCard from "../../components/movie-card/movie-card";

const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <MoviesFilter />
      <div className="catalog__movies-list">
        {data.map((item) => (
          <MovieCard
            key={item.id}
            className="catalog__movies-card"
            title={item.title}
            imageSrc={item.imageSrc}
          />
        ))}
      </div>
      <div className="catalog__more">
        <ShowMoreButton />
      </div>
    </section>
  );
};

export default Catalog;
