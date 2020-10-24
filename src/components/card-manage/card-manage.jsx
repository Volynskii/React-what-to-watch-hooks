import React, { useState } from "react";

import PlayButton from "../buttons/play-button/play-button";
import PlusButton from "../buttons/plus-button/plus-button";
import Button from "../../components/buttons/button";
import VideoPlayer from "@components/video-player-full/video-player";

const CardManage = () => {
  const [isFull, setFull] = useState(false);

  return (
    <>
      {isFull && (
        <VideoPlayer
          name="Transpotting"
          poster={`img/fantastic-beasts-the-crimes-of-grindelwald.jpg`}
          src={`https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`}
          onClose={() => setFull(false)}
        />
      )}
      <div className="movie-card__desc">
        <h2 className="movie-card__title">The Grand Budapest Hotel</h2>
        <p className="movie-card__meta">
          <span className="movie-card__genre">Drama</span>
          <span className="movie-card__year">2014</span>
        </p>
        <div className="movie-card__buttons">
          <PlayButton
            className="movie-card__button"
            onClick={() => setFull(true)}
          />
          <PlusButton className="movie-card__button" isAdded={true} />
          <Button className="movie-card__button">Add review</Button>
        </div>
      </div>
    </>
  );
};

export default CardManage;
