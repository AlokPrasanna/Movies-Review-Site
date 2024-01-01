import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay,Navigation} from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import MovieDetails from '../../MovieDetails/MovieDetails.json';
import ImageClickNavigation from '../ImageClickNavigation/ImageClickNavigation';

function TopTen() {
  return (
    <div>
        <h1>Top Ten</h1>
        <div className='latest-swiper'>
        <div className='swiper-button-prev'></div>
            <Swiper 
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
                        <ImageClickNavigation movieId ={movie.id} path={movie.path}/>
                    </SwiperSlide> 
                ))}               
                
            </Swiper>
            <div className='swiper-button-next'></div>
        </div>        
        <br />      
      
    </div>
  )
}

export default TopTen
