import '../../Style/SearchBar.scss';
import React, { useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
const Key = localStorage.getItem('TMDBKey');


function SearchBar() {
   const [Query,setQuery] = useState('');
   const [Suggestions , setSuggestions] = useState([]);
   const Navigate = useNavigate();

   useEffect(() => {
    if(Query.trim() === ''){
        setSuggestions([]);
        return;
    }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${Key}&query=${Query}`)
    .then(res => res.json())
    .then(data => setSuggestions(data.results))
    .catch(err => console.error("Error! : ", err))
   },[Query]);

   const HandeleSelectMovie = (MovieId) => {
        Navigate(`/movie-page/${MovieId}`);
        setQuery('');
        setSuggestions([]);
   };

  return (
    <div className='search-bar'>  
        <div>
            <input
            className='text-area'
            type="text"
            value={Query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search for movies..."/>
        </div>
        <div>{Suggestions.length > 0 && (
            <ul className='suggestions-list'>
                {Suggestions.map((Movie) => (
                    <li key={Movie.id} onClick={() => HandeleSelectMovie(Movie.id)}>{Movie.title}</li>
                )).slice(0,5)}
            </ul>
        )}
        </div>      
    </div>
  )
}

export default SearchBar