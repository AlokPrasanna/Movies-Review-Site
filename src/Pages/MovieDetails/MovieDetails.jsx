import React, { useEffect, useState } from 'react';
import '../../Style/MovieDetails.scss';
import Head from '../../Components/Head/Head';
import Header from '../../Components/Header/Header';
import BodyContent from '../../Components/BodyContent/BodyContent';
import Footer from '../../Components/Footer/Footer';
import { useParams } from 'react-router-dom';
import MovieDetail from '../../MovieDetails/MovieDetails.json';
import StarRating from '../../Components/StarRating/StarRating';
import axios from 'axios';

function MovieDetails() {
  const { MovieId } = useParams();
  const MovieIdInt = parseInt(MovieId, 10);

  const MovieInfor = MovieDetail.find((movie) => movie.id === MovieIdInt);

  const [MovieRatings, setMovieRatings] = useState([]);
  const [MRV, setMRV] = useState(null);
  const [newFansCount, setNewFansCount] = useState(0); 

  const fetchMovieRatings = async () => {
    try {
      const response = await axios.get('http://localhost:3001/get-movie-ratings');
      // Filter the ratings based on the current movie ID
      const filteredRatings = response.data.filter(rating => rating.movie_id === MovieIdInt);
      setMovieRatings(filteredRatings);

      // Calculate MRV based on ratings
      const totalRatingValue = filteredRatings.reduce((total, rating) => total + rating.rating_value, 0);
      const fansCount = filteredRatings.reduce((total, rating) => total + rating.fans_count, 0);

      const calculatedMRV = fansCount > 0 ? totalRatingValue / fansCount : 0;
      setMRV(calculatedMRV.toFixed(1));
    } catch (error) {
      console.error('Error fetching movie ratings:', error);
    }
  };

  useEffect(() => {
    fetchMovieRatings();
  }, [MovieIdInt, MovieRatings]);

  const handleRatingChange = async (newRating) => {
    try {
      await axios.put('http://localhost:3001/update-rating', {
        movieId: MovieIdInt,
        ratingValue: newRating,
        newFansCount: newFansCount + 1 
      });

      fetchMovieRatings();
      setNewFansCount((prevCount) => prevCount + 1); 
    } catch (error) {
      console.error('Error adding rating:', error);
    }
  };

  return (
    <div className='movie-details'>
      <Head Title="Movie Details" />
      <Header />
      <BodyContent>
        <div className='content'>
          <div><img className='pic' src={MovieInfor.path} alt={MovieInfor.title} /></div>
          <div className='data'>
            <span>MRV Value: {MRV !== null ? MRV : 'Not Rated Yet'}</span><br />
            <span>Title: {MovieInfor.title}</span><br />
            {/* Add other details as needed */}
            <span><StarRating onChange={handleRatingChange} /></span><br />
          </div>
        </div>
      </BodyContent>
      <Footer />
    </div>
  );
}

export default MovieDetails;
