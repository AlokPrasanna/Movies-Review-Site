import React from 'react';
import Icon from '../Icon/Icon';
import '../../Style/Footer.scss';
import '../../Style/SocialMeadiaLogo.scss';

function Footer() {
  return (
    <div className='footer'>
      <footer>
        <div className='icon'>
          <Icon Path='/Images/SocialMediaLogos/tiktok.png' url='#ticktol' />
          <Icon Path='/Images/SocialMediaLogos/instagram.png' url='#instergram' />
          <Icon Path='/Images/SocialMediaLogos/facebook.png' url='#facebook' />
          <Icon Path='/Images/SocialMediaLogos/whatsapp.png' url='#whatsApp' />
          <Icon Path='/Images/SocialMediaLogos/twitter.png' url='#twitter' />
        </div>
        <div className='copy-right'>
          &copy;Movies Review Application 2023
        </div>
      </footer>
    </div>
  )
}

export default Footer
