import React from 'react'
import '../../Style/SocialMeadiaLogo.scss';

function Icon(props) {
  return (
    <div>
      <a href={props.url}><img className='img' src={props.Path}/></a>
    </div>
  )
}

export default Icon
