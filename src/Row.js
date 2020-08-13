import React, { useState, useEffect } from "react";

import axios from "./axios";

const Row = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  // A snippet of code which runs based on a specific condition

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);

      console.log(request);
      return request;
    }

    fetchData();
  }, []);

  return (
    <div>
      {/* title */}
      <h2>{title}</h2>

      {/* container ==> posters */}
    </div>
  );
};

// go into App
export default Row;
