import React, { useState } from "react";

const CastCard = ({ cast }) => {
  const [validSrc, setValidSrc] = useState(true);
  return (
    <div className="flex flex-col items-center gap-1.5">
      <div className="relative w-16 h-16 rounded-full overflow-hidden">
        {validSrc ? (
          <img
            src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`}
            alt={cast.name}
            loading="lazy"
            className="w-full h-full object-cover object-top"
            onError={() => setValidSrc(false)}
          />
        ) : (
          <div className="w-full h-full bg-grayDark"></div>
        )}
      </div>

      <h1 className="text-center text-light font-semibold text-xs">
        {cast.name}
      </h1>

      <h2 className="text-center text-light text-sm leading-none line-clamp-1">
        as {cast.character.split("/")[0]}
      </h2>
    </div>
  );
};

export default CastCard;
