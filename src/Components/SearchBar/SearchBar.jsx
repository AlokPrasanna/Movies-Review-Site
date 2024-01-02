import React, { useState } from 'react';
import MovieDetails from '../../MovieDetails/MovieDetails.json';

function SearchBar() {
    const [InputValues,setInputValues] =useState();
    const [Suggestions , setSuggestions] = useState([]);


  return (
    <div>
        <div>
            <input
            type="text"
            value={InputValues}
            onChange={handleInputChange}
            placeholder="Type to search..."/>
        </div>
        <div>
            <ul>
                {Suggestions.map((suggestion,index))}
            </ul>
        </div>      
    </div>
  )
}

export default SearchBar
