import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import { MainContainer } from "./MainContainer";
import { SecondaryContainer } from "./SecondaryContainer";
import useTrendingMovies from "../hooks/useTrendingMovies";
import GptSearch from "./GptSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  useNowPlayingMovies();
  useTrendingMovies();

  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  return (
    <div>
      <Header />
      {showGptSearch ? (
        <GptSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
