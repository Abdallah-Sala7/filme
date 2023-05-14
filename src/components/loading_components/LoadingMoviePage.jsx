import React from "react";

const LoadingMoviePage = () => {
  return (
    <section>
      <div className="w-full aspect-video mb-5 h-64 max-h-96 bg-grayLighter animate-pulse rounded-lg sm:h-auto"></div>

      <div className="mb-5 w-full flex items-center gap-2 flex-wrap">
        <span className="w-36 h-12 rounded-md bg-grayLighter animate-pulse"></span>
        <span className="w-36 h-12 rounded-md bg-grayLighter animate-pulse"></span>
        <span className="w-36 h-12 rounded-md bg-grayLighter animate-pulse"></span>
      </div>

      <div className="w-full flex flex-col mb-5">
        <span className="w-8/12 h-5 mb-2 bg-grayLighter animate-pulse"></span>
        <span className="w-4/5 h-5 bg-grayLighter animate-pulse"></span>
      </div>
    </section>
  );
};

export default LoadingMoviePage;
