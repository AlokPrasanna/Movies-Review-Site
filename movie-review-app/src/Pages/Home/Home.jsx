import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import Head from '../../Components/Head/Head'

function Home() {
  return (
    <div>          
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
