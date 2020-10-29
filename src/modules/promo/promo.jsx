import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";

import CardBackground from "../../components/card-background/card-background";
import CardManage from "../../components/card-manage/card-manage";
import Poster from "../../components/poster/poster";
import VideoPlayer from "../../components/video-player-full/video-player";
import { fetchPromoAsync } from "../../store/promo/actions";
import {
  addMovieToListAsync,
  removeMovieFromListAsync
} from "../../store/movies/actions";

const Promo = () => {
  const [isFull, setFull] = useState(false);
  const promo = useSelector((state) => state.promo);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchPromoAsync());
  }, []);

  const handleAddFavorite = () => {
    if (promo.isFavorite) {
      dispatch(removeMovieFromListAsync(promo.id));
    } else {
      dispatch(addMovieToListAsync(promo.id));
    }
  };

  return (
    <>
      {isFull && (
        <VideoPlayer
          name={promo.name}
          poster={promo.previewImage}
          src={promo.trailer}
          onClose={() => setFull(false)}
        />
      )}
      <div className="movie-card__wrap">
        <CardBackground src={promo.backgroundImage} />
        <div className="movie-card__info">
          <Poster src={promo.posterImage} />
          <CardManage
            name={promo.name}
            genre={promo.genre}
            released={promo.released}
            isFavorite={promo.isFavorite}
            onPlayClick={() => setFull(true)}
            onAddListClick={handleAddFavorite}
            onAddReviewClick={() => history.push(`/movies/${promo.id}/review`)}
          />
        </div>
      </div>
    </>
  );
};
export default Promo;
