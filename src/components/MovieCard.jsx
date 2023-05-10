import React from "react";
import { Link } from "react-router-dom";
import { moviePoster } from "../assets";
import { CircularProgressbar } from "react-circular-progressbar";

const MovieCard = ({ poster = moviePoster, title = "movie", id = 1 }) => {
  return (
    <Link
      to={`/movies/${id}`}
      className="flex flex-col rounded-md overflow-hidden bg-grayLighter transition-transform hover:scale-105"
      aria-labelledby="modal-headline"
    >
      <img
        src={poster}
        alt={title}
        width={170}
        height={255}
        className="w-full object-cover"
      />
      <div className="relative py-5 px-2  md:py-6">
        <div className="absolute bottom-full translate-y-1/2 left-2 w-9 h-9 flex items-center justify-center bg-dark rounded-full">
          <span className="text-white text-xs font-semibold">
            {(3.5 * 100) / 5}% 
          </span>

          <CircularProgressbar
            value={3.5}
            maxValue={5}
            styles={{
              root: {
                width: "40px",
                height: "40px",
                margin: "0 auto",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              path: {
                stroke: "#ffa501",
                strokeWidth: "5",
              },
              trail: {
                stroke: "#ffffff40",
              },
            }}
          />
        </div>

        <h1 className="line-clamp-1 text-light font-bold text-sm">The Real gift</h1>
      </div>
    </Link>
  );
};

export default MovieCard;
