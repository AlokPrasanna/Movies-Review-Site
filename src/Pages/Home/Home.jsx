import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Head from '../../Components/Head/Head';
import BodyContent from'../../Components/BodyContent/BodyContent';
import '../../Style/Home.scss';
import 'swiper/swiper-bundle.css'
import LatestMovieSwiper from '../../Components/LatestMovieSwiper/LatestMovieSwiper';
import SaveMovieId from '../../SaveMovieId/SaveMovieId';

function Home() {
  return (
    <div className='home-page'>          
          <Head Title='Home Page'/>
          <div>
            <Header/>
          </div>
          <div>
            <BodyContent>
              <LatestMovieSwiper/>
            </BodyContent>
          </div>
          <div>
            <Footer/>
          </div>
          <SaveMovieId/>
    </div>
  )
}

export default Home
