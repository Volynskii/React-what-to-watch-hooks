import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory, useRouteMatch } from "react-router-dom";

import SvgSprite from "../../components/svg-sprite/svg-sprite";
import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CardBackground from "../../components/card-background/card-background";
import Poster from "../../components/poster/poster";
import Tabs from "../../components/tabs/tabs";
import CardManage from "../../components/card-manage/card-manage";
import { SimilarMoviesContainer } from "../../modules/similar-movies/similar-movies-container";
import VideoPlayer from "../../components/video-player-full/video-player";
import { fetchMovieAsync, resetMovie } from "../../store/movie/actions";
import {
  addMovieToListAsync,
  removeMovieFromListAsync
} from "../../store/movies/actions";
import Loading from "../../components/loading/loading";

const DetailsPage = () => {
  const [isFull, setFull] = useState(false);
  const movie = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  const history = useHistory();
  const match = useRouteMatch();
  const id = match.params.id;

  useEffect(() => {
    dispatch(fetchMovieAsync(id));

    return () => dispatch(resetMovie());
  }, [id]);

  if (!movie.id) {
    return <Loading />;
  }

  const handleAddFavorite = () => {
    if (movie.isFavorite) {
      dispatch(removeMovieFromListAsync(id));
    } else {
      dispatch(addMovieToListAsync(id));
    }
  };

  return (
    <>
      {isFull && (
        <VideoPlayer
          name={movie.name}
          poster={movie.previewImage}
          src={movie.trailer}
          onClose={() => setFull(false)}
        />
      )}

      <h1 className="visually-hidden">WTW</h1>
      <SvgSprite />
      <section className="movie-card movie-card--full">
        <div className="movie-card__hero">

          <Header />
          <div className="movie-card__wrap">
            <CardBackground src={movie.backgroundImage} />
            <div className="movie-card__info">
              <CardManage
                name={movie.name}
                genre={movie.genre}
                released={movie.released}
                isFavorite={movie.isFavorite}
                onPlayClick={() => setFull(true)}
                onAddListClick={handleAddFavorite}
                onAddReviewClick={() => history.push(`/movies/${id}/review`)}
              />
            </div>
          </div>
        </div>

        <div className="movie-card__wrap movie-card__translate-top">
          <div className="movie-card__info">
            <Poster big={true} src={movie.posterImage} />
            <Tabs movie={movie} />
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
