import { useDispatch, useSelector } from "react-redux";
import { setGenre } from "../app/reducer/filterSlice";
import { useState } from "react";

const SelectOptions = () => {
  const dispatch = useDispatch();

  const [openSelect, setOpenSelect] = useState(false);
  const { genre } = useSelector((state) => state.filter);

  const genres = {
    All: "all",
    Action: 28,
    Adventure: 12,
    Animation: 16,
    Comedy: 35,
    Crime: 80,
    Documentary: 99,
    Drama: 18,
    Family: 10751,
    Fantasy: 14,
    History: 36,
    Horror: 27,
    Music: 10402,
    Mystery: 9648,
    Romance: 10749,
    "Science Fiction": 878,
    "TV Movie": 10770,
    Thriller: 53,
    War: 10752,
    Western: 37,
  };

  const handlegenres = (e, genre) => {
    dispatch(setGenre(genre));
    setOpenSelect(false);
    e.preventDefault();
  };

  return (
    <div className="relative w-32 flex justify-between items-center font-semibold border border-light sm:w-40">
      <p
        onClick={() => setOpenSelect(!openSelect)}
        className="px-2 py-1 text-light cursor-pointer w-full"
      >
        {genre.title}
      </p>

      {openSelect && (
        <>
          <div className="absolute top-full left-0 z-20 translate-y-1 w-full max-h-64 overflow-auto flex flex-col gap-0.5 py-3 bg-dark border border-light">
            {Object.keys(genres).map((genre, index) => (
              <a
                href="#"
                key={index}
                className="text-grayDark px-4 py-2 hover:bg-grayLighter"
                onClick={(e) => {
                  handlegenres(e, { title: genre, id: genres[genre] });
                }}
              >
                {genre}
              </a>
            ))}
          </div>

          <div
            onClick={() => setOpenSelect(false)}
            className="fixed inset-0 z-10"
          ></div>
        </>
      )}
    </div>
  );
};

export default SelectOptions;
