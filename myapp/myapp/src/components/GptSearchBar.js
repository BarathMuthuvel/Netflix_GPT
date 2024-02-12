import React, { useEffect, useRef } from "react";
import lang from "../utils/languageConstant";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import { addMoviesResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);

  const dispatch = useDispatch();

  const searchText = useRef(null);

  useEffect(() => {
    handleGptSearchClick();
  }, []);

  const handleGptSearchClick = async () => {
    const gptResult = searchText.current.value;
    console.log(gptResult);
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        gptResult +
        "&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMoviesResult(json.results));
  };

  return (
    <div className="pt-[40%] md:pt-[10%] flex justify-center p-4 md:p-0">
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-2 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="bg-red-800 text-white col-span-3 m-4 px-4 py-2 rounded-lg"
          type="submit"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
