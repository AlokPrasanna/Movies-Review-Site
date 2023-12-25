import React from 'react'
import '../../Style/MenuLink.scss';

function MenuLink(props) {
  return (
    <div className='menu-link'>
      <a href={props.url}>{props.LinkName}</a>
    </div>
  )
}

export default MenuLink
