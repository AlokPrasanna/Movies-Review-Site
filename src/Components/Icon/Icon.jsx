import React from 'react'
import '../../Style/SocialMeadiaLogo.scss';
import { Link } from 'react-router-dom';

function Icon(props) {
  return (
    <div>
      <Link to={props.url}><img className='img' src={props.Path}/></Link>
    </div>
  )
}

export default Icon
