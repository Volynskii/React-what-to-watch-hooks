import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ShowMoreButton from "../../components/buttons/show-more-button/show-more-button";
import MoviesFilter from "../../components/movies-filter/movies-filter";
import MoviesList from "../../components/movies-list/movies-list";
import { GenresMap } from "../../api/transform/transformMovies";

import { fetchMoviesAsync } from "../../store/movies/actions";

const DEFAULT_LIST_SIZE = 6;
const ADDED_COUNT_TO_LIST = 4;

const Catalog = () => {
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

  const [list, setList] = useState([]);
  const [listSize, setListSize] = useState(DEFAULT_LIST_SIZE);
  const [activeFilter, setActiveFilter] = useState(GenresMap.All);

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, []);
  useEffect(() => {
    const filtered =
      activeFilter === GenresMap.All
        ? movies
        : movies.filter((item) => item.genreId === activeFilter);
    setList(filtered);
  }, [movies, activeFilter]);

  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <MoviesFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
      <MoviesList movies={list.slice(0, listSize)} />

      {list.length > listSize && (
        <div className="catalog__more">
          <ShowMoreButton onClick={() => setListSize(listSize + ADDED_COUNT_TO_LIST)} />
        </div>
      )}
    </section>
  );
};

export default Catalog;
