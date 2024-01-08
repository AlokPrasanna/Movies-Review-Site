import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Head from '../../Components/Head/Head'
import BodyContent from '../../Components/BodyContent/BodyContent'
import '../../Style/About.scss';

function About() {
  return (
    <div className='about-page'>
      <Head Title='About Page'/>
      <div>
        <Header/>
      </div>
          <BodyContent>
              <h1>About Page</h1>
              <br />
          </BodyContent>
      <div>
        <Footer/>
      </div>      
    </div>
  )
}

export default About
