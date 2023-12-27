import React, { useState } from 'react';
import '../../Style/CategoryList.scss';

function LanguageList({children}) {
    const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  const GetLanguageId = (id) => {
        //console.log(id);
  };

  return (
    <div className='category-list'>
      <div
        className={`categories ${isOpen ? 'open' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div>
          <ul>
            <li>
              <a onClick={ () =>{GetLanguageId(1)} }>English</a>
            </li>
            <li>
              <a onClick={ () =>{GetLanguageId(2)} }>Tamil</a>
            </li>
            <li>
              <a onClick={ () =>{GetLanguageId(3)} }>Telugu</a>
            </li>
            {/*Should create all genres */}
          </ul>
        </div>
      </div>
      {children}
    </div>
  )
}

export default LanguageList
