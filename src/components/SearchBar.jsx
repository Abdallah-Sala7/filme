import { useState } from "react";
import { searchIcon } from "../assets";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../app/reducer/appSlice";

const SearchBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [searchTxt, setSearchTxt] = useState("");

  const handleSearch = (e) => {
    if (searchTxt.length > 0) {
      dispatch(setSearchValue(searchTxt));
      navigate("/search");
    }
    e.preventDefault();
  };

  return (
    <div className="relative w-full h-full z-20">
      <span className="absolute top-1/2 left-2 -translate-y-1/2">
        <img
          src={searchIcon}
          alt="search icon"
          className="w-5 h-5 object-contain invert"
        />
      </span>

      <input
        type="text"
        className="w-full h-full border border-yellow outline-none bg-black text-white text-sm rounded-md pl-9 pr-20"
        placeholder="Movies"
        onChange={(e) => setSearchTxt(e.target.value)}
        value={searchTxt}
      />

      <a
        href="#"
        className="absolute top-1/2 -translate-y-1/2 right-0 pr-3 pl-2 border-l border-yellow text-white font-semibold"
        onClick={handleSearch}
      >
        search
      </a>
    </div>
  );
};

export default SearchBar;
