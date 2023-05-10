import React, { useState } from "react";
import { allIcon, calendarIcon, fireIcon, rateStarIcon } from "../assets";
import { useDispatch, useSelector } from "react-redux";
import { setFilter, setSortBy } from "../app/reducer/filterSlice";

const MoviesFilter = () => {
  const dispatch = useDispatch();
  const { sortBy } = useSelector((state) => state.filter);

  const handleSort = (e, title) => {
    dispatch(setSortBy(title));
    e.preventDefault();
  };

  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-1">
        <select
          name="genre"
          id="genre"
          className="py-1 pl-4 pr-10 text-lg font-semibold border bg-dark rounded-none text-light cursor-pointer"
          onChange={(e) => dispatch(setFilter(e.target.value))}
        >
          <option value="all">All</option>
          <option value="action">Action</option>
          <option value="drama">Drama</option>
          <option value="comedy">Comedy</option>
          <option value="horror">Horror</option>
        </select>
      </div>

      <div className="flex items-center">
        <a
          href="#"
          className={`flex items-center gap-0.5 py-1 px-3 border border-light transition hover:bg-light group ${
            sortBy === "all" ? "bg-light text-dark" : "text-light"
          }`}
          title="All"
          aria-label="All movies"
          onClick={(e) => handleSort(e, "all")}
        >
          <img
            src={allIcon}
            alt="all icon"
            className={`w-6 h-6 object-contain transition-all group-hover:invert-0 ${
              sortBy === "all" ? "invert-0" : "invert"
            }`}
          />

          <span className="hidden text-sm font-semibold capitalize transition-colors group-hover:text-dark sm:block">
            All
          </span>
        </a>

        <a
          href="#"
          className={`flex items-center gap-0.5 py-1 px-3 border border-light transition hover:bg-light group ${
            sortBy === "rating" ? "bg-light text-dark" : "text-light"
          }`}
          title="Rating"
          aria-label="Sort by rating"
          onClick={(e) => handleSort(e, "rating")}
        >
          <img
            src={rateStarIcon}
            alt="all icon"
            className={`w-6 h-6 object-contain transition-all group-hover:invert-0 ${
              sortBy === "rating" ? "invert-0" : "invert"
            }`}
          />

          <span className="hidden text-sm font-semibold capitalize transition-colors group-hover:text-dark sm:block">
            top rated
          </span>
        </a>

        <a
          href="#"
          className={`flex items-center gap-0.5 py-1 px-3 border border-light transition hover:bg-light group ${
            sortBy === "popular" ? "bg-light text-dark" : "text-light"
          }`}
          title="popular"
          aria-label="Sort by popular"
          onClick={(e) => handleSort(e, "popular")}
        >
          <img
            src={fireIcon}
            alt="all icon"
            className={`w-6 h-6 object-contain transition-all group-hover:invert-0 ${
              sortBy === "popular" ? "invert-0" : "invert"
            }`}
          />

          <span className="hidden text-sm font-semibold capitalize transition-colors group-hover:text-dark sm:block">
            popular
          </span>
        </a>

        <a
          href="#"
          className={`flex items-center gap-0.5 py-1 px-3 border border-light transition hover:bg-light group ${
            sortBy === "oldest" ? "bg-light text-dark" : "text-light"
          }`}
          title="oldest"
          aria-label="Sort by oldest"
          onClick={(e) => handleSort(e, "oldest")}
        >
          <img
            src={calendarIcon}
            alt="all icon"
            className={`w-6 h-6 object-contain transition-all group-hover:invert-0 ${
              sortBy === "oldest" ? "invert-0" : "invert"
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
