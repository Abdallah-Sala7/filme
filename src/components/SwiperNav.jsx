import { useSwiper } from "swiper/react";
import { arrowIcon } from "../assets";

const SwiperNav = () => {
  const swiper = useSwiper();

  return (
    <>
      <button
        className={`absolute top-5 bottom-5 left-0 z-10 w-10 flex justify-center items-center bg-gradient-to-l from-transparent to-black`}
        name="next-btn"
        title="Next"
        aria-label="Next"
        onClick={() => swiper.slidePrev()}
      >
        <img
          src={arrowIcon}
          alt="arrow icon"
          className="w-5 h-5 object-contain invert rotate-180"
        />
      </button>

      <button
        className={`absolute top-5 bottom-5 right-0 z-10 w-10 flex justify-center items-center bg-gradient-to-r from-transparent to-black`}
        name="prev-btn"
        title="Previous"
        aria-label="Previous"
        onClick={() => swiper.slideNext()}
      >
        <img
          src={arrowIcon}
          alt="arrow icon"
          className="w-5 h-5 object-contain invert"
        />
      </button>
    </>
  );
};

export default SwiperNav;
