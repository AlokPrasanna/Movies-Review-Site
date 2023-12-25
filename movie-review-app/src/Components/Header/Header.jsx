import React from 'react'
import MenuLink from '../MenuLink/MenuLink';
import '../../Style/Header.scss';

function Header() {
  return (
    <div className='header'>
        <header className='nav-bar'>{/*/ nav means navigation */}
            <a href='#' className='app-name'>MRV</a>
            <MenuLink LinkName='Home' url='#Home'/>
            <MenuLink LinkName='Category' url='#Category'/>
            <MenuLink LinkName='Request' url='#Request'/>
            <MenuLink LinkName='About' url='#About'/>
        </header>
      <br />
    </div>
  )
}

export default Header
