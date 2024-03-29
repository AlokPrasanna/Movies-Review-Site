import React, { useState } from 'react';
import {FaStar} from 'react-icons/fa';
import '../../Style/StarRating.scss'

function StarRating({onChange}) {
    const [rate,setRating] = useState(null);
    //const [rateColor,setRateColor] = useState(null);

    const handleStarClick = (currentRate) => {
        const confirmation = window.confirm(`Do you want to rate ${currentRate} stars?`);
    
        if (confirmation) {
          setRating(currentRate);
          onChange(currentRate);
          alert(`You rated ${currentRate} stars!`);
        }
    }

  return (
    <div className='lable'>
      {[...Array(5)].map((star,index) =>{
        const currentRate = index+1;
        return (
            <label>
                <input type='radio' name='rate' id={`radio-${currentRate}`}
                    value={currentRate}
                    onClick={() => handleStarClick(currentRate)}
                />
                <FaStar size={35}
                    color={currentRate <= rate ? "yellow" : "grey"}
                />
            </label>
        )
      })}
    </div>
  )
}

export default StarRating
