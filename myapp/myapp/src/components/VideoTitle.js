import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[30%] md:pt-[15%] px-10 md:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-mono">{title}</h1>
      <p className="hidden md:inline-block py-5 text-lg w-1/4 font-thin">{overview}</p>
      <div className="mt-2 md:mt-0">
        <button className="bg-white text-black md:p-2 md:px-5 p-1 md:text-xs text-sm font-semibold rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="hidden md:inline-block mx-3 bg-white text-black md:p-2 md:px-5 p-1 md:text-xs text-sm font-semibold rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
