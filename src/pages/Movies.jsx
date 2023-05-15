import { useEffect } from "react";
import { LoadingCard, MovieCard, MoviesFilter } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllMovieQuery } from "../app/server/movieApi";
import { decrementPage, incrementPage } from "../app/reducer/filterSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const { sortBy, genre, page } = useSelector((state) => state.filter);

  const { data, isSuccess } = useGetAllMovieQuery({
    page,
    genre: genre.id,
    sortBy,
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [data?.page, page]);

  return (
    <>
      <MoviesFilter />
      {isSuccess ? (
        <>
          <section className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 md:grid-cols-5 md:gap-5 xl:grid-cols-6">
            {data?.results?.map((movie) => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </section>

          <div className="flex justify-center items-center gap-3 mb-4">
            <button
              className="bg-yellow text-black capitalize font-semibold px-5 py-2 rounded-md disabled:opacity-50"
              onClick={() => dispatch(decrementPage())}
              disabled={page === 1}
            >
              prev
            </button>

            <button
              className={`bg-yellow text-black capitalize font-semibold px-5 py-2 rounded-md disabled:opacity-50`}
              onClick={() => dispatch(incrementPage())}
              disabled={data?.results.length < 20}
            >
              next
            </button>
          </div>
        </>
      ) : (
        <section className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 md:grid-cols-5 md:gap-5 xl:grid-cols-6">
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
          <LoadingCard />
        </section>
      )}
    </>
  );
};

export default Movies;
