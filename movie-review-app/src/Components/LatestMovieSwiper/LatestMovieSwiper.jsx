import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import MovieDetails from '../../MovieDetails/MovieDetails.json';
import '../../Style/LatestMovieImagePropeties.scss';

function LatestMovieSwiper() {
    // Get current Year and month
    const CurrentDate = new Date();
    const CurrentYear = CurrentDate.getFullYear();
    const CurrentMonth = CurrentDate.getMonth() +1; //Months are zero based

    /*console.log(CurrentYear);
    console.log(CurrentMonth);*/
    // Filter movies based on the current year and month
    const filteredMovies = MovieDetails.filter((movie) => {

    // Parse the release date string into a Date object
    const [day, month, year] = movie.releaseDate.split('/');
    const movieDate = new Date(`${month}/${day}/${year}`);
    const movieYear = movieDate.getFullYear();
    const movieMonth = movieDate.getMonth() + 1;
    return movieYear === CurrentYear && movieMonth === CurrentMonth;
    });

  return (
    <div>
        <h1>Latest Movies</h1>
        <div className='latest-swiper'>
        <div className='swiper-button-prev'></div>
            <Swiper className='swiper-container'
                modules={[Autoplay,Navigation]}
                spaceBetween={0}
                slidesPerView={5}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                centeredSlides={true}
            >
                {filteredMovies.map((movie) => (
                    <SwiperSlide className= 'swiper-slide' key={movie.id}>
                        <img className='movie-image'src={movie.path} alt={movie.title} />
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
