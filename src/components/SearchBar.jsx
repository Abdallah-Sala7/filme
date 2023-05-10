import { searchIcon } from "../assets";

const SearchBar = () => {
  return (
    <div className="relative w-full h-full">
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
      />

      <a
        href="#"
        className="absolute top-1/2 -translate-y-1/2 right-0 pr-3 pl-2 border-l border-yellow text-white font-semibold"
      >
        search
      </a>
    </div>
  );
};

export default SearchBar;
