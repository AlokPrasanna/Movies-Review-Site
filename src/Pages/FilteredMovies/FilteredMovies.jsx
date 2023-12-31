import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Head from '../../Components/Head/Head';
import BodyContent from '../../Components/BodyContent/BodyContent';
import ImageClickNavigation from '../../Components/ImageClickNavigation/ImageClickNavigation';
import '../../Style/FilteredMovies.scss';
import { useState ,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { Swiper,SwiperSlide } from 'swiper/react';
import { Grid,Pagination} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/grid';
import 'swiper/css/pagination';
import MovieDetails from '../../MovieDetails/MovieDetails.json';


function FilteredMovies() {
  const {LanguageId,GenreId} = useParams();
  const [rowCount, setRowCount] = useState(2); // Default row count
  const [filteredMovies, setFilteredMovies] = useState([]);

  useEffect(() => {
    let filteredMoviesArray = MovieDetails; 
    const languageIdInt = parseInt(LanguageId, 10); // convert Languagr id value into Integer
    const genreIdInt = parseInt(GenreId, 10);

    if (languageIdInt > 0 && genreIdInt === 0) {
      console.log("Filtering by Language ID:", languageIdInt);
      filteredMoviesArray = filteredMoviesArray.filter((movie) => movie.language === languageIdInt);
    }else if(languageIdInt === 0 && genreIdInt > 0){
      filteredMoviesArray = filteredMoviesArray.filter((movie) => movie.genre.includes(genreIdInt));
    }else{
      alert("Not Found movie");
    }

    // Calculate the total number of slides 
    const totalSlides = filteredMoviesArray.length;
    //console.log("Fitterd movie list",filteredMoviesArray);
    //console.log("Total slide",totalSlides);

    // Calculate the number of rows dynamically based on the total slides
    const calculatedRowCount = Math.ceil(totalSlides / 3); 
    console.log(calculatedRowCount);
    setRowCount(calculatedRowCount);

    // Set filtered movies
    setFilteredMovies(filteredMoviesArray);
  }, [LanguageId, GenreId]);
  return (
    <div className='filtered-movies'>
      <Head Title="Your Movies"/>
        <Header/>
      <div className='body'>
     
        <Swiper
             modules={[Grid, Pagination]}
             slidesPerView={3}
             grid={{
               rows: 3,
             }}
             spaceBetween={30}
             pagination={{
               clickable: true,
             }}
             className="filter-movie-swiper"
              >
              {filteredMovies.map((movie) => (
                <SwiperSlide key={movie.id}>
                  <ImageClickNavigation path={movie.path} movieId={movie.id} className="image" />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
      
        <Footer/>
    </div>
  )
}

export default FilteredMovies