import React from 'react'
import MenuLink from '../MenuLink/MenuLink';
import '../../Style/Header.scss';

function Header() {
  return (
    <div className='header'>
        <header className='nav-bar'>{/*/ nav means navigation */}
            <a href='/home' className='app-name'>MRV</a>
            <MenuLink LinkName='Home' url='/home'/>
            <MenuLink LinkName='Category' url='/category'/>
            <MenuLink LinkName='Request' url='/request'/>
            <MenuLink LinkName='About' url='/about'/>
        </header>
      <br />
    </div>
  )
}

export default Header
