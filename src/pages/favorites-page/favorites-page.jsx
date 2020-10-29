import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import MoviesList from "../../components/movies-list/movies-list";
import { fetchFavoritesAsync } from "../../store/movies/actions";

const FavoritesPage = () => {
  const favorites = useSelector((state) => state.movies.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchFavoritesAsync());
  });

  return (
    <div className="user-page">
      <Header className="user-page__head" pageTitle="My list" />
      <section className="catalog">
        <MoviesList movies={favorites} />
      </section>
      <Footer />
    </div>
  );
};

export default FavoritesPage;
