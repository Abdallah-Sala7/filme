import { useGetAllMovieQuery } from "../app/server/movieApi";
import { setGenre, setSortBy } from "../app/reducer/filterSlice";
import { useGetUpcomingQuery } from "../app/server/movieDetailsApi";
import { Swiper, SwiperSlide } from "swiper/react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Pagination } from "swiper";
import { gridIcon } from "../assets";
import { HeaderCard, LoadingHeader, MySwiper } from "../components";
import { useGetAllInterestsQuery } from "../app/server/interestsApi";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: popularMovie, isSuccess: popularSuccess } = useGetAllMovieQuery(
    { page: 1, genre: "all", sortBy: "popularity.desc" }
  );
  const { data: topRateMovie, isSuccess: topRateSuccess } = useGetAllMovieQuery(
    { page: 1, genre: "all", sortBy: "vote_average.desc" }
  );

  const { data: upcomingMovie, isSuccess: upcomingSuccess } =
    useGetUpcomingQuery();

  const handleGenreClick = (e, sort) => {
    e.preventDefault();
    dispatch(setGenre({ title: "All", id: "all" }));
    dispatch(setSortBy(sort));
    navigate("/movies");
  };

  const interestsGenre = localStorage.getItem("interestsGenre");

  const { data: interestsData, isSuccess: interestsSuccess } =
    useGetAllMovieQuery({
      page: 1,
      genre: interestsGenre,
      sortBy: "vote_average.desc",
    });

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
          loop={true}
          modules={[Pagination]}
          className="header-swiper"
        >
          {upcomingSuccess ? (
            upcomingMovie?.results.slice(0, 3).map((movie) => (
              <SwiperSlide key={movie.id}>
                <HeaderCard movie={movie} />
              </SwiperSlide>
            ))
          ) : (
            <>
              <SwiperSlide>
                <LoadingHeader />
              </SwiperSlide>
              <SwiperSlide>
                <LoadingHeader />
              </SwiperSlide>
            </>
          )}
        </Swiper>
      </header>

      {interestsGenre && (
        <section className="mb-5">
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

          <MySwiper
            data={interestsData?.results}
            isLoading={interestsSuccess}
          />
        </section>
      )}

      <section className="mb-5">
        <a
          href="#"
          className="flex justify-between items-center"
          onClick={(e) => {
            handleGenreClick(e, "vote_average.desc");
          }}
        >
          <h1 className="text-yellow font-semibold text-xl capitalize">
            top rated
          </h1>

          <img
            src={gridIcon}
            alt="grid icon"
            className="w-4 h-4 object-contain yellow-filter"
          />
        </a>

        <MySwiper data={topRateMovie?.results} isLoading={topRateSuccess} />
      </section>

      <section className="mb-5">
        <a
          href="#"
          className="flex justify-between items-center"
          onClick={(e) => {
            handleGenreClick(e, "popularity.desc");
          }}
        >
          <h1 className="text-yellow font-semibold text-xl capitalize">
            popular
          </h1>

          <img
            src={gridIcon}
            alt=""
            className="w-4 h-4 object-contain yellow-filter"
          />
        </a>

        <MySwiper data={popularMovie?.results} isLoading={popularSuccess} />
      </section>
    </>
  );
};

export default Home;
