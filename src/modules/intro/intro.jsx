import React from "react";
import MovieCardBackground from "../../components/movie-card-background/movie-card-background";
import MovieCardInfo from "../../components/movie-card-info/movie-card-info";
import Header from "../../components/header/header";

const Intro = () => {
  return (
    <section className="movie-card">
      <MovieCardBackground />
      <Header />
      <div className="movie-card__wrap">
        <MovieCardInfo />
      </div>
    </section>
  );
};

export default Intro;
