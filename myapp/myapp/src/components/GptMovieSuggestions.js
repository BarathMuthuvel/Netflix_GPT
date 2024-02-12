import React from "react";
import { useSelector } from "react-redux";
import { IMG_CDN } from "../utils/constant";

const GptMovieSuggestions = () => {
  const searchResults = useSelector((store) => store.gpt.searchMoviesResult);
  if (!searchResults) return null;
  console.log(searchResults);

  return (
    <div className="p-4 md:p-0">
      {searchResults.map((searchResult, index) => (
        <>
          <div
            key={searchResult.id}
            className="w-auto md:w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 flex justify-between"
          >
            <div className="w-4/12">
              <img
                className=""
                src={IMG_CDN + searchResult.poster_path}
                alt="poster_img"
              />
            </div>
            <div className="text-left pl-5 w-8/12">
              <h1 className="text-sm md:text-xl font-bold text-gray-800 ">
                {searchResult.title}
              </h1>
              <p className="text-gray-600 py-2 text-sm">
                {searchResult.overview}
              </p>
              <p>Rating: {searchResult.vote_average}⭐</p>
            </div>
          </div>
        </>
      ))}
    </div>
  );
};

export default GptMovieSuggestions;
