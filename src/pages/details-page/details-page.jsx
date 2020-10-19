import React, { useState } from "react";
import cx from "classnames";

import SvgSprite from "../../components/svg-sprite/svg-sprite";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import MovieCardBackground from "../../components/movie-card-background/movie-card-background";
import Poster from "../../components/poster/poster";
import PlayButton from "../../components/buttons/play-button/play-button";
import PlusButton from "../../components/buttons/plus-button/plus-button";
import Button from "../../components/buttons/button";
import Details from "./details/details";
import Overview from "./overview/overview";
import Reviews from "./reviews/reviews";

const DetailsPage = () => {
  const [currenTab, setCurrentTab] = useState(`overview`);

  const handleTabClick = (evt, tab) => {
    evt.preventDefault();
    setCurrentTab(tab);
  };

  const getTab = () => {
    switch (currenTab) {
      case `overview`:
        return <Overview />;

      case `details`:
        return <Details />;

      case `reviews`:
        return <Reviews />;

      default:
        return null;
    }
  };

  // ПЕРЕСМОТРЕТЬ СТРУКТУРУ MAINPAGE
  return (
    <>
      <h1 className="visually-hidden">WTW</h1>
      <SvgSprite />
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">
          <MovieCardBackground />
          <Header />

          <div className="movie-card__wrap">
            <div className="movie-card__desc">
              <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
              <p className="movie-card__meta">
                <span className="movie-card__genre">Drama</span>
                <span className="movie-card__year">2014</span>
              </p>

              <div className="movie-card__buttons">
                <PlayButton className="movie-card__button" />
                <PlusButton className="movie-card__button" isAdded={true} />
                <Button className="movie-card__button">Add review</Button>
              </div>
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <Poster big={true} />
            <div className="movie-card__desc">
              {/* ВЫНЕСТИ В ОТДЕЛЬНЫЙ КОМПОНЕНТ */}
              <nav className="movie-nav movie-card__nav">
                <ul className="movie-nav__list">
                  <li
                    className={cx(`movie-nav__item`, {
                      [`movie-nav__item--active`]: currenTab === `overview`
                    })}
                  >
                    <a
                      href="#"
                      className="movie-nav__link"
                      onClick={(evt) => handleTabClick(evt, `overview`)}
                    >
                      Overview
                    </a>
                  </li>
                  <li
                    className={cx(`movie-nav__item`, {
                      [`movie-nav__item--active`]: currenTab === `details`
                    })}
                  >
                    <a
                      href="#"
                      className="movie-nav__link"
                      onClick={(evt) => handleTabClick(evt, `details`)}
                    >
                      Details
                    </a>
                  </li>
                  <li
                    className={cx(`movie-nav__item`, {
                      [`movie-nav__item--active`]: currenTab === `reviews`
                    })}
                  >
                    <a
                      href="#"
                      className="movie-nav__link"
                      onClick={(evt) => handleTabClick(evt, `reviews`)}
                    >
                      Reviews
                    </a>
                  </li>
                </ul>
              </nav>
              {getTab()}
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          {/* ВЫНЕСТИ В ОТДЕЛЬНЫЙ КОМПОНЕНТ */}
          <div className="catalog__movies-list">
            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img
                  src="img/fantastic-beasts-the-crimes-of-grindelwald.jpg"
                  alt="Fantastic Beasts: The Crimes of Grindelwald"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">
                  Fantastic Beasts: The Crimes of Grindelwald
                </a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img
                  src="img/bohemian-rhapsody.jpg"
                  alt="Bohemian Rhapsody"
                  width="280"
                  height="175"
                />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">
                  Bohemian Rhapsody
                </a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/macbeth.jpg" alt="Macbeth" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">
                  Macbeth
                </a>
              </h3>
            </article>

            <article className="small-movie-card catalog__movies-card">
              <div className="small-movie-card__image">
                <img src="img/aviator.jpg" alt="Aviator" width="280" height="175" />
              </div>
              <h3 className="small-movie-card__title">
                <a className="small-movie-card__link" href="movie-page.html">
                  Aviator
                </a>
              </h3>
            </article>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
};
export default DetailsPage;
