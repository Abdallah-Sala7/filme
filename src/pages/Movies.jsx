import { useEffect, useState } from "react";
import { LoadingCard, MovieCard, MoviesFilter } from "../components";
import { useSelector } from "react-redux";

import {
  useGetNewMovieQuery,
  useGetOldMovieQuery,
  useGetPopularMovieQuery,
  useGetTopRatedMovieQuery,
} from "../app/server/movieApi";

const Movies = () => {
  const [moviePage, setMoviePage] = useState(1);
  const [movieList, setMovieList] = useState([]);
  const { sortBy } = useSelector((state) => state.filter);

  const { data: popularMovie, isSuccess: popularSuccess, isLoading : popularLoading } =
    useGetPopularMovieQuery(moviePage);

  const { data: topRateMovie, isSuccess: topRateSuccess, isLoading : topRateLoading } =
    useGetTopRatedMovieQuery(moviePage);

  const { data: oldMovie, isSuccess: oldSuccess, isLoading : oldLoading } =
    useGetOldMovieQuery(moviePage);

  const { data: newMovie, isSuccess: newSuccess, isLoading : newLoading  } =
    useGetNewMovieQuery(moviePage);

  useEffect(() => {
    if (sortBy === "rating" && topRateSuccess) {
      setMovieList(topRateMovie.results);
    } else if (sortBy === "popular" && popularSuccess) {
      setMovieList(popularMovie.results);
    } else if (sortBy === "oldest" && oldSuccess) {
      setMovieList(oldMovie.results);
    } else if (sortBy === "all" && newSuccess) {
      setMovieList(newMovie.results);
    }
  }, [sortBy, popularSuccess, topRateSuccess, oldSuccess, newSuccess]);

  useEffect(() => {
    if (sortBy === "rating" && topRateSuccess) {
      const removeDuplicate = topRateMovie.results.filter(
        (movie) => !movieList.find((item) => item.id === movie.id)
      );
      setMovieList([...movieList, ...removeDuplicate]);
    } else if (sortBy === "popular" && popularSuccess) {
      const removeDuplicate = popularMovie.results.filter(
        (movie) => !movieList.find((item) => item.id === movie.id)
      );
      setMovieList([...movieList, ...removeDuplicate]);      
    } else if (sortBy === "oldest" && oldSuccess) {
      const removeDuplicate = oldMovie.results.filter(
        (movie) => !movieList.find((item) => item.id === movie.id)
      );
      setMovieList([...movieList, ...removeDuplicate]);
    } else if (sortBy === "all" && newSuccess) {
      const removeDuplicate = newMovie.results.filter(
        (movie) => !movieList.find((item) => item.id === movie.id)
      );
      setMovieList([...movieList, ...removeDuplicate]);
    }
  }, [
    moviePage,
    popularSuccess,
    topRateSuccess,
    oldSuccess,
    newSuccess
  ]);

  return (
    <>
      <MoviesFilter />

      <section className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 md:grid-cols-5 md:gap-5 xl:grid-cols-6">
        {newSuccess || popularSuccess || topRateSuccess || oldSuccess ? (
          movieList.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        ) : (
          <>
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
            <LoadingCard />
          </>
        )}
      </section>

      <div className="flex justify-center">
        <button
          className="bg-yellow text-black font-semibold px-5 py-2 rounded-md active:bg-red-800"
          onClick={() => setMoviePage(moviePage + 1)}
        >
          {
            (popularLoading || topRateLoading || oldLoading || newLoading)? "Loading..." : "Load More"
          }
        </button>
      </div>
    </>
  );
};

export default Movies;
