const HeaderCard = ({ movie }) => {
  const date = new Date(movie?.release_date).toDateString().split(" ");

  return (
    <div className="relative z-10 px-3 py-6 flex flex-col justify-end rounded-lg overflow-hidden w-full aspect-video h-64 max-h-96 sm:h-auto md:py-8 md:px-6">
      <div className="absolute inset-0 flex -z-10">
        <img
          src={"https://image.tmdb.org/t/p/original" + movie?.backdrop_path}
          alt={movie?.title}
          className="w-full h-full object-cover filter brightness-50"
        />
      </div>

      <div className="flex items-center gap-3 mb-2">
        <h1 className="font-semibold text-base text-white sm:text-lg">
          {movie?.title}{" "}
        </h1>

        <div className="flex items-center gap-1 p-1 bg-yellow rounded after-animation sm:py-1 sm:px-1.5">
          <span className="font-semibold text-xs capitalize text-white sm:text-sm">
            upcomming
          </span>
        </div>
      </div>

      <p className="line-clamp-3 capitalize text-white text-sm md:line-clamp-none md:text-base">
        {movie?.overview}
      </p>

      <p className="absolute font-serif top-2 right-2 flex flex-col items-center justify-center gap-0.5 rounded-md text-white after-animationbg-yellow">
        <span className="text-2xl font-bold !leading-none sm:text-4xl">
          {date[2]}
        </span>

        <span className="text-sm font-medium sm:text-base">
          {date[1]} - {date[3]}
        </span>
      </p>
    </div>
  );
};

export default HeaderCard;
