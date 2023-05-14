import { allIcon, calendarIcon, fireIcon, rateStarIcon } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { resetePage, setSortBy } from "../app/reducer/filterSlice";
import SelectOptions from "./SelectOptions";

const MoviesFilter = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.filter);

  const handleSort = (e, title) => {
    dispatch(setSortBy(title));
    dispatch(resetePage());
    e.preventDefault();
  };

  return (
    <div className="flex justify-between items-stretch">
      <SelectOptions />

      <div className="flex items-center">
        <a
          href="#"
          className={`flex items-center gap-0.5 py-1 px-3 border border-light transition hover:bg-light group ${
            sortBy === "primary_release_date.desc" ? "bg-light text-dark" : "text-light"
          }`}
          title="Newest"
          aria-label="Newest movies"
          onClick={(e) => handleSort(e, "primary_release_date.desc")}
        >
          <img
            src={allIcon}
            alt="all icon"
            className={`w-6 h-6 object-contain transition-all group-hover:invert-0 ${
              sortBy === "primary_release_date.desc" ? "invert-0" : "invert"
            }`}
          />

          <span className="hidden text-sm font-semibold capitalize transition-colors group-hover:text-dark sm:block">
            All
          </span>
        </a>

        <a
          href="#"
          className={`flex items-center gap-0.5 py-1 px-3 border border-light transition hover:bg-light group ${
            sortBy === "vote_average.desc" ? "bg-light text-dark" : "text-light"
          }`}
          title="Rating"
          aria-label="Sort by rating"
          onClick={(e) => handleSort(e, "vote_average.desc")}
        >
          <img
            src={rateStarIcon}
            alt="all icon"
            className={`w-6 h-6 object-contain transition-all group-hover:invert-0 ${
              sortBy === "vote_average.desc" ? "invert-0" : "invert"
            }`}
          />

          <span className="hidden text-sm font-semibold capitalize transition-colors group-hover:text-dark sm:block">
            top rated
          </span>
        </a>

        <a
          href="#"
          className={`flex items-center gap-0.5 py-1 px-3 border border-light transition hover:bg-light group ${
            sortBy === "popularity.desc" ? "bg-light text-dark" : "text-light"
          }`}
          title="popularity.desc"
          aria-label="Sort by popular"
          onClick={(e) => handleSort(e, "popularity.desc")}
        >
          <img
            src={fireIcon}
            alt="all icon"
            className={`w-6 h-6 object-contain transition-all group-hover:invert-0 ${
              sortBy === "popularity.desc" ? "invert-0" : "invert"
            }`}
          />

          <span className="hidden text-sm font-semibold capitalize transition-colors group-hover:text-dark sm:block">
            popular
          </span>
        </a>

        <a
          href="#"
          className={`flex items-center gap-0.5 py-1 px-3 border border-light transition hover:bg-light group ${
            sortBy === "primary_release_date.asc" ? "bg-light text-dark" : "text-light"
          }`}
          title="primary_release_date.asc"
          aria-label="Sort by oldest"
          onClick={(e) => handleSort(e, "primary_release_date.asc")}
        >
          <img
            src={calendarIcon}
            alt="all icon"
            className={`w-6 h-6 object-contain transition-all group-hover:invert-0 ${
              sortBy === "primary_release_date.asc" ? "invert-0" : "invert"
            }`}
          />

          <span className="hidden text-sm font-semibold capitalize transition-colors group-hover:text-dark sm:block">
            oldest
          </span>
        </a>
      </div>
    </div>
  );
};

export default MoviesFilter;
