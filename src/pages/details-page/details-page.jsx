import React from "react";

import SimilarMoviesContainer from "../../modules/similar-movies/similar-movies-container";

import SvgSprite from "../../components/svg-sprite/svg-sprite";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CardBackground from "../../components/card-background/card-background";
import Poster from "../../components/poster/poster";
import Tabs from "../../components/tabs/tabs";
import CardManage from "../../components/card-manage/card-manage";

const DetailsPage = () => {

  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <SvgSprite />
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <CardBackground />
          <Header />

          <div className="movie-card__wrap">
            <CardManage />
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <Poster big={true} />
            <Tabs />
          </div>
        </div>
      </section>

      <div className="page-content">
        <SimilarMoviesContainer />
        <Footer />
      </div>
    </>
  );
};
export default DetailsPage;
