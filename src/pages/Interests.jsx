import { useState } from "react";
import { genres } from "../data/genres_data";
import { Link } from "react-router-dom";

const Interests = () => {
  const [interestsGenre, setInterestsGenre] = useState([]);
  const [openToast, setOpenToast] = useState(false);

  const handlegenres = (e, genre) => {
    if (!interestsGenre.includes(genre)) {
      if (interestsGenre.length < 3) {
        setInterestsGenre([...interestsGenre, genre]);
      } else {
        setOpenToast(true);
        setTimeout(() => {
          setOpenToast(false);
        }, 3000);
      }
    } else {
      setInterestsGenre(interestsGenre.filter((g) => g !== genre));
    }
    e.preventDefault();
  };

  return (
    <section className="py-16 px-2 bg-dark md:py-20">
      <div className="w-full max-w-xl mx-auto mb-5">
        <div className="text-center mb-5">
          <h1 className="text-lg text-white font-semibold">
            Let's take a look at your interests
          </h1>

          <p className="text-light">What are your favorite genres ?</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-1.5 mb-5 md:gap-2">
          {Object.keys(genres).map((genre, index) => (
            <a
              href="#"
              key={index}
              className={`py-2 px-3 rounded font-bold md:text-lg transition-all ${
                interestsGenre.includes(genres[genre])
                  ? "bg-yellow text-dark"
                  : "bg-grayLighter text-light"
              }`}
              onClick={(e) => {
                handlegenres(e, genres[genre]);
              }}
            >
              {genre}
            </a>
          ))}
        </div>
      </div>

      <div
        className={`fixed top-3 right-1.5 z-50 border border-yellow rounded-md transition-all md:translate-y-0 ${
          openToast ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"
        }`}
      >
        <div className="bg-dark text-yellow py-4 px-6 font-bold rounded-md md:text-lg">
          <p className="text-center">You can only choose 3 genres</p>
        </div>
      </div>

      <Link
        to={"/"}
        className={`flex items-center justify-center mx-auto w-9/12 py-3 rounded-md capitalize text-lg font-bold bg-yellow text-white md:text-xl md:w-255 ${
          interestsGenre.length === 3
            ? "opacity-100 after-animation"
            : "opacity-40 pointer-events-none"
        }`}
      >
        next
      </Link>
    </section>
  );
};

export default Interests;
