import React, { useContext } from "react";

import ShowMoreButton from "../../components/buttons/show-more-button/show-more-button";
import MoviesFilter from "../../components/movies-filter/movies-filter";
import MoviesList from "../../components/movies-list/movies-list";

import { Context } from "../../app";

const Catalog = () => {
  const { data } = useContext(Context);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <MoviesFilter />
      <MoviesList movies={data} />

      <div className="catalog__more">
        <ShowMoreButton />
      </div>
    </section>
  );
};

export default Catalog;
