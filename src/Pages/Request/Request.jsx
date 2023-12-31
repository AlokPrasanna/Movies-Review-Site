import React from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Head from '../../Components/Head/Head';
import BodyContent from '../../Components/BodyContent/BodyContent';
import '../../Style/Request.scss';

function Request() {
  return (
    <div className='request-page'>
      <Head Title='Send Request'/>
      <div>
        <Header/>
      </div>
      <div>
        <BodyContent>
          <h1>Request Page</h1>
        </BodyContent>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Request
