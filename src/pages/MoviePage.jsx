import React from "react";
import { heartIcon, poster, shareIcon, starIcon } from "../assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { LoadingCard, MovieCard, MovieOptions } from "../components";
import { useGetPopularMovieQuery } from "../app/server/movieApi";
import { useGetMovieDetailsQuery } from "../app/server/movieDetailsApi";
import { useParams } from "react-router-dom";

const MoviePage = () => {
  const param = useParams().movieId;

  const { data, isLoading } = useGetPopularMovieQuery();

  const { data: movieData, isLoading: movieLoading } =
    useGetMovieDetailsQuery(param);

  return (
    <>
      <header className="relative z-10 flex  items-end w-full aspect-video max-h-96 rounded-lg overflow-hidden">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <img
            src={
              movieData?.backdrop_path
                ? `https://image.tmdb.org/t/p/original/${movieData?.backdrop_path}`
                : poster
            }
            alt="poster img"
            className="w-full h-full object-cover bg-fixed brightness-50"
          />
        </div>

        <div className="w-full px-4 py-2 sm:py-4 sm:px-8">
          <div className="flex justify-between items-center mb-3 sm:mb-5">
            <h1 className="text-white text-lg font-bold uppercase sm:text-3xl">
              {movieData?.title}
            </h1>

            <div className="flex items-center gap-2">
              <a
                href="#"
                className="opacity-70 w-9 h-9 flex items-center justify-center rounded-full border border-white hover:bg-grayHover hover:opacity-100 sm:w-12 sm:h-12"
              >
                <img
                  src={heartIcon}
                  alt="heart icon"
                  className="w-4 h-4 object-contain invert sm:w-5 sm:h-5"
                />
              </a>

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

          <div className="flex justify-between items-center">
            <div className="flex items-center text-grayDark text-xs font-bold gap-3 sm:text-sm">
              {movieData?.genres.map((genre, idx) => (
                <span
                  key={idx}
                  className="relative after:absolute after:top-1/2 after:-left-2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full after:bg-grayDark first-of-type:after:w-0"
                >
                  {genre.name}
                </span>
              ))}

              <span className="relative after:absolute after:top-1/2 after:-left-2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full after:bg-grayDark first-of-type:after:w-0">
                {movieData.popularity}
              </span>
            </div>

            <div className="flex items-center gap-1 sm:gap-2">
              <p className="text-grayDark font-bold text-sm sm:text-base">
                4.5<span className="text-xs sm:text-sm">/5</span>
              </p>

              <div className="flex items-center sm:gap-0.5">
                <img
                  src={starIcon}
                  alt="star icon"
                  className="w-4 h-4 object-contain yellow-filter sm:h-5 sm:w-5"
                />
                <img
                  src={starIcon}
                  alt="star icon"
                  className="w-4 h-4 object-contain yellow-filter sm:h-5 sm:w-5"
                />
                <img
                  src={starIcon}
                  alt="star icon"
                  className="w-4 h-4 object-contain yellow-filter sm:h-5 sm:w-5"
                />
                <img
                  src={starIcon}
                  alt="star icon"
                  className="w-4 h-4 object-contain yellow-filter sm:h-5 sm:w-5"
                />
                <img
                  src={starIcon}
                  alt="star icon"
                  className="w-4 h-4 object-contain yellow-filter sm:h-5 sm:w-5"
                />
              </div>

              <p className="hidden text-grayDark font-bold sm:block">
                8.5<span className="text-xs sm:text-sm">/10</span>
              </p>

              <div className="hidden px-1 rounded bg-yellow sm:block">
                <span className="text-dark font-bold text-sm">IMDb</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-5">
        <MovieOptions />

        <div>
          <h1 className="capitalize text-light font-semibold text-xl mb-2">
            overview
          </h1>

          <p className="text-sm text-grayDark font-semibold sm:text-base">
            {movieData?.overview}
          </p>
        </div>
      </section>

      <section>
        <h1 className="text-yellow font-semibold text-xl capitalize">
          for you
        </h1>

        <Swiper
          spaceBetween={10}
          slidesPerView={2.5}
          breakpoints={{
            576: {
              slidesPerView: 3.2,
            },
            768: {
              slidesPerView: 4.25,
              spaceBetween: 15,
            },
            1024: {
              slidesPerView: 5.25,
            },
            1200: {
              slidesPerView: 6.25,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="!py-5"
        >
          {isLoading ? (
            <>
              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>

              <SwiperSlide>
                <LoadingCard />
              </SwiperSlide>
            </>
          ) : (
            data.results.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard movie={item} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </section>
    </>
  );
};

export default MoviePage;
