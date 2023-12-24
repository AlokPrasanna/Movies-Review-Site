import React from 'react'
import Icon from '../Icon/Icon'

function Footer() {
  return (
    <div>
      <div>
        <Icon Path='movie-review-app\src\Components\SocialMediaLogos\tiktok.png' />
        <Icon Path='movie-review-app\src\Components\SocialMediaLogos\instagram.png' />
        <Icon Path='movie-review-app\src\Components\SocialMediaLogos\facebook.png' />
        <Icon Path='movie-review-app\src\Components\SocialMediaLogos\whatsapp.png' />
        <Icon Path='movie-review-app\src\Components\SocialMediaLogos\twitter.png' />
      </div>
      <div>
        &copy; <p>Movies Review Application 2023</p>
      </div>
    </div>
  )
}

export default Footer
