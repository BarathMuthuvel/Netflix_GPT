import React from "react";
import VideoTitle from "./VideoTitle";
import VideoBackground from "./VideoBackground";
import { useSelector } from "react-redux";

export const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  //early return
  if (movies === null) return;

  const mainMovie = movies[16];

  const { original_title, overview, id } = mainMovie;

  return (
    <div className="md:pt-0 pt-[30%] bg-black">
      <VideoTitle title={original_title} overview={overview} />
      <VideoBackground movieId={id} />
    </div>
  );
};

export default MainContainer;
