import React, { useEffect } from 'react';
import MovieDetails from '../MovieDetails/MovieDetails.json';
import axios from 'axios';

function SaveMovieId() {
  useEffect(() => {
    const saveMovieId = async () => {
      try {
        const promises = MovieDetails.map(async (movie) => {
          const movieId = { movieId: movie.id };
          const response = await axios.post("http://localhost:3001/add-new-movie-id", movieId);
          console.log(response.data.message);
        });

        await Promise.all(promises);
      } catch (error) {
        console.log("Save Movie Id Error:", error);
      }
    };

    saveMovieId();
  }, []);

  return <div></div>;
}

export default SaveMovieId;
