import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Head from '../../Components/Head/Head';
import '../../Style/Home.scss';

function Home() {
  return (
    <div className='home-page'>          
          <Head Title='Home Page'/>
          <div>
            <Header/>
          </div>
          <div>
            <Footer/>
          </div>
    </div>
  )
}

export default Home
