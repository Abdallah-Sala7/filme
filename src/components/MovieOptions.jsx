import { useEffect, useState } from "react";

import { playIcon, rateStarIcon, speakerIcon } from "../assets";
import { Rating } from "@mui/material";

const MovieOptions = () => {
  const [option, setOption] = useState({
    rating: false,
    trailer: false,
    play: false,
  });

  const [rateValue, setRateValue] = useState(1.5);

  const handleRateClick = (e) => {
    e.preventDefault();
    setOption({ ...option, rating: !option.rating });
  };

  return (
    <div className="relative w-full flex items-center gap-2 mb-5 flex-wrap">
      <a
        href="#"
        className="flex-shrink-0 flex items-center gap-1 rounded-md py-3 px-4 transition-colors bg-grayLight hover:bg-grayHover sm:py-3 sm:px-4"
      >
        <img
          src={playIcon}
          alt="play icon"
          className="w-4 h-4 object-contain gray-filter sm:w-5 sm:h-5"
        />

        <span className="text-sm font-bold text-grayDark capitalize sm:text-lg">
          Play Movie
        </span>
      </a>

      <a
        href="#"
        className="flex-shrink-0 flex items-center gap-1 rounded-md py-3 px-4 transition-colors bg-grayLight hover:bg-grayHover sm:py-3 sm:px-4"
      >
        <img
          src={speakerIcon}
          alt="play icon"
          className="w-4 h-4 object-contain gray-filter sm:w-5 sm:h-5"
        />

        <span className="text-sm font-bold text-grayDark capitalize sm:text-lg">
          watch trailer
        </span>
      </a>

      <div className="flex-shrink-0">
        <a
          href="#"
          className="flex items-center gap-1 rounded-md py-3 px-4 transition-colors bg-grayLight hover:bg-grayHover sm:py-3 sm:px-4"
          onClick={handleRateClick}
        >
          <img
            src={rateStarIcon}
            alt="play icon"
            className="w-4 h-4 object-contain gray-filter sm:w-5 sm:h-5"
          />

          <span className="text-sm font-bold text-grayDark capitalize sm:text-lg">
            rate movie
          </span>
        </a>

        {option.rating && (
          <div className="absolute z-20 w-fit bottom-full left-1/2 -translate-x-1/2 -translate-y-2 flex items-center rounded-md py-5 px-8 bg-dark border border-yellow">
            <Rating
              name="simple-controlled"
              value={rateValue}
              precision={0.5}
              size="large"
              className="yellow-filter"
              onChange={(event, newValue) => {
                setRateValue(newValue);
              }}
            />
          </div>
        )}
      </div>

      <a
        href="#"
        className={`fixed inset-0 w-screen h-screen bg-black opacity-40 z-10 ${
          option.rating ? "block" : "hidden"
        }`}
        onClick={handleRateClick}
      ></a>
    </div>
  );
};

export default MovieOptions;
