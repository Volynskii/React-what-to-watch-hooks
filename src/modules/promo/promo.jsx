import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import CardBackground from "../../components/card-background/card-background";
import CardManage from "../../components/card-manage/card-manage";
import Poster from "../../components/poster/poster";
import VideoPlayer from "../../components/video-player-full/video-player";
import { fetchPromoAsync } from "../../store/promo/actions";

const Promo = () => {
  const [isFull, setFull] = useState(false);
  const promo = useSelector((state) => state.promo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPromoAsync());
  }, []);
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
            onPlayClick={() => setFull(true)}
          />
        </div>
      </div>
    </>
  );
};
export default Promo;
