import React, { useState, useEffect } from "react";
import "./Row.css";

import axios from "./axios";

const base_url = "https://image.tmdb.org/t/p/original/";

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      setMovies(request.data.results);
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  console.table(movies);

  return (
    <div className="row">
      {/* title */}
      <h2>{title}</h2>

      {/* container ==> posters */}
      <div className="rows__posters">
        {/* several row posters */}
        {movies.map((movie) => (
          <img
            key={movie.id}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
            className={`row__poster ${isLargeRow && "row__posterLarge"}`}
          />
        ))}
      </div>
    </div>
  );
};

// go into App
export default Row;
