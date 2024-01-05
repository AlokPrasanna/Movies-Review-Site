import React from 'react';
import { ApiContextProvider } from './Components/ApiContex/ApiContext';
import { ApiContextTitleProvider } from './Components/ApiConetexTitle/ApiContexTitle';
import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import FilteredMovies from './Pages/FilteredMovies/FilteredMovies';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
const TMDBKeyVal = "61296627ee1e0a8307825b64b1470005";
localStorage.setItem('TMDBKey',TMDBKeyVal);

function App() {
  return (
    <div className="App">
      <ApiContextProvider><ApiContextTitleProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/about' element={<About/>}></Route>
            <Route path='/filtered-movies' element={<FilteredMovies/>}></Route>
            <Route path='/movie-page/:MovieId' element={<MovieDetails/>}></Route>
          </Routes>
        </BrowserRouter></ApiContextTitleProvider>
      </ApiContextProvider>
    </div>
  );
}

export default App;