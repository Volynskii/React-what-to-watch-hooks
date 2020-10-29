import React from "react";
import { array } from "prop-types";

import ShowMoreButton from "../../components/buttons/show-more-button/show-more-button";
import MoviesFilter from "../../components/movies-filter/movies-filter";
import MoviesList from "../../components/movies-list/movies-list";
import { useFilter } from "./useFilter";

const Catalog = ({ movies }) => {
  const {
    isShowMoreButtonVisible,
    list,
    activeFilter,
    setListSize,
    setActiveFilter
  } = useFilter(movies);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <MoviesFilter
        activeFilter={activeFilter}
        setActiveFilter={setActiveFilter}
      />
      {list.length ? (
        <MoviesList movies={list} />
      ) : (
        <p className="catalog__text">Nothing found</p>
      )}

      {isShowMoreButtonVisible && (
        <div className="catalog__more">
          <ShowMoreButton onClick={setListSize} />
        </div>
      )}
    </section>
  );
};

Catalog.propTypes = {
  movies: array
};

export default Catalog;
