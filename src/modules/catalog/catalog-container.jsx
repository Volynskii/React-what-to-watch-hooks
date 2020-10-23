import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Catalog from "./catalog";
import { fetchMoviesAsync } from "../../store/movies/actions";

export const CatalogContainer = () => {
  const movies = useSelector((state) => state.movies.list);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchMoviesAsync());
  }, []);

  return <Catalog movies={movies} />;
};
