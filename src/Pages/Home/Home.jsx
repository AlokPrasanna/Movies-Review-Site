import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Head from '../../Components/Head/Head';
import BodyContent from'../../Components/BodyContent/BodyContent';
import '../../Style/Home.scss';
import Popular from '../../Components/Popular/Popular';

function Home() {
  return (
    <div className='home-page'>          
          <Head Title='Home Page'/>
          <div>
            <Header/>
          </div>
          <div>
            <BodyContent>
              <Popular/>
              <br />
            </BodyContent>
          </div>
          <div>
            <Footer/>
          </div>
    </div>
  )
}

export default Home
