import React from "react";
import { useGetSearchQuery } from "../app/server/searchApi";
import { useSelector } from "react-redux";
import { LoadingCard, MovieCard } from "../components";
import { Link } from "react-router-dom";

const Search = () => {
  const { searchValue } = useSelector((state) => state.app);
  const { data, isSuccess, error } = useGetSearchQuery(searchValue);
  console.log(error);

  return (
    <>
      {isSuccess ? (
        <>
          {data?.results.length > 0 ? (
            <section className="relative grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 md:grid-cols-5 md:gap-5 xl:grid-cols-6">
              {data?.results.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
              ))}
            </section>
          ) : (
            <div className="w-full py-40 flex items-center justify-center">
              <p className="text-white text-3xl font-semibold md:text-4xl">
                Movie not found back to{" "}
                <Link className="text-yellow" to={"/"}>
                  {" "}
                  Home
                </Link>
              </p>{" "}
            </div>
          )}
        </>
      ) : (
        <section className="relative grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 md:grid-cols-5 md:gap-5 xl:grid-cols-6">
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

export default Search;
