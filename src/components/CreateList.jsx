import React, { useEffect, useState } from "react";
import { useCreateMovieMutation } from "../app/server/createMovie";

import { movieIds } from "../util/movie_id";

const CreateList = () => {
  const [movieId, setMovieId] = useState(0);

  const [createList, { data, isLoading, isSuccess, error }] =
    useCreateMovieMutation();

  const handClias = () => {
    createList({
      media_id: movieIds[movieId],
    });
  };

  useEffect(() => {
    for (let i = 0; i < movieIds.length; i++) {
      setTimeout(() => {
        createList({
          media_id: movieIds[i],
        });
      }, 250 * i);
    }
  }, []);

  return (
    <div className="p-20 bg-red-100">
      <button onClick={handClias}>click</button>
    </div>
  );
};

export default CreateList;
