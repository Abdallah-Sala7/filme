import { useEffect } from "react";
import { LoadingCard, MovieCard, MoviesFilter } from "../components";
import { useDispatch, useSelector } from "react-redux";
import { useGetAllMovieQuery } from "../app/server/movieApi";
import {
  decrementPage,
  incrementPage,
  resetePage,
} from "../app/reducer/filterSlice";

const Movies = () => {
  const dispatch = useDispatch();
  const { sortBy, genre, page } = useSelector((state) => state.filter);
  const { data, isSuccess, error } = useGetAllMovieQuery({
    page,
    genre: genre.id,
    sortBy,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [page]);

  useEffect(() => {
    dispatch(resetePage());
  }, [sortBy, genre]);
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
              className="bg-yellow text-black capitalize font-semibold px-5 py-2 rounded-md"
              onClick={() => dispatch(decrementPage())}
              disabled={page === 1}
            >
              prev
            </button>

            <p className="text-light font-semibold">
              {data?.page} / {data?.total_pages}
            </p>

            <button
              className="bg-yellow text-black capitalize font-semibold px-5 py-2 rounded-md"
              onClick={() => dispatch(incrementPage())}
              disabled={data?.page === data?.total_pages}
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
          <LoadingCard />
        </section>
      )}
    </>
  );
};

export default Movies;
