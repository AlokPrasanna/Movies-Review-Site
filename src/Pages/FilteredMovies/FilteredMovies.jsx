import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import BodyContent from '../../Components/BodyContent/BodyContent'

function FilteredMovies() {
  return (
    <div>
        <Header/><br />
        <BodyContent>
            <h1>Filterd Movie Page</h1>
            <p>Serch Id : {}</p><br />
        </BodyContent>
        <Footer/>      
    </div>
  )
}

export default FilteredMovies
