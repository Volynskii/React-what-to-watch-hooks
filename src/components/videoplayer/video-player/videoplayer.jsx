import React, { useState, useEffect, useRef } from "react";
import { number, string, bool } from "prop-types";

const VideoPlayer = ({ width, height, poster, src, isPlaying }) => {
  const videoRef = useRef(null);

  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const { current: video } = videoRef;
    video.oncanplaythrough = () => {
      setLoading(false);
    };

    return () => {
      video.oncanplaythrough = null;
    };
  }, []);

  useEffect(() => {
    const { current: video } = videoRef;
    if (isLoading) {
      return;
    }

    if (isPlaying) {
      video.play();
    } else {
      video.load();
    }
  }, [isPlaying]);

  return (
    <video
      ref={videoRef}
      muted={true}
      width={width}
      height={height}
      src={src}
      poster={poster}
    />
  );
};

VideoPlayer.propTypes = {
  width: number.isRequired,
  height: number.isRequired,
  poster: string.isRequired,
  src: string.isRequired,
  isPlaying: bool.isRequired
};

export default VideoPlayer;
