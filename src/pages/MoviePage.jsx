import React from "react";
import {
  heartIcon,
  poster,
  shareIcon,
  starIcon,
} from "../assets";

import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import { MovieCard, MovieOptions } from "../components";

const MoviePage = () => {
  return (
    <>
      <header className="relative z-10 flex  items-end w-full aspect-video max-h-80 rounded-lg overflow-hidden">
        <div className="absolute inset-0 -z-10 w-full h-full">
          <img
            src={poster}
            alt="poster img"
            className="w-full h-full object-cover bg-fixed brightness-50"
          />
        </div>

        <div className="w-full px-4 py-2 sm:py-4 sm:px-8">
          <div className="flex justify-between items-center mb-3 sm:mb-5">
            <h1 className="text-white text-lg font-bold uppercase sm:text-3xl">
              My last hope
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
              <span className="relative after:absolute after:top-1/2 after:-left-2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full after:bg-grayDark first-of-type:after:w-0">
                action
              </span>

              <span className="relative after:absolute after:top-1/2 after:-left-2 after:-translate-y-1/2 after:w-1 after:h-1 after:rounded-full after:bg-grayDark first-of-type:after:w-0">
                action
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

          <p className="text-xs text-grayDark font-semibold sm:text-sm">
            Frustrated by the constant quarrel between the members of his
            dysfunctional family, Max loses interest to celebrate Christmas,
            awakening Krampus, a demon who will punish his entire family.
          </p>
        </div>
      </section>

      <section>
        <h1 className="text-yellow font-semibold text-xl capitalize">
          for you
        </h1>

        <Swiper
          spaceBetween={10}
          slidesPerView={2.2}
          breakpoints={{
            576: {
              slidesPerView: 3.7,
            },
            768: {
              slidesPerView: 4.5,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 5.5,
            },
            1200: {
              slidesPerView: 6.5,
            },
          }}
          modules={[Autoplay, Pagination]}
          className="!py-5"
        >
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>

          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
          
          <SwiperSlide>
            <MovieCard />
          </SwiperSlide>
        </Swiper>
      </section>
    </>
  );
};

export default MoviePage;
