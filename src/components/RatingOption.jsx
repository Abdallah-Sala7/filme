import { Rating } from "@mui/material";
import { useState } from "react";

const RatingOption = () => {
  const [rateValue, setRateValue] = useState(1.5);

  const handleRateClick = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex flex-col items-center rounded-lg py-5 px-4 bg-dark border border-yellow sm:w-96">
      <Rating
        name="simple-controlled"
        value={rateValue}
        precision={0.5}
        size="large"
        className="yellow-filter mb-3"
        onChange={(event, newValue) => {
          setRateValue(newValue);
        }}
      />

      <textarea
        name="review"
        id="review"
        cols="30"
        rows="10"
        placeholder="Write your review here..."
        className="h-24 w-full mb-3 bg-grayLighter text-light border border-grayLight rounded-md p-2 outline-none resize-none"
      ></textarea>

      <button
        className="text-yellow border font-semibold border-yellow py-2 px-4 w-full rounded-md hover:bg-yellow hover:text-dark transition-colors"
        onClick={handleRateClick}
      >
        Login to leave a review
      </button>
    </div>
  );
};

export default RatingOption;
