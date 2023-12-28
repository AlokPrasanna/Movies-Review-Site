import React from 'react';
import { Link } from 'react-router-dom';
import '../../Style/MenuLink.scss';

function MenuLink(props) {
  return (
    <div className='menu-link'>
      <Link to={props.url} >{props.LinkName}</Link>
    </div>
  )
}

export default MenuLink
