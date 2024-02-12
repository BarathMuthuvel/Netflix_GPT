import React from "react";
import { useSelector } from "react-redux";
import useTrailerVideo from "../hooks/useTrailerVideo";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);

  useTrailerVideo(movieId);

  return (
    <div>
      <iframe
        className="w-screen aspect-video"
        src={
          "https://www.youtube.com/embed/" +
          trailerVideo?.key +
          "?&autoplay=1&mute=1&controls=0&&showinfo=0&loop=1"
        }
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;