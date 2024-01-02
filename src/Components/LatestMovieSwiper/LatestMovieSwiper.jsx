import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation,Pagination} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import MovieDetails from '../../MovieDetails/MovieDetails.json';
import ImageClickNavigation from '../ImageClickNavigation/ImageClickNavigation';
import '../../Style/LatestMovieImagePropeties.scss';

function LatestMovieSwiper() {
    // Get current Date
    const CurrentDate = new Date();
    /*const CurrentYear = CurrentDate.getFullYear();
    const CurrentMonth = CurrentDate.getMonth() +1; //Months are zero based*/
    const SixMonthsAgo = new Date();
    SixMonthsAgo.setMonth(CurrentDate.getMonth() -6);
    /*console.log(CurrentYear);
    console.log(CurrentMonth);*/
    // Filter movies based on the current year and month
    const filteredMovies = MovieDetails.filter((movie) => {
    const [day, month, year] = movie.releaseDate.split('/');
    const movieDate = new Date(`${month}/${day}/${year}`);
    return movieDate >= SixMonthsAgo && movieDate <= CurrentDate;
    });
    console.log(filteredMovies);

  return (
    <div>
        <h1>Latest Movies</h1>
        <div className='latest-swiper'>
        <div className='swiper-button-prev'></div>
            <Swiper 
                modules={[Navigation,Pagination]}
                spaceBetween={0}
                slidesPerView={3}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                pagination={true}
            >
                {filteredMovies.map((movie) => (
                    <SwiperSlide className= 'swiper-slide' key={movie.id}>
                        <ImageClickNavigation movieId ={movie.id} path={movie.path} alt={movie.title}/>
                    </SwiperSlide> 
                ))}
                {/* Navigation Buttons */}
                
                
            </Swiper>
            <div className='swiper-button-next'></div>
        </div>        
        <br />      
    </div>
  )
}

export default LatestMovieSwiper
