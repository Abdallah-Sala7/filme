import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CircularProgressbar } from "react-circular-progressbar";

const MovieCard = ({ movie }) => {
  const [validSrc, setValidSrc] = useState(true);

  return (
    <Link
      to={`/movies/${movie.id}`}
      className={`flex flex-col rounded-md overflow-hidden bg-grayLighter transition-all hover:scale-105`}
      aria-labelledby="modal-headline"
    >
      <div className="flex h-48 sm:h-56  md:h-60 lg:h-56">
      {validSrc ? (
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
          loading="lazy"
          className="w-full h-full object-cover"
          onError={() => setValidSrc(false)}
        />
      ) : (
        <div className="w-full h-full bg-gray-300 flex items-center justify-center opacity-30 animate-pulse">
          <span className="text-white text-2xl font-bold">No image</span>
        </div>
      )}
      </div>

      <div className="relative py-5 px-2 align-bottom md:py-6">
        <div className="absolute bottom-full translate-y-1/2 left-2 w-7 h-7 flex items-center justify-center bg-dark rounded-full sm:w-9 sm:h-9">
          <span className="text-white tracking-tighter text-xs font-normal sm:tracking-normal sm:font-semibold">
            {Math.round((movie.vote_average * 100) / 10)}%
          </span>

          <CircularProgressbar
            value={movie.vote_average}
            maxValue={10}
            className="w-8 h-8 sm:w-10 sm:h-10"
            styles={{
              root: {
                margin: "0 auto",
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
              },
              path: {
                stroke:
                  movie.vote_average > 7
                    ? "#10B981"
                    : movie.vote_average > 5
                    ? "#F59E0B"
                    : "#EF4444",
                strokeWidth: "5",
              },
              trail: {
                stroke: "#ffffff40",
              },
            }}
          />
        </div>

        <h1 className="line-clamp-1 text-light font-bold text-sm">
          {movie.title}
        </h1>
      </div>
    </Link>
  );
};

export default MovieCard;
