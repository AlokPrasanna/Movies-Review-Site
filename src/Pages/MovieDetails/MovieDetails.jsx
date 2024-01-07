import '../../Style/MovieDetails.scss';
import React, { useEffect, useState, useCallback } from 'react';
import { useApiContextId } from '../../Components/ApiContexId/ApiContexId';
import StarRating from '../../Components/StarRating/StarRating';
import YouTube from 'react-youtube';
import { useParams } from 'react-router-dom';
import Head from '../../Components/Head/Head';
import Header from '../../Components/Header/Header';
import BodyContent from '../../Components/BodyContent/BodyContent';
import Footer from '../../Components/Footer/Footer';
import SaveMovieId from '../../SaveMovieId/SaveMovieId';
import axios from 'axios';
const Key = localStorage.getItem('TMDBKey');

function MovieDetails() {
  const { MovieId } = useParams();
  const {setContextIdData} = useApiContextId();
  const MovieIdInt = parseInt(MovieId, 10);
  const [MovieDetails,setMovieDetails] = useState("");
  const [MovieVideo, setMovieVideo] = useState([]);
  const [Genres,setGenres] = useState([]);
  const [RunTime, setRunTime] = useState(0);
  const [MRV,setMRV] = useState(0);
  const [MovieRatings ,setMovieRatings] = useState();
  const [NewFansCount, setNewFansCount]  = useState();
  console.log("Movie Id : ", MovieIdInt);

  const GetMovieDetails = () => {
    try{
      fetch(`https://api.themoviedb.org/3/movie/${MovieId}?api_key=${Key}`)
      .then(res => res.json())
      .then(data => setMovieDetails(data))
      .catch(err => {
        console.error("Error! : ", err);
      })

    }catch(err){
      console.error("Error! : ", err);
    }
  }

  const GetMovieViedo = () =>{
    try{
      fetch(`https://api.themoviedb.org/3/movie/${MovieId}/videos?api_key=${Key}`)
      .then(res => res.json())
      .then(data =>  setMovieVideo(data.results))
      .catch(err => { 
        console.error("Error! : ", err);
      })

    }catch(err){
      console.error("Error! : ", err);
    }
  }

  useEffect(() => {
    try{
      GetMovieDetails();
      GetMovieViedo();
      setContextIdData(MovieId);
    }catch(err){
      console.error("Error! : ", err );
    }
   
  },[MovieId]);

  useEffect(() => {
    try {
      if (MovieDetails.genres) {
        setGenres(MovieDetails.genres);
      }
      ConvertRunTime(parseInt(MovieDetails.runtime, 10));
    } catch (err) {
      console.error("Error! : ", err);
    }
  }, [MovieDetails]);

  const ConvertRunTime = (runtime) => {
    console.log("runTime: ", runtime );
   
    // Calculate hours and minutes
    const hours = Math.floor(runtime / 60);
    const minutes = runtime % 60;
  
    // Construct the formatted string
    const formattedTime = `${hours}h ${minutes}m`;
  
    setRunTime(formattedTime)
  };  

  console.log("Genres: ", Genres);

  const fetchMovieRatings = useCallback( async () => {
    try {
      const response = await axios.get('http://localhost:3001/get-movie-ratings');
      //console.log(response);
      // Filter the ratings based on the current movie ID
      const filteredRatings = response.data.filter(rating => rating.movie_id === MovieIdInt);
      console.log("Filtered Rating: ",filteredRatings);

      // Calculate MRV based on ratings
      try{
        if (filteredRatings.length > 0) {
          const RatingCount = filteredRatings.reduce((total, rating) => total + rating.rating_count, 0);
          const FansCount = filteredRatings.reduce((total, rating) => total + rating.fans_count, 0);
          setMovieRatings(RatingCount);
          setNewFansCount(FansCount);
          console.log("Rating Count: ",RatingCount);
          console.log("FansCount: ",FansCount);
  
          if (!isNaN(RatingCount) && !isNaN(FansCount) && FansCount !== 0) {
            const CalculateMRV = RatingCount / FansCount;
            console.log("Calculate MRV value: ",CalculateMRV);
            setMRV(CalculateMRV.toFixed(1));
          } else {
            setMRV(0);
            console.log("Rating null");
          }
        } else {
          console.log("No ratings found");
        }
      } catch (error) {
        console.error('Data Not Valid:', error);
      }
      /*const totalRatingValue = filteredRatings.reduce((total, rating) => total + rating.rating_value, 0);
      const fansCount = filteredRatings.reduce((total, rating) => total + rating.fans_count, 0);

      const calculatedMRV = fansCount > 0 ? totalRatingValue / fansCount : 0;
      setMRV(calculatedMRV.toFixed(1));*/
    } catch (error) {
      console.error('Error fetching movie ratings:', error);
    }});

    useEffect(() => {
      fetchMovieRatings();
    }, [MovieIdInt,fetchMovieRatings]);
  

  const handleRatingChange = async (newRating) => {
    
    try {
      console.log("New user rate: ",newRating)
      let CalNewRatings = newRating;
      CalNewRatings += MovieRatings;
      console.log("Movie Id: ", MovieId);
      console.log("Old Rating Value: ",MovieRatings);
      console.log("New raring value: ", CalNewRatings);
      console.log("Old Fans count: ", NewFansCount);
      let CalNewFansCount = NewFansCount;
      CalNewFansCount +=1;
      console.log("New fans Count: ",CalNewFansCount)

      await axios.put('http://localhost:3001/update-rating', {
        movieId: MovieIdInt,
        ratingValue: CalNewRatings,
        newFansCount: CalNewFansCount 
      });
      
      fetchMovieRatings();
    } catch (error) {
      console.error('Error adding rating:', error);
    }
  };
  console.log("MRV value : ",MRV);

  return (
    <div className='movie-details'>
      <Head Title="Movie Details" />
      <Header />
      <BodyContent>
        <div className='movie'>
          <div className='left-side'>
            <span className='m-title'>{MovieDetails ? MovieDetails.original_title : " "}</span><br />
            <span className='m-releasedate-runtime'>{MovieDetails ? MovieDetails.release_date : " " }  .  {RunTime ? RunTime : " "} </span>
            {Genres && Genres.map(genre => ( 
                <span className='genres'>{genre ? genre.name: " "}</span>
            ))}<br /><br />
            <span className='m-overview'>{MovieDetails ? MovieDetails.overview : " "}</span><br />
            <span></span><br />
          </div>
          <div className='right-side'>
            <div>MRV Rating:   {MRV != 0 ? MRV : "Rate Me Please ;) "}</div>
            <div>Rating Count: {NewFansCount != 0 ? NewFansCount : " "}</div>
            <div>Your Rating <StarRating onChange={handleRatingChange} /></div>
            
          </div>
        </div>
      <div className='image-video'>
        <div className='movie-image'><img src={`https://image.tmdb.org/t/p/original${MovieDetails && MovieDetails.poster_path}`} alt={MovieDetails.title}/></div>
          <div className='movie-video'>
            <YouTube videoId={MovieVideo[7]?.key} />
          </div>
      </div>
      </BodyContent>
      <Footer />
      <SaveMovieId/>
    </div>
  );
}

export default MovieDetails;
