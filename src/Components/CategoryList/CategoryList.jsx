import React, { useState } from 'react';
import '../../Style/CategoryList.scss';
import { Link } from 'react-router-dom';

function CategoryList({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
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
              <Link to="/filtered-movies/0/1">Romance</Link>
            </li>
            <li>
              <Link to="/filtered-movies/0/2">Comedy</Link>
            </li>
            <li>
              <Link to="/filtered-movies/0/3">Action</Link>
            </li>
            {/*Should create all genres */}
          </ul>
        </div>
      </div>
      {children}
    </div>
  );
}

export default CategoryList;
