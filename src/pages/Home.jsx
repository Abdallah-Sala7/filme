import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import { gridIcon, poster, starIcon } from "../assets";
import { MovieCard } from "../components";

const Home = () => {
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
            <div className="relative z-10 p-8 flex flex-col justify-end rounded-lg overflow-hidden w-full aspect-video">
              <a href="#" className="absolute inset-0 flex -z-10">
                <img
                  src={poster}
                  alt=""
                  className="w-full h-full object-cover filter brightness-50"
                />
              </a>

              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-semibold text-lg text-white capitalize">
                  The Final Season{" "}
                </h1>

                <div className="flex items-center gap-1 py-0.5 px-1 bg-yellow rounded-md">
                  <img
                    src={starIcon}
                    alt="star icon"
                    className="w-4 h-4 object-contain invert"
                  />
                  <span className="font-semibold text-white">8.3/10</span>
                </div>
              </div>

              <p className="hidden text-white text-sm leading-6 md:pr-16 lg:pr-40 md:block">
                The survivors of a plane crash find themselves stranded on a
                mysterious island. They are forced to work together for their
                survival when they realise that they...
              </p>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="relative z-10 p-8 flex flex-col justify-end rounded-lg overflow-hidden w-full aspect-video">
              <a href="#" className="absolute inset-0 flex -z-10">
                <img
                  src={poster}
                  alt=""
                  className="w-full h-full object-cover filter brightness-50"
                />
              </a>

              <div className="flex items-center gap-3 mb-2">
                <h1 className="font-semibold text-lg text-white capitalize">
                  The Final Season{" "}
                </h1>

                <div className="flex items-center gap-1 py-0.5 px-1 bg-yellow rounded-md">
                  <img
                    src={starIcon}
                    alt="star icon"
                    className="w-4 h-4 object-contain invert"
                  />
                  <span className="font-semibold text-white">8.3/10</span>
                </div>
              </div>

              <p className="hidden text-white text-sm leading-6 md:pr-16 lg:pr-40 md:block">
                The survivors of a plane crash find themselves stranded on a
                mysterious island. They are forced to work together for their
                survival when they realise that they...
              </p>
            </div>
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
      </section> */}

      <section className="mb-5">
        <a href="#" className="flex justify-between items-center">
          <h1 className="text-yellow font-semibold text-xl capitalize">
            top rated
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

export default Home;
