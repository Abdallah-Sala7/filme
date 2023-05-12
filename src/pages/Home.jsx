import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, FreeMode } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/free-mode";

import { gridIcon, playIcon, poster, poster2, starIcon } from "../assets";
import { HeaderCard, LoadingCard, MovieCard, SwiperNav } from "../components";

import { useGetAllMovieQuery } from "../app/server/movieApi";

const Home = () => {
  const { data: popularMovie, isSuccess: popularSuccess } = useGetAllMovieQuery(
    { page: 1, genre: "all", sortBy: "popularity.desc" }
  );
  const { data: topRateMovie, isSuccess: topRateSuccess } = useGetAllMovieQuery(
    { page: 1, genre: "all", sortBy: "vote_average.desc" }
  );

  return (
    <>
      <header className="mb-10">
        <Swiper
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 1.5,
            },
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
        >
          <SwiperSlide>
            <HeaderCard poster={poster} title={"The Final Season"} rate={9.2} />
          </SwiperSlide>
          <SwiperSlide>
            <HeaderCard poster={poster2} title={"Breaking bad"} rate={8.5} />
          </SwiperSlide>
        </Swiper>
      </header>

      {/* <section className="mb-5">
        <a href="#" className="flex justify-between items-center">
          <h1 className="text-yellow font-semibold text-xl capitalize">
            for you
          </h1>

          <img
            src={gridIcon}
            alt=""
            className="w-4 h-4 object-contain yellow-filter"
          />
        </a>

        <Swiper
          spaceBetween={10}
          slidesPerView={2.2}
          breakpoints={{
            576: {
              slidesPerView: 3.4,
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
      </section> */}

      <section className="mb-5">
        <a href="#" className="flex justify-between items-center">
          <h1 className="text-yellow font-semibold text-xl capitalize">
            top rated
          </h1>

          <img
            src={gridIcon}
            alt="grid icon"
            className="w-4 h-4 object-contain yellow-filter"
          />
        </a>

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
          {!topRateSuccess ? (
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
            topRateMovie.results.map((item, index) => (
              <SwiperSlide key={index}>
                <MovieCard movie={item} />
              </SwiperSlide>
            ))
          )}
          <SwiperNav />
        </Swiper>
      </section>

      <section className="mb-5">
        <a href="#" className="flex justify-between items-center">
          <h1 className="text-yellow font-semibold text-xl capitalize">
            popular
          </h1>

          <img
            src={gridIcon}
            alt=""
            className="w-4 h-4 object-contain yellow-filter"
          />
        </a>

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
          {!popularSuccess ? (
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
            popularMovie.results.map((item, index) => (
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

export default Home;
