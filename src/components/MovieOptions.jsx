import { useState } from "react";
import { playIcon, rateStarIcon, speakerIcon } from "../assets";
import { Box, Modal } from "@mui/material";
import RatingOption from "./RatingOption";

const MovieOptions = ({ movie }) => {
  const [openRating, setOpenRating] = useState(false);
  const [openTrailer, setOpenTrailer] = useState(false);

  return (
    <div className="relative w-full flex items-center gap-2 mb-5 flex-wrap">
      <a
        href={movie?.homepage}
        target="_blank"
        rel="noreferrer"
        title="play movie"
        className="flex-shrink-0 flex items-center gap-1 rounded-md py-3 px-4 transition-colors bg-grayLight hover:bg-grayHover sm:py-3 sm:px-4"
      >
        <img
          src={playIcon}
          alt="play icon"
          className="w-4 h-4 object-contain gray-filter sm:w-5 sm:h-5"
        />

        <span className="text-sm font-bold text-grayDark capitalize sm:text-lg">
          Play Movie
        </span>
      </a>

      <button
        onClick={() => setOpenTrailer(true)}
        className="flex-shrink-0 flex items-center gap-1 rounded-md py-3 px-4 transition-colors bg-grayLight hover:bg-grayHover sm:py-3 sm:px-4"
      >
        <img
          src={speakerIcon}
          alt="play icon"
          className="w-4 h-4 object-contain gray-filter sm:w-5 sm:h-5"
        />

        <span className="text-sm font-bold text-grayDark capitalize sm:text-lg">
          watch trailer
        </span>
      </button>

      <button
        className="flex items-center gap-1 rounded-md py-3 px-4 transition-colors bg-grayLight hover:bg-grayHover sm:py-3 sm:px-4"
        onClick={() => setOpenRating(true)}
      >
        <img
          src={rateStarIcon}
          alt="play icon"
          className="w-4 h-4 object-contain gray-filter sm:w-5 sm:h-5"
        />

        <span className="text-sm font-bold text-grayDark capitalize sm:text-lg">
          rate movie
        </span>
      </button>

      <Modal
        open={openRating}
        onClose={() => setOpenRating(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <Box>
          <RatingOption />
        </Box>
      </Modal>

      <Modal
        open={openTrailer}
        onClose={() => setOpenTrailer(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="flex items-center justify-center"
      >
        <Box sx={{paddingX:2}}>
          <iframe
            width="560"
            height="315"
            className="max-w-full"
            src={`https://www.youtube.com/embed/${movie?.videos?.results[0]?.key}`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </Box>
      </Modal>
    </div>
  );
};

export default MovieOptions;
