import { useDispatch, useSelector } from "react-redux";
import { resetePage, setGenre } from "../app/reducer/filterSlice";
import { useState } from "react";
import { genres } from "../data/genres_data";
import { downArrowIcon } from "../assets";

const SelectOptions = () => {
  const dispatch = useDispatch();

  const [openSelect, setOpenSelect] = useState(false);
  const { genre } = useSelector((state) => state.filter);

  const handlegenres = (e, genre) => {
    dispatch(setGenre(genre));
    dispatch(resetePage());
    setOpenSelect(false);
    e.preventDefault();
  };

  return (
    <div className="relative w-32 font-semibold border border-light sm:w-40">
      <div
        onClick={() => setOpenSelect(!openSelect)}
        className="py-1 px-2 text-light cursor-pointer w-full flex justify-between items-center "
      >
        <span>{genre.title}</span>
        
        <img
          src={downArrowIcon}
          alt="down arrow icon"
          className={`w-5 h-5 invert transition-transform pointer-events-none ${
            openSelect && "rotate-180"
          }`}
        />
      </div>

      <div
        className={`absolute top-full left-0 z-20 translate-y-1 w-full max-h-0  flex flex-col gap-0.5  bg-dark border-light ${
          openSelect
            ? "max-h-60 py-2 border overflow-auto transition-all"
            : "overflow-hidden"
        }`}
      >
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

      {openSelect && (
        <>
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
