import React from 'react'
import { MovieCard, MoviesFilter } from '../components'

const Movies = () => {
  return (
    <>
      <MoviesFilter />

      <section className="grid grid-cols-2 gap-4 py-5 sm:grid-cols-4 md:grid-cols-5 md:gap-5 xl:grid-cols-6">
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
        <MovieCard />
      </section>
    </>
  )
}

export default Movies