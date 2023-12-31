import './App.css';
import Home from './Pages/Home/Home';
import About from './Pages/About/About';
import MovieDetails from './Pages/MovieDetails/MovieDetails';
import FilteredMovies from './Pages/FilteredMovies/FilteredMovies';
import Request from './Pages/Request/Request';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/filtered-movies/:LanguageId/:GenreId' element={<FilteredMovies/>}></Route>
          <Route path='/movie-page/:MovieId' element={<MovieDetails/>}></Route>
          <Route path='/request' element={<Request/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;