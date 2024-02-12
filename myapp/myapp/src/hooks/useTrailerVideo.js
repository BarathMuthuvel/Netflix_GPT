import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addTrailerVideo } from "../utils/movieSlice";

const useTrailerVideo = (movieId) => {
  const dispatch = useDispatch();

  const trailer_videos = useSelector((store) => store.movies.trailerVideo)

  useEffect(() => {
   !trailer_videos && getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" +
        movieId +
        "/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    
    const trailer = json.results[1];
    dispatch(addTrailerVideo(trailer));
  };
};

export default useTrailerVideo;
