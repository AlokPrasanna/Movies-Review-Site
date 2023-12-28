import React, { useState } from 'react';
import '../../Style/CategoryList.scss';

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
              <a href='/category/romance'>Romance</a>
            </li>
            <li>
              <a href='/category/comedy'>Comedy</a>
            </li>
            <li>
              <a href='/category/action'>Action</a>
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
