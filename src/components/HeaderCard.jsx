import { playIcon, starIcon } from "../assets";

const HeaderCard = ({ poster, title, rate }) => {
  return (
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
          {title}{" "}
        </h1>

        <div className="flex items-center gap-1 py-1 px-1.5 bg-yellow rounded">
          <img
            src={starIcon}
            alt="star icon"
            className="w-4 h-4 object-contain invert"
          />
          <span className="font-semibold text-white text-sm">{rate}/10</span>
        </div>
      </div>

      <p className="hidden text-white text-sm leading-6 md:pr-16 lg:pr-40 md:block">
        The survivors of a plane crash find themselves stranded on a mysterious
        island. They are forced to work together for their survival when they
        realise that they...
      </p>

      <button className="absolute bottom-2 right-2 flex items-center gap-0.5 rounded-md text-white font-semibold md:py-2 md:px-4 md:after-animation md:bg-yellow md:right-3 md:bottom-3">
        <img
          src={playIcon}
          alt="play icon"
          className="w-10 h-10 yellow-filter object-contain md:invert md:w-6 md:h-6"
        />
        <span className="hidden md:block ">watch now</span>
      </button>
    </div>
  );
};

export default HeaderCard;
