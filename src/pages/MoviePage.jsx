import { useGetMovieDetailsQuery } from "../app/server/movieDetailsApi";
import { useParams } from "react-router-dom";

import {
  CastSwiper,
  LoadingMoviePage,
  MovieOptions,
  MySwiper,
} from "../components";

import { poster, shareIcon } from "../assets";
import { Rating } from "@mui/material";
import { useGetForYouMoviesQuery } from "../app/server/forYouMoviesApi";
import { useEffect, useState } from "react";

const MoviePage = () => {
  const param = useParams();
  const [capitalizeTitle, setCapitalizeTitle] = useState("");

  const { data: movieData, isSuccess: movieSuccess } = useGetMovieDetailsQuery(
    param.movieId
  );

  const { data: forYouIds, error } = useGetForYouMoviesQuery(capitalizeTitle);

  useEffect(() => {
    let title = "";
    if (movieData?.title.split(" ").length > 1) {
      title = movieData?.title
        .split(" ")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
    } else {
      title =
        movieData?.title.charAt(0).toUpperCase() +
        movieData?.title.slice(1).toLowerCase();
    }

    setCapitalizeTitle(title);
    localStorage.setItem("lastMovie", title);
  }, [movieData?.title]);

  return (
    <>
      <div className="h-full">
        {movieSuccess ? (
          <>
            <header
              className={`relative z-10 flex items-end w-full aspect-video h-64 max-h-96 rounded-lg overflow-hidden bg-fixed bg-cover bg-top bg-no-repeat sm:h-auto`}
              style={{
                backgroundImage: `url(https://image.tmdb.org/t/p/original/${
                  movieData?.backdrop_path
                    ? `https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`
                    : poster
                }`,
              }}
            >
              <div className="absolute inset-0 -z-10 w-full h-full gradient-filter"></div>

              <div className="w-full px-4 py-2 sm:py-4 sm:px-8">
                <div className="flex justify-between items-end mb-1 sm:mb-5">
                  <h1 className="text-white text-lg font-bold uppercase sm:text-3xl">
                    {movieData?.title}
                  </h1>

                  <div className="absolute top-2 right-0 px-4 sm:static sm:w-auto sm:px-0">
                    <a
                      href="#"
                      className="opacity-70 h-9 px-3 flex items-center justify-center gap-2 rounded-full border border-white hover:bg-grayHover hover:opacity-100 sm:h-12 sm:px-5"
                    >
                      <img
                        src={shareIcon}
                        alt="heart icon"
                        className="w-4 h-4 object-contain invert sm:w-5 sm:h-5"
                      />

                      <span className="text-white font-normal uppercase text-sm sm:text-xl">
                        share
                      </span>
                    </a>
                  </div>
                </div>

                <div className="flex flex-col gap-2 sm:justify-between sm:items-center sm:flex-row">
                  <div className="flex items-center text-grayDark text-xs font-bold gap-3 sm:text-sm line-clamp-1">
                    {movieData?.genres.map((genre, idx) => (
                      <span
                        key={idx}
                        className="relative after:absolute after:top-1/2 after:-left-2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full after:bg-grayDark first-of-type:after:w-0"
                      >
                        {genre.name}
                      </span>
                    ))}

                    <span className="relative after:absolute after:top-1/2 after:-left-2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full after:bg-grayDark">
                      {movieData.release_date?.split("-")[0]}
                    </span>
                  </div>

                  <div className="flex items-center gap-1 sm:gap-2">
                    <p className="text-grayDark font-bold text-sm sm:text-base">
                      {Math.min(movieData.vote_average, 10).toFixed(1)}
                      <span className="text-xs sm:text-sm">/10</span>
                    </p>

                    <div className="flex items-center sm:gap-0.5">
                      <Rating
                        name="half-rating-read"
                        value={movieData.vote_average / 2}
                        precision={0.5}
                        size="medium"
                        className="yellow-filter"
                        readOnly
                      />
                    </div>

                    <div className="px-1 rounded bg-yellow">
                      <span className="text-dark font-bold text-sm">TMDB</span>
                    </div>
                  </div>
                </div>
              </div>
            </header>

            <section className="py-5">
              <MovieOptions movie={movieData} />

              <div>
                <h1 className="capitalize text-light font-semibold text-xl mb-2">
                  overview
                </h1>

                <p className="text-sm text-grayDark font-semibold sm:text-base">
                  {movieData?.overview}
                </p>
              </div>
            </section>

            <section className="py-5">
              <h1 className="text-yellow font-semibold text-xl capitalize mb-4">
                for you
              </h1>

              <CastSwiper data={movieData?.credits.cast} />
            </section>
          </>
        ) : (
          <LoadingMoviePage />
        )}
      </div>

      <section>
        <h1 className="text-yellow font-semibold text-xl capitalize">
          for you
        </h1>

        <MySwiper forYouIds={forYouIds} />
      </section>
    </>
  );
};

export default MoviePage;
