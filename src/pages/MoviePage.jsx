import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper";
import { useGetAllMovieQuery } from "../app/server/movieApi";
import { useGetMovieDetailsQuery } from "../app/server/movieDetailsApi";
import { useParams } from "react-router-dom";

import {
  LoadingCard,
  LoadingMoviePage,
  MovieCard,
  MovieOptions,
  SwiperNav,
} from "../components";

import { heartIcon, poster, shareIcon, starIcon } from "../assets";

const MoviePage = () => {
  const param = useParams();

  const { data: forYouData, isSuccess: forYouSuccess } = useGetAllMovieQuery({
    page: 1,
    genre: "all",
    sortBy: "popularity.desc",
  });

  const { data: movieData, isSuccess: movieSuccess } = useGetMovieDetailsQuery(
    param.movieId
  );

  return (
    <>
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

                <div className="absolute top-2 left-0 w-full px-4 flex items-center justify-between gap-2 sm:static sm:w-auto sm:justify-center sm:px-0">
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

                  <p className="text-grayDark font-bold">
                    8.5<span className="text-xs sm:text-sm">/10</span>
                  </p>

                  <div className="px-1 rounded bg-yellow">
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

          <section className="py-5">
            <h1 className="capitalize text-light font-semibold text-xl mb-2">
              cast
            </h1>

            <div className="flex gap-2 overflow-x-auto sm:gap-3 sm:overflow-hidden">
              {movieData?.credits.cast.map((cast, idx) => (
                <div
                  key={idx}
                  className="flex flex-col items-center gap-1 sm:gap-2"
                >
                  <div className="relative w-16 h-w-16 sm:w-28 sm:h-28">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
                      alt="cast"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>

                  <p className="text-center text-grayDark font-semibold text-xs sm:text-sm line-clamp-1">
                    {cast.name}
                  </p>
                </div>
              ))}
            </div>
          </section>
        </>
      ) : (
        <LoadingMoviePage />
      )}

      <section>
        <h1 className="text-yellow font-semibold text-xl capitalize">
          for you
        </h1>

        <Swiper
          spaceBetween={10}
          slidesPerView={2.5}
          freeMode={true}
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
          modules={[Autoplay, Pagination, FreeMode]}
          className="!py-5"
        >
          {!forYouSuccess ? (
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
            forYouData.results.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard movie={item} />
              </SwiperSlide>
            ))
          )}
          <SwiperNav />
        </Swiper>
      </section>
    </>
  );
};

export default MoviePage;
